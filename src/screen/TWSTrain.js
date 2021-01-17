Logger.log(Logger.LogLevel.DEBUG, "Loading screen/TWSTrain.js", "()", "screen/TWSTrain.js");

var TWSTrain = TWSTrain || {
        getScreenInformation : function() {
            this.getRecruitQueue();
            this.getUnits();
        },
        getRecruitQueue : function() {
            try {
                var response = page.content;

                if(response.contains("current_prod_wrapper")) {
                    response = response.substr(response.indexOf("current_prod_wrapper"));
                    while (response.contains('<tr class="lit">') || response.contains('<tr class="sortable_row"')) {
                        var amount;
                        var unit;
                        var triggerTime;
                        if (response.contains("<tr class=\"lit\">")
                            && (!response.contains("<tr class=\"sortable_row\"")
                            || response.indexOf("<tr class=\"lit\">") < response.indexOf("<tr class=\"sortable_row\""))) {
                            response = response.substr(response.indexOf("<tr class=\"lit\">"));
                            response = response.substr(response.indexOf("</div>") + 7);
                            response = response.trim();
                            amount = response.substr(0, response.indexOf(" "));
                            response = response.substr(response.indexOf(" ") + 1);
                            unit = response.substr(0, response.indexOf("</td>")).trim();
                            response = response.substr(response.indexOf("<td class=\"lit-item\">") + 21);
                            response = response.substr(response.indexOf("<td class=\"lit-item\">") + 21);
                            triggerTime = (response.substr(0, response.indexOf("</td>")));
                        } else {
                            response = response.substr(response.indexOf("<tr class=\"sortable_row\""));
                            response = response.substr(response.indexOf("</div>") + 7);
                            response = response.trim();
                            amount = response.substr(0, response.indexOf(" "));
                            response = response.substr(response.indexOf(" ") + 1);
                            unit = response.substr(0, response.indexOf("</td>")).trim();
                            response = response.substr(response.indexOf("<td>") + 4);
                            response = response.substr(response.indexOf("<td>") + 4);
                            triggerTime = (response.substr(0, response.indexOf("</td>")));
                        }

                        var unitType;
                        if(unit == "Speerträger") unitType = TWHelper.UnitType.SPEAR;
                        else if(unit == "Schwertkämpfer") unitType = TWHelper.UnitType.SWORD;
                        else if(unit == "Axtkämpfer") unitType = TWHelper.UnitType.AXE;
                        else if(unit == "Bogenschütze") unitType = TWHelper.UnitType.ARCHER;
                        else if(unit == "Bogenschützen") unitType = TWHelper.UnitType.ARCHER;
                        else if(unit == "Späher") unitType = TWHelper.UnitType.SPY;
                        else if(unit == "Leichte Kavallerie") unitType = TWHelper.UnitType.LIGHT;
                        else if(unit == "Berittener Bogenschütze") unitType = TWHelper.UnitType.MARCHER;
                        else if(unit == "Berittene Bogenschützen") unitType = TWHelper.UnitType.MARCHER;
                        else if(unit == "Schwere Kavallerie") unitType = TWHelper.UnitType.HEAVY;
                        else if(unit == "Rammbock") unitType = TWHelper.UnitType.RAM;
                        else if(unit == "Rammböcke") unitType = TWHelper.UnitType.RAM;
                        else if(unit == "Katapult") unitType = TWHelper.UnitType.CATAPULT;
                        else if(unit == "Katapulte") unitType = TWHelper.UnitType.CATAPULT;
                        else {
                            Logger.log(Logger.LogLevel.CRITICAL, "Unknown unit: " + unit, "getRecruitQueue()", "screen/TWSTrain.js");
                        }

                        triggerTime = TWHelper.convertTWTimeToLong(triggerTime);

                        for(var i = amount - 1; i >= 0; i--) {
                            var triggerTimeSingleUnit = triggerTime - i * TWHelper.getUnitBuildTimeInMillis(unitType, twClient.actVillageId);
                            if (RecruitEvent.getIndex(twClient.actVillageId, triggerTimeSingleUnit, unitType) == -1) {
                                Logger.log(Logger.LogLevel.DEBUG, "Recruit Unit [" + twClient.actVillageId + "]"
                                                                + " UnitType: " + unitType
                                                                + ", Trigger: " + triggerTimeSingleUnit, "getRecruitQueue()", "screen/TWSTrain.js");
                                recruitEvents.push(new RecruitEvent(twClient.actVillageId, triggerTimeSingleUnit, unitType));
                            }
                        }
                    }
                }
            } catch (err) {
                Logger.log(Logger.LogLevel.CRITICAL, err.name + "->" + err.message, "getRecruitQueue()", "screen/TWSTrain.js");
            }
        },
        getUnits : function() {
            try {
                var response = page.content;

                response = response.substring(response.indexOf("contentContainer"));
                response = response.substring(response.indexOf("train_form"));
                response = response.substring(0, response.indexOf("</form>"));

                var pv = PlayerVillage.getVillage(twClient.actVillageId);

                var spear_village = 0, spear_all = 0;
                if (pv.barracks_level >= 1 && response.contains("Speerträger"))
                {
                    response = response.substring(response.indexOf("<td style=\"text-align: center\">") + 31);
                    spear_village = response.substring(0, response.indexOf("/"));
                    response = response.substring(response.indexOf("/") + 1);
                    spear_all = response.substring(0, response.indexOf("<"));
                }
                var sword_village = 0, sword_all = 0;
                if (pv.barracks_level >= 1 && pv.smith_level >= 1 && response.contains("Schwertkämpfer"))
                {
                    response = response.substring(response.indexOf("<td style=\"text-align: center\">") + 31);
                    sword_village = response.substring(0, response.indexOf("/"));
                    response = response.substring(response.indexOf("/") + 1);
                    sword_all = response.substring(0, response.indexOf("<"));
                }
                var axe_village = 0, axe_all = 0;
                if (pv.barracks_level >= 1 && pv.smith_level >= 2 && response.contains("Axtkämpfer"))
                {
                    response = response.substring(response.indexOf("<td style=\"text-align: center\">") + 31);
                    axe_village = response.substring(0, response.indexOf("/"));
                    response = response.substring(response.indexOf("/") + 1);
                    axe_all = response.substring(0, response.indexOf("<"));
                }
                var archer_village = 0, archer_all = 0;
                if (pv.barracks_level >= 5 && pv.smith_level >= 5 && WorldConfig.archer != 0
                    && response.contains("Bogenschütze") && response.indexOf("Bogenschütze") < response.indexOf("archer_0_cost"))
                {
                    response = response.substring(response.indexOf("<td style=\"text-align: center\">") + 31);
                    archer_village = response.substring(0, response.indexOf("/"));
                    response = response.substring(response.indexOf("/") + 1);
                    archer_all = response.substring(0, response.indexOf("<"));
                }
                var spy_village = 0, spy_all = 0;
                if (pv.stable_level >= 1 && response.contains("Späher"))
                {
                    response = response.substring(response.indexOf("<td style=\"text-align: center\">") + 31);
                    spy_village = response.substring(0, response.indexOf("/"));
                    response = response.substring(response.indexOf("/") + 1);
                    spy_all = response.substring(0, response.indexOf("<"));
                }
                var light_village = 0, light_all = 0;
                if (pv.stable_level >= 3 && response.contains("Leichte Kavallerie"))
                {
                    response = response.substring(response.indexOf("<td style=\"text-align: center\">") + 31);
                    light_village = response.substring(0, response.indexOf("/"));
                    response = response.substring(response.indexOf("/") + 1);
                    light_all = response.substring(0, response.indexOf("<"));
                }
                var marcher_village = 0, marcher_all = 0;
                if (pv.stable_level >= 5 && WorldConfig.archer != 0 && response.contains("Berittener Bogenschütze"))
                {
                    response = response.substring(response.indexOf("<td style=\"text-align: center\">") + 31);
                    marcher_village = response.substring(0, response.indexOf("/"));
                    response = response.substring(response.indexOf("/") + 1);
                    marcher_all = response.substring(0, response.indexOf("<"));
                }
                var heavy_village = 0, heavy_all = 0;
                if (pv.stable_level >= 10 && pv.smith_level >= 15 && response.contains("Schwere Kavallerie"))
                {
                    response = response.substring(response.indexOf("<td style=\"text-align: center\">") + 31);
                    heavy_village = response.substring(0, response.indexOf("/"));
                    response = response.substring(response.indexOf("/") + 1);
                    heavy_all = response.substring(0, response.indexOf("<"));
                }
                var ram_village = 0, ram_all = 0;
                if (pv.garage_level >= 1 && response.contains("Rammbock"))
                {
                    response = response.substring(response.indexOf("<td style=\"text-align: center\">") + 31);
                    ram_village = response.substring(0, response.indexOf("/"));
                    response = response.substring(response.indexOf("/") + 1);
                    ram_all = response.substring(0, response.indexOf("<"));
                }
                var catapult_village = 0, catapult_all = 0;
                if (pv.garage_level >= 2 && pv.smith_level >= 12 && response.contains("Katapult"))
                {
                    response = response.substring(response.indexOf("<td style=\"text-align: center\">") + 31);
                    catapult_village = response.substring(0, response.indexOf("/"));
                    response = response.substring(response.indexOf("/") + 1);
                    catapult_all = response.substring(0, response.indexOf("<"));
                }

                Logger.log(Logger.LogLevel.DEBUG, twClient.actVillageId
                    + ": Sp" + spear_village + "/" + spear_all
                    + ", Sw"+ sword_village + "/" + sword_all
                    + ", Ax"+ axe_village + "/" + axe_all
                    + ", Ar"+ archer_village + "/" + archer_all
                    + ", Sp"+ spy_village + "/" + spy_all
                    + ", Li"+ light_village + "/" + light_all
                    + ", Ma"+ marcher_village + "/" + marcher_all
                    + ", He"+ heavy_village + "/" + heavy_all
                    + ", Ra"+ ram_village + "/" + ram_all
                    + ", Ca"+ catapult_village + "/" + catapult_all, "getUnits()", "screen/TWSTrain.js");

                pv.spear_village = spear_village;
                pv.spear_all = spear_all;
                pv.sword_village = sword_village;
                pv.sword_all = sword_all;
                pv.axe_village = axe_village;
                pv.axe_all = axe_all;
                pv.archer_village = archer_village;
                pv.archer_all = archer_all;
                pv.spy_village = spy_village;
                pv.spy_all = spy_all;
                pv.light_village = light_village;
                pv.light_all = light_all;
                pv.marcher_village = marcher_village;
                pv.marcher_all = marcher_all;
                pv.heavy_village = heavy_village;
                pv.heavy_all = heavy_all;
                pv.ram_village = ram_village;
                pv.ram_all = ram_all;
                pv.catapult_village = catapult_village;
                pv.catapult_all = catapult_all;
            } catch (err) {
                Logger.log(Logger.LogLevel.CRITICAL, err.name + "->" + err.message, "getUnits()", "screen/TWSTrain.js");
            }
        },
        getRecruitQueueCountByUnitType :function($unitType) {
            var train_queue_count = 0;
            var content = page.content;

            switch ($unitType) {
                case TWHelper.UnitType.SPEAR:
                case TWHelper.UnitType.SWORD:
                case TWHelper.UnitType.AXE:
                case TWHelper.UnitType.ARCHER:
                    if (content.contains('trainqueue_wrap_barracks')) {
                        train_queue_count++;
                        content = content.substr(content.indexOf('trainqueue_wrap_barracks'));
                        content = content.substr(0, content.indexOf('</table>'));
                        if (content.contains('trainorder_')) {
                            content = content.substr(content.lastIndexOf('trainorder_') + 11);
                            train_queue_count = Number(content.substr(0, content.indexOf('"'))) + 2;
                        }
                    }
                    break;
                case TWHelper.UnitType.SPY:
                case TWHelper.UnitType.LIGHT:
                case TWHelper.UnitType.MARCHER:
                case TWHelper.UnitType.HEAVY:
                    if (content.contains('trainqueue_wrap_stable')) {
                        train_queue_count++;
                        content = content.substr(content.indexOf('trainqueue_wrap_stable'));
                        content = content.substr(0, content.indexOf('</table>'));
                        if (content.contains('trainorder_')) {
                            content = content.substr(content.lastIndexOf('trainorder_') + 11);
                            train_queue_count = Number(content.substr(0, content.indexOf('"'))) + 2;
                        }
                    }
                    break;
                case TWHelper.UnitType.RAM:
                case TWHelper.UnitType.CATAPULT:
                    if (content.contains('trainqueue_wrap_garage')) {
                        train_queue_garage++;
                        content = content.substr(content.indexOf('trainqueue_wrap_garage'));
                        content = content.substr(0, content.indexOf('</table>'));
                        if (content.contains('trainorder_')) {
                            content = content.substr(content.lastIndexOf('trainorder_') + 11);
                            train_queue_garage = Number(content.substr(0, content.indexOf('"'))) + 2;
                        }
                    }
            }
            return train_queue_count;
        },
        recruit : function ($unitType, $amount, $villageId) {
            Logger.log(Logger.LogLevel.INFO, "Recruiting " + $amount + " "  + TWHelper.getNameFromUnitType($unitType) + " in " + $villageId, "recruit()", "screen/TWSTrain.js");
            try {
                twClient.navigate(TWHelper.ScreenType.TRAIN, $villageId);

                var txtBoxStyle, txtBox;
                var train_queue_count = this.getRecruitQueueCountByUnitType($unitType);
                
                switch ($unitType) {
                    case TWHelper.UnitType.SPEAR:
                        txtBoxStyle = page.evaluate(function() {
                            return document.getElementById('spear_0_interaction').getAttribute('style');
                        });
                        txtBox = page.evaluate(function() {
                            return document.getElementById('spear_0').getBoundingClientRect();
                        });
                        break;
                    case TWHelper.UnitType.SWORD:
                        txtBoxStyle = page.evaluate(function() {
                            return document.getElementById('sword_0_interaction').getAttribute('style');
                        });
                        txtBox = page.evaluate(function() {
                            return document.getElementById('sword_0').getBoundingClientRect();
                        });
                        break;
                    case TWHelper.UnitType.AXE:
                        txtBoxStyle = page.evaluate(function() {
                            return document.getElementById('axe_0_interaction').getAttribute('style');
                        });
                        txtBox = page.evaluate(function() {
                            return document.getElementById('axe_0').getBoundingClientRect();
                        });
                        break;
                    case TWHelper.UnitType.ARCHER:
                        txtBoxStyle = page.evaluate(function() {
                            return document.getElementById('archer_0_interaction').getAttribute('style');
                        });
                        txtBox = page.evaluate(function() {
                            return document.getElementById('archer_0').getBoundingClientRect();
                        });
                        break;
                    case TWHelper.UnitType.SPY:
                        txtBoxStyle = page.evaluate(function() {
                            return document.getElementById('spy_0_interaction').getAttribute('style');
                        });
                        txtBox = page.evaluate(function() {
                            return document.getElementById('spy_0').getBoundingClientRect();
                        });
                        break;
                    case TWHelper.UnitType.LIGHT:
                        txtBoxStyle = page.evaluate(function() {
                            return document.getElementById('light_0_interaction').getAttribute('style');
                        });
                        txtBox = page.evaluate(function() {
                            return document.getElementById('light_0').getBoundingClientRect();
                        });
                        break;
                    case TWHelper.UnitType.MARCHER:
                        txtBoxStyle = page.evaluate(function() {
                            return document.getElementById('marcher_0_interaction').getAttribute('style');
                        });
                        txtBox = page.evaluate(function() {
                            return document.getElementById('marcher_0').getBoundingClientRect();
                        });
                        break;
                    case TWHelper.UnitType.HEAVY:
                        txtBoxStyle = page.evaluate(function() {
                            return document.getElementById('heavy_0_interaction').getAttribute('style');
                        });
                        txtBox = page.evaluate(function() {
                            return document.getElementById('heavy_0').getBoundingClientRect();
                        });
                        break;
                    case TWHelper.UnitType.RAM:
                        txtBoxStyle = page.evaluate(function() {
                            return document.getElementById('ram_0_interaction').getAttribute('style');
                        });
                        txtBox = page.evaluate(function() {
                            return document.getElementById('ram_0').getBoundingClientRect();
                        });
                        break;
                    case TWHelper.UnitType.CATAPULT:
                        txtBoxStyle = page.evaluate(function() {
                            return document.getElementById('catapult_0_interaction').getAttribute('style');
                        });
                        txtBox = page.evaluate(function() {
                            return document.getElementById('catapult_0').getBoundingClientRect();
                        });
                        break;
                    default:
                        Logger.log(Logger.LogLevel.CRITICAL, "Can't recruit " + $amount + " "  + TWHelper.getNameFromUnitType($unitType) + " in " + $villageId + "over train screen.", "recruit()", "screen/TWSTrain.js");
                }
                if (txtBoxStyle == "display: none;") {
                    Logger.log(Logger.LogLevel.WARNING, "Can't recruit " + $amount + " "  + TWHelper.getNameFromUnitType($unitType) + " in " + $villageId
                        + ". Not enough resources.", "recruit()", "screen/TWSTrain.js");
                    return 0;
                }
                page.sendEvent('click', txtBox.left + (txtBox.right - txtBox.left) / 2,
                                        txtBox.top + (txtBox.bottom - txtBox.top) / 2, 'left');
                page.sendEvent('keypress', $amount.toString(), null, null, 0);

                var recruitButton = page.evaluate(function() {
                    return document.querySelector('[value="Rekrutieren"]').getBoundingClientRect();
                });

                page.sendEvent('click', recruitButton.left + (recruitButton.right - recruitButton.left) / 2,
                                        recruitButton.top + (recruitButton.bottom - recruitButton.top) / 2, 'left');
                phantom.waitFor(function($unitType, $train_queue_count) {
                    var newCount = TWSTrain.getRecruitQueueCountByUnitType($unitType);
                    if (newCount > $train_queue_count)
                        return true;
                }, $unitType, train_queue_count);

                // update recruit events
                this.getScreenInformation();

                // update resources
                var i = PlayerVillage.getIndex($villageId);
                playerVillages[i].res_wood -= Number($amount * TWHelper.getUnitConfigInfo($unitType, TWHelper.UnitValue.WOOD));
                playerVillages[i].res_stone -= Number($amount * TWHelper.getUnitConfigInfo($unitType, TWHelper.UnitValue.STONE));
                playerVillages[i].res_iron -= Number($amount * TWHelper.getUnitConfigInfo($unitType, TWHelper.UnitValue.IRON));
                playerVillages[i].res_pop = Number(playerVillages[i].res_pop) + Number($amount * TWHelper.getUnitConfigInfo($unitType, TWHelper.UnitValue.POP));
                
                return true;
            } catch (err) {
                Logger.log(Logger.LogLevel.CRITICAL, "Could not recruit " + $amount + " " + TWHelper.getNameFromBuildingType($unitType) + " in " + $villageId + ". Reason: " + err.name + "->" + err.message, "recruit()", "screen/TWSTrain.js");
                return false;
            }
        }
    };