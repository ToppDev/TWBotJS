Logger.log(Logger.LogLevel.DEBUG, "Loading screen/TWSOverview.js", "()", "screen/TWSOverview.js");

var TWSOverview = TWSOverview || {
        getScreenInformation : function() {
            var content = page.content;

            if (content.contains('&amp;screen=flags">')) {
                content = content.substr(content.indexOf('&amp;screen=flags">') + 19);
                var flag = content.substr(0, content.indexOf('<'));
                var amount = flag.substr(0, flag.indexOf("%"));
                flag = flag.substr(flag.indexOf("%") + 2);
                amount = amount.replace("+", "");
                amount = amount.replace("-", "");

                switch (flag) {
                    case "Rohstoffe": // +10% Rohstoffe
                        PlayerVillage.getVillage(twClient.actVillageId).flag_resources = 1 + Number(amount) / 100;
                        break;
                    case "Rekrutierungs-Geschwindigkeit": // +6% Rekrutierungs-Geschwindigkeit
                        PlayerVillage.getVillage(twClient.actVillageId).flag_recruitment_speed = 1 + Number(amount) / 100;
                        break;
                    case "Angriff": // +4% Angriff
                        break;
                    case "Verteidigung": // +4% Verteidigung
                        break;
                    case "Glück": // 10% Glück
                        break;
                    case "Bevölkerung": // +2% Bevölkerung
                        PlayerVillage.getVillage(twClient.actVillageId).flag_farm = 1 + Number(amount) / 100;
                        break;
                    case "Münzkosten": // -10% Münzkosten
                        break;
                    case "Beute": // +6% Beute
                        break;
                }
            }
        },
        getReturningTroops : function() {
            try {
                var response = page.content;
                if(response.contains('<div id="show_outgoing_units" class="vis moveable widget">')) {
                    while (response.contains("Rückkehr von ")) {
                        response = response.substr(response.substr(0, response.indexOf("Rückkehr von ")).lastIndexOf("/game.php"));
                        response = response.substr(response.indexOf("id=") + 3);
                        var id = response.substr(0, response.indexOf("&amp;"));

                        Logger.log(Logger.LogLevel.INFO, "Navigating: Command info " + id, "getReturningTroops()", "screen/TWSOverview.js");
                        //https://de126.die-staemme.de/game.php?village=59910&screen=info_command&id=1049976442&type=own
                        page.open("https://" + loginManager.getWorld() + ".die-staemme.de/game.php?village=" + twClient.actVillageId + "&screen=info_command&id=" + id + "&type=own");
                        phantom.waitFor(function() {return !page.loading;});
                        TWClient.actScreen = TWHelper.ScreenType.INFO_COMMAND;

                        var code = page.content;

                        code = code.substr(code.indexOf("Ankunft:") + 17);
                        var triggerTime = TWHelper.convertTWTimeToLong(code.substr(0, code.indexOf("<")));

                        code = code.replace("<span class=\"grey\">.</span>", "");
                        var spear = 0, sword = 0, axe = 0, archer = 0, spy = 0, light = 0, marcher = 0, heavy = 0, ram = 0, catapult = 0, knight = 0, snob = 0;
                        code = code.substr(code.indexOf("unit-item"));
                        code = code.substr(code.indexOf(">") + 1);
                        spear = code.substr(0, code.indexOf("<"));
                        code = code.substr(code.indexOf("unit-item"));
                        code = code.substr(code.indexOf(">") + 1);
                        sword = code.substr(0, code.indexOf("<"));
                        code = code.substr(code.indexOf("unit-item"));
                        code = code.substr(code.indexOf(">") + 1);
                        axe = code.substr(0, code.indexOf("<"));
                        code = code.substr(code.indexOf("unit-item"));
                        code = code.substr(code.indexOf(">") + 1);
                        if (WorldConfig.archer != 0)
                        {
                            archer = code.substr(0, code.indexOf("<"));
                            code = code.substr(code.indexOf("unit-item"));
                            code = code.substr(code.indexOf(">") + 1);
                        }
                        spy = code.substr(0, code.indexOf("<"));
                        code = code.substr(code.indexOf("unit-item"));
                        code = code.substr(code.indexOf(">") + 1);
                        light = code.substr(0, code.indexOf("<"));
                        code = code.substr(code.indexOf("unit-item"));
                        code = code.substr(code.indexOf(">") + 1);
                        if (WorldConfig.archer != 0)
                        {
                            marcher = code.substr(0, code.indexOf("<"));
                            code = code.substr(code.indexOf("unit-item"));
                            code = code.substr(code.indexOf(">") + 1);
                        }
                        heavy = code.substr(0, code.indexOf("<"));
                        code = code.substr(code.indexOf("unit-item"));
                        code = code.substr(code.indexOf(">") + 1);
                        ram = code.substr(0, code.indexOf("<"));
                        code = code.substr(code.indexOf("unit-item"));
                        code = code.substr(code.indexOf(">") + 1);
                        catapult = code.substr(0, code.indexOf("<"));
                        code = code.substr(code.indexOf("unit-item"));
                        code = code.substr(code.indexOf(">") + 1);
                        if (WorldConfig.knight != 0)
                        {
                            knight = code.substr(0, code.indexOf("<"));
                            code = code.substr(code.indexOf("unit-item"));
                            code = code.substr(code.indexOf(">") + 1);
                        }
                        snob = code.substr(0, code.indexOf("<"));

                        var wood = 0, stone = 0, iron = 0;

                        if (code.contains("<td>Beute:"))
                        {
                            if(code.contains("wood")) {
                                code = code.substr(code.indexOf("wood"));
                                code = code.substr(code.indexOf("</span>") + 7);
                                wood = code.substr(0, code.indexOf("<"));
                            }
                            if(code.contains("stone")) {
                                code = code.substr(code.indexOf("stone"));
                                code = code.substr(code.indexOf("</span>") + 7);
                                stone = code.substr(0, code.indexOf("<"));
                            }
                            if(code.contains("iron")) {
                                code = code.substr(code.indexOf("iron"));
                                code = code.substr(code.indexOf("</span>") + 7);
                                iron = code.substr(0, code.indexOf("<"));
                            }
                        }
                        Logger.log(Logger.LogLevel.DEBUG, "Id" + id + ": Trigger" + triggerTime
                            + ", Sp" + spear + ", Sw" + sword + ", Ax" + axe + ", Ar" + archer
                            + ", Sp" + spy + ", Li" + light + ", Ma" + marcher + ", He" + heavy
                            + ", Ra" + ram + ", Ca" + catapult + ", Kn" + knight + ", Sn" + snob
                            + " - Wo" + wood + ", St" + stone + ", Ir" + iron, "getReturningTroops()", "screen/TWSOverview.js");

                        returnCommandEvents.push(new ReturnCommandEvent(twClient.actVillageId, triggerTime));
                        returnCommandEvents[returnCommandEvents.length - 1].wood = wood;
                        returnCommandEvents[returnCommandEvents.length - 1].stone = stone;
                        returnCommandEvents[returnCommandEvents.length - 1].iron = iron;
                        
                        returnCommandEvents[returnCommandEvents.length - 1].spear = spear;
                        returnCommandEvents[returnCommandEvents.length - 1].sword = sword;
                        returnCommandEvents[returnCommandEvents.length - 1].axe = axe;
                        returnCommandEvents[returnCommandEvents.length - 1].archer = archer;
                        returnCommandEvents[returnCommandEvents.length - 1].spy = spy;
                        returnCommandEvents[returnCommandEvents.length - 1].light = light;
                        returnCommandEvents[returnCommandEvents.length - 1].marcher = marcher;
                        returnCommandEvents[returnCommandEvents.length - 1].heavy = heavy;
                        returnCommandEvents[returnCommandEvents.length - 1].ram = ram;
                        returnCommandEvents[returnCommandEvents.length - 1].catapult = catapult;
                        returnCommandEvents[returnCommandEvents.length - 1].knight = knight;
                        returnCommandEvents[returnCommandEvents.length - 1].snob = snob;

                        response = response.substr(response.indexOf("Rückkehr von ") + 10);
                    }
                }
            } catch (err) {
                Logger.log(Logger.LogLevel.CRITICAL, err.name + "->" + err.message, "getReturningTroops()", "screen/TWSOverview.js");
            }
        }
    };