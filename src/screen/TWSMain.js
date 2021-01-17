Logger.log(Logger.LogLevel.DEBUG, "Loading screen/TWSMain.js", "()", "screen/TWSMain.js");

var TWSMain = TWSMain || {
        getScreenInformation : function() {
            try {
                var response = page.content;

                if(response.contains("buildqueue_wrap")) {
                    response = response.substr(response.indexOf("buildqueue_wrap"));
                    while (response.contains('<td class="lit-item">')) {
                        response = response.substr(response.indexOf('<td class="lit-item">') + 21);
                        response = response.substr(response.indexOf("<img"));
                        response = response.substr(response.indexOf(">") + 2);
                        var building = response.substr(0, response.indexOf("<br>")).trim();
                        response = response.substr(response.indexOf("Stufe ") + 6);
                        var level = response.substr(0, response.indexOf("</td>")).trim();
                        response = response.substr(response.indexOf('<td class="lit-item">') + 21);
                        response = response.substr(response.indexOf('<td class="lit-item">') + 21);
                        var triggerTime = TWHelper.convertTWTimeToLong(response.substr(0, response.indexOf("</td>")));

                        var buildingType = 0;
                        if(building == "Hauptgebäude") buildingType = TWHelper.BuildingType.MAIN;
                        else if(building == "Kaserne") buildingType = TWHelper.BuildingType.BARRACKS;
                        else if(building == "Stall") buildingType = TWHelper.BuildingType.STABLE;
                        else if(building == "Werkstatt") buildingType = TWHelper.BuildingType.GARAGE;
                        else if(building == "Kirche") buildingType = TWHelper.BuildingType.CHURCH;
                        else if(building == "Erste Kirche") buildingType = TWHelper.BuildingType.CHURCH_F;
                        else if(building == "Adelshof") buildingType = TWHelper.BuildingType.SNOB;
                        else if(building == "Schmiede") buildingType = TWHelper.BuildingType.SMITH;
                        else if(building == "Versammlungsplatz") buildingType = TWHelper.BuildingType.PLACE;
                        else if(building == "Statue") buildingType = TWHelper.BuildingType.STATUE;
                        else if(building == "Marktplatz") buildingType = TWHelper.BuildingType.MARKET;
                        else if(building == "Holzfällerlager") buildingType = TWHelper.BuildingType.WOOD;
                        else if(building == "Lehmgrube") buildingType = TWHelper.BuildingType.STONE;
                        else if(building == "Eisenmine") buildingType = TWHelper.BuildingType.IRON;
                        else if(building == "Bauernhof") buildingType = TWHelper.BuildingType.FARM;
                        else if(building == "Speicher") buildingType = TWHelper.BuildingType.STORAGE;
                        else if(building == "Versteck") buildingType = TWHelper.BuildingType.HIDE;
                        else if(building == "Wall") buildingType = TWHelper.BuildingType.WALL;
                        else {
                            Logger.log(Logger.LogLevel.CRITICAL, "Unknown building: " + building, "getScreenInformation()", "screen/TWSMain.js");
                        }

                        if (BuildEvent.getIndex(twClient.actVillageId, triggerTime, buildingType) == -1) {
                            Logger.log(Logger.LogLevel.DEBUG, "Adding buildEvent [" + twClient.actVillageId + "] " + building + " " + triggerTime, "getScreenInformation()", "screen/TWSMain.js");
                            buildEvents.push(new BuildEvent(twClient.actVillageId, triggerTime, buildingType));
                            PlayerVillage.getVillage(twClient.actVillageId).buildqueue_count++;
                        }

                        response = response.substr(response.indexOf("<td class=\"lit-item\">") + 21);
                    }
                }
            } catch (err) {
                Logger.log(Logger.LogLevel.CRITICAL, err.name + "->" + err.message, "getScreenInformation()", "screen/TWSMain.js");
            }
        },
        build : function($buildingType, $villageId) {
            Logger.log(Logger.LogLevel.INFO, "Building " + TWHelper.getNameFromBuildingType($buildingType) + " in " + $villageId, "build()", "screen/TWSMain.js");
            try {
                twClient.navigate(TWHelper.ScreenType.MAIN, $villageId);

                var buildingName = TWHelper.getTWUrlFromBuildingType($buildingType);
                var buildingLevel = Number(TWHelper.getBuildingLevelInPlayerVillage($buildingType, $villageId)) + 1;
                for (var i = 0; i < buildEvents.length; i++) {
                    if (buildEvents[i].villageId == $villageId && buildEvents[i].buildingType == $buildingType)
                        buildingLevel++;
                }
                
                if (buildingLevel >= Number(TWHelper.getBuildingConfigInfo($buildingType, TWHelper.BuildingValue.MAX_LEVEL)))
                {
                    // Remove Task
                    for (i = 0; i < tasks.length; i++) {
                        if (tasks[i].villageId == $villageId) {
                            Task.removeTask(i);
                            break;
                        }
                    }
                    Logger.log(Logger.LogLevel.WARNING, "Building " + TWHelper.getNameFromBuildingType($buildingType) + " in " + $villageId
                            + " has already reached max level.", "build()", "screen/TWSMain.js");
                    return -1;
                }
                if (!page.content.contains('id="main_buildlink_' + buildingName + '_' + buildingLevel)) {
                    // Remove Task
                    for (i = 0; i < tasks.length; i++) {
                        if (tasks[i].villageId == $villageId) {
                            Task.removeTask(i);
                            break;
                        }
                    }
                    Logger.log(Logger.LogLevel.WARNING, "Building " + TWHelper.getNameFromBuildingType($buildingType) + " in " + $villageId
                        + " has not fulfilled its requirements yet.", "build()", "screen/TWSMain.js");
                    return -1;
                }
                var buildButtonStyle = page.evaluate(function($buildingName, $buildingLevel) {
                    return document.getElementById('main_buildlink_' + $buildingName + '_' + $buildingLevel).getAttribute('style');
                }, buildingName, buildingLevel);
                if (buildButtonStyle == "display: none;") {
                    Logger.log(Logger.LogLevel.WARNING, "Building " + TWHelper.getNameFromBuildingType($buildingType) + " in " + $villageId
                        + " could not be built. Not enough resources.", "build()", "screen/TWSMain.js");
                    return -1;
                }

                // Click on build Button
                var buildButton = page.evaluate(function($buildingName, $buildingLevel) {
                    return document.getElementById('main_buildlink_' + $buildingName + '_' + $buildingLevel).getBoundingClientRect();
                }, buildingName, buildingLevel);
                page.sendEvent('click', buildButton.left + (buildButton.right - buildButton.left) / 2,
                                        buildButton.top + (buildButton.bottom - buildButton.top) / 2, 'left');
                phantom.waitFor(function($build_queue_count) {
                    if ($build_queue_count == 0 && page.content.contains('<table id="build_queue"'))
                        return true;
                    var content = page.content.substr(page.content.indexOf('<table id="build_queue"'));
                    content = content.substr(0, content.indexOf('</table>'));
                    if ($build_queue_count == 1)
                        return content.contains('<tr class="sortable_row buildorder_');
                }, PlayerVillage.getVillage($villageId).buildqueue_count);

                // update build events
                this.getScreenInformation();
                
                // update resources
                i = PlayerVillage.getIndex($villageId);
                playerVillages[i].res_wood -= Number(TWHelper.getBuildingValue($buildingType, buildingLevel, TWHelper.BuildingValue.WOOD));
                playerVillages[i].res_stone -= Number(TWHelper.getUnitConfigInfo($buildingType, buildingLevel, TWHelper.BuildingValue.STONE));
                playerVillages[i].res_iron -= Number(TWHelper.getUnitConfigInfo($buildingType, buildingLevel, TWHelper.BuildingValue.IRON));
                playerVillages[i].res_pop = Number(playerVillages[i].res_pop) + Number(TWHelper.getUnitConfigInfo($buildingType, buildingLevel, TWHelper.BuildingValue.POP));

                return true;
            } catch (err) {
                Logger.log(Logger.LogLevel.CRITICAL, "Could not build " + TWHelper.getNameFromBuildingType($buildingType) + " in " + $villageId + ". Reason: " + err.name + "->" + err.message, "build()", "screen/TWSMain.js");
                return false;
            }
        }
    };