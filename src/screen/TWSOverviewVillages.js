Logger.log(Logger.LogLevel.DEBUG, "Loading screen/TWSOverviewVillages.js", "()", "screen/TWSOverviewVillages.js");

var TWSOverviewVillages = TWSOverviewVillages || {
        getScreenInformation : function() {
            try {
                var response = page.content.substr(page.content.indexOf("production_table"));
                while (response.contains("<span class=\"quickedit-vn\" data-id=\"")) {
                    response = response.substr(response.indexOf("<span class=\"quickedit-vn"));
                    response = response.substr(response.indexOf("href=\"/game.php?village=") + 24);
                    var id = response.substr(0, response.indexOf("&amp;"));
                    response = response.substr(response.indexOf("<span class=\"quickedit-label\" data-text=\"") + 41);
                    var name = response.substr(0, response.indexOf("\">"));
                    response = response.substr(response.indexOf("\">") + 2);
                    response = response.substr(response.substr(0, response.indexOf("</span>")).lastIndexOf("(") + 1);
                    var x = response.substr(0, response.indexOf("|"));
                    response = response.substr(response.indexOf("|") + 1);
                    var y = response.substr(0, response.indexOf(")"));
                    response = response.substr(response.indexOf("</span>") + 7);
                    response = response.substr(response.indexOf("</span>") + 7);
                    response = response.substr(response.indexOf("</span>") + 7);
                    response = response.substr(response.indexOf("<td>") + 4);
                    var points = response.substr(0, response.indexOf("</td>")).replace("<span class=\"grey\">.</span>", "");
                    response = response.substr(response.indexOf("res wood") + 10);
                    var res_wood = response.substr(0, response.indexOf("</span> ")).replace("<span class=\"grey\">.</span>", "");
                    response = response.substr(response.indexOf("res stone") + 11);
                    var res_stone = response.substr(0, response.indexOf("</span> ")).replace("<span class=\"grey\">.</span>", "");
                    response = response.substr(response.indexOf("res iron") + 10);
                    var res_iron = response.substr(0, response.indexOf("</span> ")).replace("<span class=\"grey\">.</span>", "");
                    response = response.substr(response.indexOf("<td>") + 4);
                    response = response.substr(response.indexOf("<td>") + 4);
                    var res_pop = response.substr(0, response.indexOf("/"));

                    if (PlayerVillage.getIndex(id) == -1) {
                        Logger.log(Logger.LogLevel.DEBUG, 'Village ' + id + ' is not in database. Creating it now.', "getGeneralSiteInformation()", "screen/TWSOverviewVillages.js");
                        playerVillages.push(new PlayerVillage(id, x, y));
                        ForeignVillage.removeVillage(id);
                    }

                    Logger.log(Logger.LogLevel.DEBUG, "Updating Village: " + id + " " + name + " (" + x + "|" + y + ") [" + points
                        + "], W" + res_wood + ", S" + res_stone + ", I" + res_iron + ", P" + res_pop, "getSiteInformation()", "screen/TWSOverviewVillages.js");

                    var index = PlayerVillage.getIndex(id);
                    playerVillages[index].name = name;
                    playerVillages[index].points = points;
                    playerVillages[index].res_wood = res_wood;
                    playerVillages[index].res_stone = res_stone;
                    playerVillages[index].res_iron = res_iron;
                    playerVillages[index].res_pop = res_pop;
                    playerVillages[index].res_updateDate = new Date().getTime();
                }
            } catch (err) {
                Logger.log(Logger.LogLevel.WARNING, err.name + "->" + err.message, "getSiteInformation()", "screen/TWSOverviewVillages.js");
            }
        }
    };