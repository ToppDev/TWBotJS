Logger.log(Logger.LogLevel.DEBUG, "Loading screen/TWSReport.js", "()", "screen/TWSReport.js");

var TWSReport = TWSReport || {
        readNewReports : function() {
            try {
                var sitesLeft;

                do {
                    sitesLeft = false;
                    twClient.navigate(TWHelper.ScreenType.REPORT_ATTACK, twClient.actVillageId);

                    var report_attack = page.content;

                    report_attack = report_attack.substring(report_attack.indexOf("<form action=\""));
                    report_attack = report_attack.substring(0, report_attack.indexOf("</form>"));
                    report_attack = report_attack.substring(report_attack.indexOf("<tr>") + 4);

                    while (report_attack.contains("greift") || report_attack.contains("späht")) {
                        report_attack = report_attack.substring(report_attack.indexOf("<td>") + 4);

                        if ((report_attack.substring(0, report_attack.indexOf("</tr>")).contains("greift")
                         || report_attack.substring(0, report_attack.indexOf("</tr>")).contains("späht"))
                            && report_attack.substring(0, report_attack.indexOf("</tr>")).contains("(neu)")) {
                            sitesLeft = true;
                            report_attack = report_attack.substring(report_attack.indexOf("name=\"id_") + 9);
                            var reportID = report_attack.substring(0, report_attack.indexOf("\""));

                            //https://de126.die-staemme.de/game.php?village=59910&screen=report&mode=attack&view=42098345
                            twClient.navigate(TWHelper.ScreenType.REPORT_ATTACK, twClient.actVillageId, "&view=" + reportID);

                            var report = page.content;

                            if (report.contains("Kampfzeit")) {

                                report = report.substring(report.indexOf("Kampfzeit"));
                                report = report.substring(report.indexOf("<td>") + 7);
                                var farmTime = TWHelper.convertTWTimeToLong(report.substring(0, report.indexOf("<")).trim());

                                report = report.substring(report.indexOf("Herkunft:"));
                                report = report.substring(report.indexOf(";id=") + 4);
                                var myVillageID = parseInt(report.substring(0, report.indexOf("&")));
                                var vil_name = report.substring(report.indexOf(">") + 1, report.indexOf("<"));
                                vil_name = vil_name.substring(vil_name.lastIndexOf("(") + 1, vil_name.lastIndexOf(")"));
                                var my_x = parseInt(vil_name.substring(0, vil_name.indexOf("|")));
                                var my_y = parseInt(vil_name.substring(vil_name.indexOf("|") + 1));

                                var spear, sword, axe, archer = 0, spy, light, marcher = 0, heavy, ram, catapult, knight = 0, snob;
                                report = report.substring(report.indexOf("Anzahl:"));
                                report = report.substring(report.indexOf("unit-item"));
                                report = report.substring(report.indexOf(">") + 1);
                                spear = parseInt(report.substring(0, report.indexOf("<")));
                                report = report.substring(report.indexOf("unit-item"));
                                report = report.substring(report.indexOf(">") + 1);
                                sword = parseInt(report.substring(0, report.indexOf("<")));
                                report = report.substring(report.indexOf("unit-item"));
                                report = report.substring(report.indexOf(">") + 1);
                                axe = parseInt(report.substring(0, report.indexOf("<")));
                                report = report.substring(report.indexOf("unit-item"));
                                report = report.substring(report.indexOf(">") + 1);
                                if (WorldConfig.archer != 0) {
                                    archer = parseInt(report.substring(0, report.indexOf("<")));
                                    report = report.substring(report.indexOf("unit-item"));
                                    report = report.substring(report.indexOf(">") + 1);
                                }
                                spy = parseInt(report.substring(0, report.indexOf("<")));
                                report = report.substring(report.indexOf("unit-item"));
                                report = report.substring(report.indexOf(">") + 1);
                                light = parseInt(report.substring(0, report.indexOf("<")));
                                report = report.substring(report.indexOf("unit-item"));
                                report = report.substring(report.indexOf(">") + 1);
                                if (WorldConfig.archer != 0) {
                                    marcher = parseInt(report.substring(0, report.indexOf("<")));
                                    report = report.substring(report.indexOf("unit-item"));
                                    report = report.substring(report.indexOf(">") + 1);
                                }
                                heavy = parseInt(report.substring(0, report.indexOf("<")));
                                report = report.substring(report.indexOf("unit-item"));
                                report = report.substring(report.indexOf(">") + 1);
                                ram = parseInt(report.substring(0, report.indexOf("<")));
                                report = report.substring(report.indexOf("unit-item"));
                                report = report.substring(report.indexOf(">") + 1);
                                catapult = parseInt(report.substring(0, report.indexOf("<")));
                                report = report.substring(report.indexOf("unit-item"));
                                report = report.substring(report.indexOf(">") + 1);
                                if (WorldConfig.knight != 0) {
                                    knight = parseInt(report.substring(0, report.indexOf("<")));
                                    report = report.substring(report.indexOf("unit-item"));
                                    report = report.substring(report.indexOf(">") + 1);
                                }
                                snob = parseInt(report.substring(0, report.indexOf("<")));

                                var spear_lost, sword_lost, axe_lost, archer_lost = 0, spy_lost, light_lost, marcher_lost = 0, heavy_lost, ram_lost, catapult_lost, knight_lost = 0, snob_lost;
                                report = report.substring(report.indexOf("Verluste:"));
                                report = report.substring(report.indexOf("unit-item"));
                                report = report.substring(report.indexOf(">") + 1);
                                spear_lost = parseInt(report.substring(0, report.indexOf("<")));
                                report = report.substring(report.indexOf("unit-item"));
                                report = report.substring(report.indexOf(">") + 1);
                                sword_lost = parseInt(report.substring(0, report.indexOf("<")));
                                report = report.substring(report.indexOf("unit-item"));
                                report = report.substring(report.indexOf(">") + 1);
                                axe_lost = parseInt(report.substring(0, report.indexOf("<")));
                                report = report.substring(report.indexOf("unit-item"));
                                report = report.substring(report.indexOf(">") + 1);
                                if (WorldConfig.archer != 0) {
                                    archer_lost = parseInt(report.substring(0, report.indexOf("<")));
                                    report = report.substring(report.indexOf("unit-item"));
                                    report = report.substring(report.indexOf(">") + 1);
                                }
                                spy_lost = parseInt(report.substring(0, report.indexOf("<")));
                                report = report.substring(report.indexOf("unit-item"));
                                report = report.substring(report.indexOf(">") + 1);
                                light_lost = parseInt(report.substring(0, report.indexOf("<")));
                                report = report.substring(report.indexOf("unit-item"));
                                report = report.substring(report.indexOf(">") + 1);
                                if (WorldConfig.archer != 0) {
                                    marcher_lost = parseInt(report.substring(0, report.indexOf("<")));
                                    report = report.substring(report.indexOf("unit-item"));
                                    report = report.substring(report.indexOf(">") + 1);
                                }
                                heavy_lost = parseInt(report.substring(0, report.indexOf("<")));
                                report = report.substring(report.indexOf("unit-item"));
                                report = report.substring(report.indexOf(">") + 1);
                                ram_lost = parseInt(report.substring(0, report.indexOf("<")));
                                report = report.substring(report.indexOf("unit-item"));
                                report = report.substring(report.indexOf(">") + 1);
                                catapult_lost = parseInt(report.substring(0, report.indexOf("<")));
                                report = report.substring(report.indexOf("unit-item"));
                                report = report.substring(report.indexOf(">") + 1);
                                if (WorldConfig.knight != 0) {
                                    knight_lost = parseInt(report.substring(0, report.indexOf("<")));
                                    report = report.substring(report.indexOf("unit-item"));
                                    report = report.substring(report.indexOf(">") + 1);
                                }
                                snob_lost = parseInt(report.substring(0, report.indexOf("<")));

                                report = report.substring(report.indexOf("Ziel:"));
                                report = report.substring(report.indexOf(";id=") + 4);
                                var farmVillageID = parseInt(report.substring(0, report.indexOf("&")));

                                vil_name = report.substring(report.indexOf(">") + 1, report.indexOf("<"));
                                vil_name = vil_name.substring(vil_name.lastIndexOf("(") + 1, vil_name.lastIndexOf(")"));
                                var target_x = parseInt(vil_name.substring(0, vil_name.indexOf("|")));
                                var target_y = parseInt(vil_name.substring(vil_name.indexOf("|") + 1));

                                if (report.contains("Keiner deiner Kämpfer ist lebend zurückgekehrt. Es konnten keine Informationen über die Truppenstärke des Gegners erlangt werden")
                                    || (spear == spear_lost && sword == sword_lost && axe == axe_lost && archer == archer_lost
                                    && spy == spy_lost && light == light_lost && marcher == marcher_lost && heavy == heavy_lost)) {
                                    var index = ForeignVillage.getIndex(farmVillageID);
                                    if (index != -1) {
                                        if (foreignVillages[index].farmFlagType != TWHelper.FarmFlagType.DO_NOT_FARM) {
                                            foreignVillages[index].farmFlagType = TWHelper.FarmFlagType.WAIT_TILL_THEN_SPY;
                                            foreignVillages[index].farmFlagValue = new Date().getTime() + 1000 * 60 * 60 * 24; // 1 Day
                                        }
                                    }
                                } else {
                                    var f_vil_wood = 0, f_vil_stone = 0, f_vil_iron = 0;
                                    var f_vil_main_level = 0, f_vil_barracks_level = 0, f_vil_stable_level = 0, f_vil_garage_level = 0, f_vil_church_level = 0, f_vil_church_f_level = 0, f_vil_snob_level = 0, f_vil_smith_level = 0, f_vil_place_level = 0, f_vil_statue_level = 0, f_vil_market_level = 0, f_vil_wood_level = 1, f_vil_stone_level = 1, f_vil_iron_level = 1, f_vil_farm_level = 0, f_vil_storage_level = 3, f_vil_hide_level = 0, f_vil_wall_level = 0;

                                    report = report.replace("<span class=\"grey\">.</span>", "");

                                    if (report.contains("Spionage")) {
                                        report = report.substring(report.indexOf("Spionage"));

                                        var spying = report.substring(0, report.indexOf('id="attack_results"'));
                                        if (spying.contains("icon header wood")) {
                                            spying = spying.substring(spying.indexOf("icon header wood"));
                                            spying = spying.substring(spying.indexOf("</span>") + 7);
                                            f_vil_wood = parseInt(spying.substring(0, spying.indexOf("<")).replace(".", ""));
                                        }
                                        if (spying.contains("icon header stone")) {
                                            spying = spying.substring(spying.indexOf("icon header stone"));
                                            spying = spying.substring(spying.indexOf("</span>") + 7);
                                            f_vil_stone = parseInt(spying.substring(0, spying.indexOf("<")).replace(".", ""));
                                        }
                                        if (spying.contains("icon header iron")) {
                                            spying = spying.substring(spying.indexOf("icon header iron"));
                                            spying = spying.substring(spying.indexOf("</span>") + 7);
                                            f_vil_iron = parseInt(spying.substring(0, spying.indexOf("<")).replace(".", ""));
                                        }

                                        if (spying.contains("Hauptgebäude")) {
                                            spying = spying.substring(spying.indexOf('<td class="middle">') + 19);
                                            f_vil_main_level = parseInt(spying.substring(0, spying.indexOf("<")).trim());
                                        }
                                        if (spying.contains("Kaserne")) {
                                            spying = spying.substring(spying.indexOf('<td class="middle">') + 19);
                                            f_vil_barracks_level = parseInt(spying.substring(0, spying.indexOf("<")).trim());
                                        }
                                        if (spying.contains("Stall")) {
                                            spying = spying.substring(spying.indexOf('<td class="middle">') + 19);
                                            f_vil_stable_level = parseInt(spying.substring(0, spying.indexOf("<")).trim());
                                        }
                                        if (spying.contains("Werkstatt")) {
                                            spying = spying.substring(spying.indexOf('<td class="middle">') + 19);
                                            f_vil_garage_level = parseInt(spying.substring(0, spying.indexOf("<")).trim());
                                        }
                                        if (spying.contains("Erste Kirche")) {
                                            spying = spying.substring(spying.indexOf('<td class="middle">') + 19);
                                            f_vil_church_f_level = parseInt(spying.substring(0, spying.indexOf("<")).trim());
                                        }
                                        if (spying.contains("Kirche")) {
                                            spying = spying.substring(spying.indexOf('<td class="middle">') + 19);
                                            f_vil_church_level = parseInt(spying.substring(0, spying.indexOf("<")).trim());
                                        }
                                        if (spying.contains("Adelshof")) {
                                            spying = spying.substring(spying.indexOf('<td class="middle">') + 19);
                                            f_vil_snob_level = parseInt(spying.substring(0, spying.indexOf("<")).trim());
                                        }
                                        if (spying.contains("Schmiede")) {
                                            spying = spying.substring(spying.indexOf('<td class="middle">') + 19);
                                            f_vil_smith_level = parseInt(spying.substring(0, spying.indexOf("<")).trim());
                                        }
                                        if (spying.contains("Versammlungsplatz")) {
                                            spying = spying.substring(spying.indexOf('<td class="middle">') + 19);
                                            f_vil_place_level = parseInt(spying.substring(0, spying.indexOf("<")).trim());
                                        }
                                        if (spying.contains("Statue")) {
                                            spying = spying.substring(spying.indexOf('<td class="middle">') + 19);
                                            f_vil_statue_level = parseInt(spying.substring(0, spying.indexOf("<")).trim());
                                        }
                                        if (spying.contains("Marktplatz")) {
                                            spying = spying.substring(spying.indexOf('<td class="middle">') + 19);
                                            f_vil_market_level = parseInt(spying.substring(0, spying.indexOf("<")).trim());
                                        }
                                        if (spying.contains("Holzfällerlager")) {
                                            spying = spying.substring(spying.indexOf('<td class="middle">') + 19);
                                            f_vil_wood_level = parseInt(spying.substring(0, spying.indexOf("<")).trim());
                                        } else f_vil_wood_level = 0;
                                        if (spying.contains("Lehmgrube")) {
                                            spying = spying.substring(spying.indexOf('<td class="middle">') + 19);
                                            f_vil_stone_level = parseInt(spying.substring(0, spying.indexOf("<")).trim());
                                        } else f_vil_stone_level = 0;
                                        if (spying.contains("Eisenmine")) {
                                            spying = spying.substring(spying.indexOf('<td class="middle">') + 19);
                                            f_vil_iron_level = parseInt(spying.substring(0, spying.indexOf("<")).trim());
                                        } else f_vil_iron_level = 0;
                                        if (spying.contains("Bauernhof")) {
                                            spying = spying.substring(spying.indexOf('<td class="middle">') + 19);
                                            f_vil_farm_level = parseInt(spying.substring(0, spying.indexOf("<")).trim());
                                        }
                                        if (spying.contains("Speicher")) {
                                            spying = spying.substring(spying.indexOf('<td class="middle">') + 19);
                                            f_vil_storage_level = parseInt(spying.substring(0, spying.indexOf("<")).trim());
                                        }
                                        if (spying.contains("Versteck")) {
                                            spying = spying.substring(spying.indexOf('<td class="middle">') + 19);
                                            f_vil_hide_level = parseInt(spying.substring(0, spying.indexOf("<")).trim());
                                        }
                                        if (spying.contains("Wall")) {
                                            spying = spying.substring(spying.indexOf('<td class="middle">') + 19);
                                            f_vil_wall_level = parseInt(spying.substring(0, spying.indexOf("<")).trim());
                                        }
                                    }

                                    var wood = 0, stone = 0, iron = 0, all_get, all_max;
                                    if (report.contains("Beute:")) {
                                        report = report.substring(report.indexOf("Beute:"));

                                        if (report.contains("icon header wood")) {
                                            report = report.substring(report.indexOf("icon header wood"));
                                            report = report.substring(report.indexOf("</span>") + 7);
                                            var wood_string = report.substring(0, report.indexOf("<"));
                                            wood = parseInt(wood_string);
                                        }

                                        if (report.contains("icon header stone")) {
                                            report = report.substring(report.indexOf("icon header stone"));
                                            report = report.substring(report.indexOf("</span>") + 7);
                                            var stone_string = report.substring(0, report.indexOf("<"));
                                            stone = parseInt(stone_string);
                                        }

                                        if (report.contains("icon header iron")) {
                                            report = report.substring(report.indexOf("icon header iron"));
                                            report = report.substring(report.indexOf("</span>") + 7);
                                            var iron_string = report.substring(0, report.indexOf("<"));
                                            iron = parseInt(iron_string);
                                        }

                                        report = report.substring(report.indexOf("<td>") + 4);
                                        all_get = parseInt(report.substring(0, report.indexOf("/")));

                                        report = report.substring(report.indexOf("/") + 1);
                                        var all_max_string = report.substring(0, report.indexOf("</td>"));
                                        all_max = parseInt(all_max_string);

                                        if (all_get >= all_max && f_vil_wood == 0 && f_vil_stone == 0 && f_vil_iron == 0) {
                                            f_vil_wood = 2000;
                                            f_vil_stone = 2000;
                                            f_vil_iron = 2000;
                                        }
                                    }

                                    var velocity = TWHelper.getUnitConfigInfo(TWHelper.UnitType.SPY, TWHelper.UnitValue.SPEED);
                                    if (snob != 0) velocity = TWHelper.getUnitConfigInfo(TWHelper.UnitType.SNOB, TWHelper.UnitValue.SPEED);
                                    else if (ram != 0 || catapult != 0) velocity = TWHelper.getUnitConfigInfo(TWHelper.UnitType.RAM, TWHelper.UnitValue.SPEED);
                                    else if (sword != 0) velocity = TWHelper.getUnitConfigInfo(TWHelper.UnitType.SWORD, TWHelper.UnitValue.SPEED);
                                    else if (spear != 0 || axe != 0 || archer != 0)
                                        velocity = TWHelper.getUnitConfigInfo(TWHelper.UnitType.SPEAR, TWHelper.UnitValue.SPEED);
                                    else if (heavy != 0) velocity = TWHelper.getUnitConfigInfo(TWHelper.UnitType.HEAVY, TWHelper.UnitValue.SPEED);
                                    else if (light != 0 || marcher != 0 || knight != 0)
                                        velocity = TWHelper.getUnitConfigInfo(TWHelper.UnitType.LIGHT, TWHelper.UnitValue.SPEED);
                                    var travelTime = Math.sqrt(Math.pow((my_x - target_x), 2) + Math.pow((my_y - target_y), 2)) * velocity * WorldConfig.speed * WorldConfig.unit_speed;
                                    var returnTime = farmTime + parseInt(travelTime * 60 * 1000) + 5 * 1000; // 5 seconds buffer

                                    Logger.log(Logger.LogLevel.DEBUG, "Returning [" + myVillageID + "] Time" + returnTime
                                        + ", Sp" + (spear - spear_lost) + ", Sw" + (sword - sword_lost) + ", Ax" + (axe - axe_lost) + ", Ar" + (archer - archer_lost)
                                        + ", Sp" + (spy - spy_lost) + ", Li" + (light - light_lost) + ", Ma" + (marcher - marcher_lost) + ", He" + (heavy - heavy_lost)
                                        + ", Ra" + (ram - ram_lost) + ", Ca" + (catapult - catapult_lost) + ", Kn" + (knight - knight_lost) + ", Sn" + (snob - snob_lost)
                                        + " - Wo" + wood + ", St" + stone + ", Ir" + iron, "readNewReports()", "screen/TWSReport.js");

                                    returnCommandEvents.push(new ReturnCommandEvent(myVillageID, returnTime));
                                    returnCommandEvents[returnCommandEvents.length - 1].wood = wood;
                                    returnCommandEvents[returnCommandEvents.length - 1].stone = stone;
                                    returnCommandEvents[returnCommandEvents.length - 1].iron = iron;

                                    returnCommandEvents[returnCommandEvents.length - 1].spear = spear - spear_lost;
                                    returnCommandEvents[returnCommandEvents.length - 1].sword = sword - sword_lost;
                                    returnCommandEvents[returnCommandEvents.length - 1].axe = axe - axe_lost;
                                    returnCommandEvents[returnCommandEvents.length - 1].archer = archer - archer_lost;
                                    returnCommandEvents[returnCommandEvents.length - 1].spy = spy - spy_lost;
                                    returnCommandEvents[returnCommandEvents.length - 1].light = light - light_lost;
                                    returnCommandEvents[returnCommandEvents.length - 1].marcher = marcher - marcher_lost;
                                    returnCommandEvents[returnCommandEvents.length - 1].heavy = heavy - heavy_lost;
                                    returnCommandEvents[returnCommandEvents.length - 1].ram = ram - ram_lost;
                                    returnCommandEvents[returnCommandEvents.length - 1].catapult = catapult - catapult_lost;
                                    returnCommandEvents[returnCommandEvents.length - 1].knight = knight - knight_lost;
                                    returnCommandEvents[returnCommandEvents.length - 1].snob = snob - snob_lost;

                                    Logger.log(Logger.LogLevel.DEBUG, "ForeignVillage [" + farmVillageID
                                        + "] (" + target_x + "|" + target_y + ")" + ", R_W" + f_vil_wood + ", R_S" + f_vil_stone + ", R_I" + f_vil_iron
                                        + ", RU" + farmTime + ", MA" + f_vil_main_level + ", BA" + f_vil_barracks_level
                                        + ", ST" + f_vil_stable_level + ", GA" + f_vil_garage_level + ", CH" + f_vil_church_level + ", CHF" + f_vil_church_f_level
                                        + ", SN" + f_vil_snob_level + ", SM" + f_vil_smith_level + ", PL" + f_vil_place_level + ", ST" + f_vil_statue_level + ", MA" + f_vil_market_level
                                        + ", WO" + f_vil_wood_level + ", ST" + f_vil_stone_level + ", IR" + f_vil_iron_level + ", FA" + f_vil_farm_level + ", ST" + f_vil_storage_level
                                        + ", HI" + f_vil_hide_level + ", WA" + f_vil_wall_level
                                        + " - Wo" + wood + ", St" + stone + ", Ir" + iron, "readNewReports()", "screen/TWSReport.js");

                                    var i = ForeignVillage.getIndex(farmVillageID);
                                    if (i != -1) {
                                        foreignVillages[i].res_wood = f_vil_wood;
                                        foreignVillages[i].res_stone = f_vil_stone;
                                        foreignVillages[i].res_iron = f_vil_iron;
                                        foreignVillages[i].res_updateDate = farmTime;

                                        foreignVillages[i].main_level = f_vil_main_level;
                                        foreignVillages[i].barracks_level = f_vil_barracks_level;
                                        foreignVillages[i].stable_level = f_vil_stable_level;
                                        foreignVillages[i].garage_level = f_vil_garage_level;
                                        foreignVillages[i].church_f_level = f_vil_church_f_level;
                                        foreignVillages[i].church_level = f_vil_church_level;
                                        foreignVillages[i].snob_level = f_vil_snob_level;
                                        foreignVillages[i].smith_level = f_vil_smith_level;
                                        foreignVillages[i].statue_level = f_vil_statue_level;
                                        foreignVillages[i].place_level = f_vil_place_level;
                                        foreignVillages[i].market_level = f_vil_market_level;
                                        foreignVillages[i].wood_level = f_vil_wood_level;
                                        foreignVillages[i].stone_level = f_vil_stone_level;
                                        foreignVillages[i].iron_level = f_vil_iron_level;
                                        foreignVillages[i].farm_level = f_vil_farm_level;
                                        foreignVillages[i].storage_level = f_vil_storage_level;
                                        foreignVillages[i].hide_level = f_vil_hide_level;
                                        foreignVillages[i].wall_level = f_vil_wall_level;

                                        foreignVillages[i].farmTroopsArrivingTime = 0;
                                        foreignVillages[i].farmFlagType = TWHelper.FarmFlagType.NONE;
                                        foreignVillages[i].farmFlagValue = 0;
                                    }
                                }

                                var j = PlayerVillage.getIndex(myVillageID);
                                if (j != -1) {
                                    playerVillages[j].spear_all -= spear_lost;
                                    playerVillages[j].sword_all -= sword_lost;
                                    playerVillages[j].axe_all -= axe_lost;
                                    playerVillages[j].archer_all -= archer_lost;
                                    playerVillages[j].spy_all -= spy_lost;
                                    playerVillages[j].light_all -= light_lost;
                                    playerVillages[j].marcher_all -= marcher_lost;
                                    playerVillages[j].heavy_all -= heavy_lost;
                                    playerVillages[j].ram_all -= ram_lost;
                                    playerVillages[j].catapult_all -= catapult_lost;
                                    playerVillages[j].knight_all -= knight_lost;
                                    playerVillages[j].snob_all -= snob_lost;
                                }

                                report = report.substring(report.indexOf("action=del_one"));
                                report = report.substring(report.indexOf("h=") + 2);
                                var h = report.substring(0, report.indexOf('"'));

                                switch (ForeignVillage.getVillage(farmVillageID).farmFlagType) {
                                    case TWHelper.FarmFlagType.FARMABLE:
                                        //https://de126.die-staemme.de/game.php?village=59910&screen=report&mode=attack&action=del_one&id=42098345&h=d83da958
                                        twClient.navigate(TWHelper.ScreenType.REPORT_ATTACK, twClient.actVillageId, "&action=del_one&id=" + reportID + "&h=" + h);
                                        break;
                                    case TWHelper.FarmFlagType.DO_NOT_FARM:
                                        break;
                                    default:
                                        ForeignVillage.getVillage(farmVillageID).farmFlagType = TWHelper.FarmFlagType.NONE;
                                        // ToDo: Add to list, user should check
                                        break;
                                }
                            }
                        }
                        report_attack = report_attack.substring(report_attack.indexOf("<tr>") + 4);
                    }
                } while (sitesLeft);
            } catch (err) {
                Logger.log(Logger.LogLevel.CRITICAL, err.name + "->" + err.message, "readNewReports()", "screen/TWSReport.js");
            }
        }
    };