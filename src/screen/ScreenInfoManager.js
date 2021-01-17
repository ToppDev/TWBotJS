Logger.log(Logger.LogLevel.DEBUG, "Loading screen/ScreenInfoManager.js", "()", "screen/ScreenInfoManager.js");

var ScreenInfoManager = ScreenInfoManager || {
        getScreenInformation : function($screenType) {
            this.updateServerTimeDifference();
            if (twClient.userId == 0)
                twClient.userId = this.getUserId();

            this.getGeneralScreenInformation();
            this.checkForTWEvents();
            switch ($screenType) {
                case TWHelper.ScreenType.OVERVIEW_VILLAGES:
                    TWSOverviewVillages.getScreenInformation();
                    break;
                case TWHelper.ScreenType.OVERVIEW:
                    TWSOverview.getScreenInformation();
                    break;
                case TWHelper.ScreenType.TRAIN:
                    TWSTrain.getScreenInformation();
                    break;
                case TWHelper.ScreenType.INFO_VILLAGE:
                    return "Village Info";
                case TWHelper.ScreenType.INFO_COMMAND:
                    return "Command Info";
                case TWHelper.ScreenType.CONFIRM_ATTACK:
                    return "Confirm Attack";
                case TWHelper.ScreenType.REPORT_ATTACK:
                    return "Attack report";
                case TWHelper.ScreenType.REPORT:
                    return "Report";
                case TWHelper.ScreenType.MAIN:
                    TWSMain.getScreenInformation();
                    break;
                case TWHelper.ScreenType.BARRACKS:
                    return "Barracks";
                case TWHelper.ScreenType.STABLE:
                    return "Stable";
                case TWHelper.ScreenType.GARAGE:
                    return "Garage";
                case TWHelper.ScreenType.CHURCH:
                    return "Church";
                case TWHelper.ScreenType.CHURCH_F:
                    return "First Church";
                case TWHelper.ScreenType.SNOB:
                    return "Snob";
                case TWHelper.ScreenType.SMITH:
                    return "Smith";
                case TWHelper.ScreenType.PLACE:
                    TWSPlace.getScreenInformation();
                    break;
                case TWHelper.ScreenType.STATUE:
                    TWSStatue.getScreenInformation();
                    break;
                case TWHelper.ScreenType.MARKET:
                    return "Market";
                case TWHelper.ScreenType.WOOD:
                    return "Wood";
                case TWHelper.ScreenType.STONE:
                    return "Stone";
                case TWHelper.ScreenType.IRON:
                    return "Iron";
                case TWHelper.ScreenType.FARM:
                    return "Farm";
                case TWHelper.ScreenType.STORAGE:
                    return "Storage";
                case TWHelper.ScreenType.HIDE:
                    return "Hide";
                case TWHelper.ScreenType.WALL:
                    return "Wall";
                default:
                    Logger.log(Logger.LogLevel.CRITICAL, "Unknown Type: " + $screenType, "getSiteInformation()", "screen/ScreenInfoManager.js");
                    return ""
            }
        },
        updateServerTimeDifference : function() {
            if (page.content.contains('<span id="serverTime">')) {
                try {
                    var response = page.content;
                    response = response.substr(response.indexOf('id="serverTime">'));
                    response = response.substr(response.indexOf(">") + 1);
                    var hour = response.substr(0, response.indexOf(":"));
                    response = response.substr(response.indexOf(":") + 1);
                    var minute = response.substr(0, response.indexOf(":"));
                    response = response.substr(response.indexOf(":") + 1);
                    var second = response.substr(0, response.indexOf("<"));
    
                    response = response.substr(response.indexOf('id="serverDate">'));
                    response = response.substr(response.indexOf(">") + 1);
                    var day = response.substr(0, response.indexOf("/"));
                    response = response.substr(response.indexOf("/") + 1);
                    var month = response.substr(0, response.indexOf("/"));
                    response = response.substr(response.indexOf("/") + 1);
                    var year = response.substr(0, response.indexOf("<"));
    
                    var dateServer = new Date(year, month - 1, day, hour, minute, second, 0);
                    twClient.serverTimeDifference = (twClient.serverTimeDifference + (dateServer.getTime() - new Date().getTime())) / 2;
                } catch (err) {
                    Logger.log(Logger.LogLevel.CRITICAL, err.name + "->" + err.message, "updateServerTimeDifference()", "screen/ScreenInfoManager.js");
                }
            } else {
                Logger.log(Logger.LogLevel.WARNING, "Page does not contain the serverTime.", "updateServerTimeDifference()", "screen/ScreenInfoManager.js");
            }
        },
        getUserId : function() {
            if (page.content.contains('<![CDATA[')) {
                try {
                    var text = page.content.substr(page.content.indexOf('<![CDATA['));
                    text = text.substr(text.indexOf('"player":'));
                    text = text.substr(text.indexOf('"id":"') + 6);
                    return text.substr(0, text.indexOf('"'));
                } catch (err) {
                    Logger.log(Logger.LogLevel.CRITICAL, err.name + "->" + err.message, "getUserId()", "screen/ScreenInfoManager.js");
                }
            } else {
                Logger.log(Logger.LogLevel.WARNING, "Could not read UserId.", "getUserId()", "screen/ScreenInfoManager.js");
                return 0;
            }
        },
        getGeneralScreenInformation : function() {
            try {
                var response =  page.content.substr(page.content.indexOf("var game_data"));
                response = response.substr(response.indexOf('"points":"') + 10);
                twClient.points = response.substring(0, response.indexOf('"'));
                response = response.substr(response.indexOf("\"village\"") + 10);
                var actVillageID;
                if (response.indexOf("\":\"") < response.indexOf(",")) {
                    response = response.substr(response.indexOf("\"id\"") + 6);
                    actVillageID = response.substr(0, response.indexOf("\""));
                } else {
                    response = response.substr(response.indexOf("\"id\"") + 5);
                    actVillageID = response.substr(0, response.indexOf(","));
                }

                response = response.substr(response.indexOf("\"name\"") + 8);
                var actVillageName = response.substr(0, response.indexOf("\""));

                response = response.substr(response.indexOf("\"wood_float\"") + 13);
                var r_wood = response.substr(0, response.indexOf(","));
                response = response.substr(response.indexOf(":") + 1);
                var r_stone = response.substr(0, response.indexOf(","));
                response = response.substr(response.indexOf(":") + 1);
                var r_iron = response.substr(0, response.indexOf(","));
                response = response.substr(response.indexOf("\"pop\"") + 6);
                var r_pop = response.substr(0, response.indexOf(","));

                response = response.substr(response.indexOf("\"x\"") + 4);
                var x = response.substr(0, response.indexOf(","));
                response = response.substr(response.indexOf("\"y\"") + 4);
                var y = response.substr(0, response.indexOf(","));

                response = response.substr(response.indexOf("\"bonus_id\"") + 11);
                var bonus = 0;
                if (response.substr(0, response.indexOf(",")) != "null")
                    bonus = response.substr(0, response.indexOf(","));
                var bonus_wood = 1, bonus_stone = 1, bonus_iron = 1, bonus_farm = 1, bonus_barracks = 1,
                    bonus_stable = 1, bonus_garage = 1, bonus_resources = 1, bonus_storage = 1;
                switch (bonus) {
                    case 0:
                        break;
                    case 1:
                        bonus_wood = 2;
                        break;
                    case 2:
                        bonus_stone = 2;
                        break;
                    case 3:
                        bonus_iron = 2;
                        break;
                    case 4:
                        bonus_farm = 1.1;
                        break;
                    case 5:
                        bonus_barracks = 1.33;
                        break;
                    case 6:
                        bonus_stable = 1.33;
                        break;
                    case 7:
                        bonus_garage = 1.5;
                        break;
                    case 8:
                        bonus_resources = 1.3;
                        break;
                    case 9:
                        bonus_storage = 1.5;
                        break;
                }
                response = response.substr(response.indexOf("\"buildings\"") + 13);
                response = response.substr(response.indexOf("\"main\"") + 8);
                var b_main = response.substr(0, response.indexOf("\""));
                response = response.substr(response.indexOf("\"farm\"") + 8);
                var b_farm = response.substr(0, response.indexOf("\""));
                response = response.substr(response.indexOf("\"storage\"") + 11);
                var b_storage = response.substr(0, response.indexOf("\""));
                response = response.substr(response.indexOf("\"place\"") + 9);
                var b_place = response.substr(0, response.indexOf("\""));
                response = response.substr(response.indexOf("\"barracks\"") + 12);
                var b_barracks = response.substr(0, response.indexOf("\""));
                var b_church = 0, b_church_f = 0;
                if (WorldConfig.church != 0) {
                    response = response.substr(response.indexOf("\"church\"") + 10);
                    b_church = response.substr(0, response.indexOf("\""));
                    response = response.substr(response.indexOf("\"church_f\"") + 12);
                    b_church_f = response.substr(0, response.indexOf("\""));
                }
                response = response.substr(response.indexOf("\"smith\"") + 9);
                var b_smith = response.substr(0, response.indexOf("\""));
                response = response.substr(response.indexOf("\"wood\"") + 8);
                var b_wood = response.substr(0, response.indexOf("\""));
                response = response.substr(response.indexOf("\"stone\"") + 9);
                var b_stone = response.substr(0, response.indexOf("\""));
                response = response.substr(response.indexOf("\"iron\"") + 8);
                var b_iron = response.substr(0, response.indexOf("\""));
                response = response.substr(response.indexOf("\"market\"") + 10);
                var b_market = response.substr(0, response.indexOf("\""));
                response = response.substr(response.indexOf("\"stable\"") + 10);
                var b_stable = response.substr(0, response.indexOf("\""));
                response = response.substr(response.indexOf("\"wall\"") + 8);
                var b_wall = response.substr(0, response.indexOf("\""));
                response = response.substr(response.indexOf("\"garage\"") + 10);
                var b_garage = response.substr(0, response.indexOf("\""));
                response = response.substr(response.indexOf("\"hide\"") + 8);
                var b_hide = response.substr(0, response.indexOf("\""));
                response = response.substr(response.indexOf("\"snob\"") + 8);
                var b_snob = response.substr(0, response.indexOf("\""));
                var b_statue = 0;
                if (WorldConfig.knight != 0) {
                    response = response.substr(response.indexOf("\"statue\"") + 10);
                    b_statue = response.substr(0, response.indexOf("\""));
                }

                var resUpdate = new Date().getTime();

                if (PlayerVillage.getIndex(actVillageID) == -1) {
                    Logger.log(Logger.LogLevel.DEBUG, 'Village ' + actVillageID + ' is not in database. Creating it now.', "getGeneralSiteInformation()", "screen/ScreenInfoManager.js");
                    playerVillages.push(new PlayerVillage(actVillageID, x, y));
                    ForeignVillage.removeVillage(actVillageID);
                }

                Logger.log(Logger.LogLevel.DEBUG, "Updating Village: " + actVillageID + " " + actVillageName
                    + " (" + x + "|" + y + ")" + ", R_W" + r_wood + ", R_S" + r_stone + ", R_I" + r_iron
                    + ", RP" + r_pop + ", B" + bonus + ", RU" + resUpdate + ", MA" + b_main + ", BA" + b_barracks
                    + ", ST" + b_stable + ", GA" + b_garage + ", CH" + b_church + ", CHF" + b_church_f
                    + ", SN" + b_snob + ", SM" + b_smith + ", PL" + b_place + ", ST" + b_statue + ", MA" + b_market
                    + ", WO" + b_wood + ", ST" + b_stone + ", IR" + b_iron + ", FA" + b_farm + ", ST" + b_storage
                    + ", HI" + b_hide + ", WA" + b_wall, "getGeneralSiteInformation()", "screen/ScreenInfoManager.js");

                var index = PlayerVillage.getIndex(actVillageID);
                playerVillages[index].name = actVillageName;
                playerVillages[index].res_wood = r_wood;
                playerVillages[index].res_stone = r_stone;
                playerVillages[index].res_iron = r_iron;
                playerVillages[index].res_pop = r_pop;
                playerVillages[index].res_updateDate = resUpdate;

                playerVillages[index].bonus_wood = bonus_wood;
                playerVillages[index].bonus_stone = bonus_stone;
                playerVillages[index].bonus_iron = bonus_iron;
                playerVillages[index].bonus_resources = bonus_resources;
                playerVillages[index].bonus_storage = bonus_storage;
                playerVillages[index].bonus_farm = bonus_farm;
                playerVillages[index].bonus_barracks = bonus_barracks;
                playerVillages[index].bonus_stable = bonus_stable;
                playerVillages[index].bonus_garage = bonus_garage;

                playerVillages[index].main_level = b_main;
                playerVillages[index].barracks_level = b_barracks;
                playerVillages[index].stable_level = b_stable;
                playerVillages[index].garage_level = b_garage;
                playerVillages[index].church_level = b_church;
                playerVillages[index].church_f_level = b_church_f;
                playerVillages[index].snob_level = b_snob;
                playerVillages[index].smith_level = b_smith;
                playerVillages[index].place_level = b_place;
                playerVillages[index].statue_level = b_statue;
                playerVillages[index].market_level = b_market;
                playerVillages[index].wood_level = b_wood;
                playerVillages[index].stone_level = b_stone;
                playerVillages[index].iron_level = b_iron;
                playerVillages[index].farm_level = b_farm;
                playerVillages[index].storage_level = b_storage;
                playerVillages[index].hide_level = b_hide;
                playerVillages[index].wall_level = b_wall;
            } catch (err) {
                Logger.log(Logger.LogLevel.CRITICAL, err.name + "->" + err.message, "getGeneralSiteInformation()", "screen/ScreenInfoManager.js");
            }
        },
        checkForTWEvents : function() {
            twClient.newReport = this.checkForNewReports();

            twClient.newMail = this.checkForNewMails();

            twClient.newForumThread = this.checkForNewForumThreads();

            var incomingAttacks = this.getIncomingAttacks();
            if (twClient.incomingAttacksCount < incomingAttacks) {
                Logger.log(Logger.LogLevel.DEBUG, "New Attack found. Sum: " + incomingAttacks, "checkForTWEvents()", "screen/ScreenInfoManager.js");
                twClient.newIncomingAttacks = 1;
            }
            twClient.incomingAttacksCount = incomingAttacks;
        },
        checkForNewReports : function() {
            if (twClient.newReport == 0 && page.content.contains('<span id="new_report" class="icon header new_report">'))
                Logger.log(Logger.LogLevel.DEBUG, "New Report found", "checkForNewReports()", "screen/ScreenInfoManager.js");
            return page.content.contains('<span id="new_report" class="icon header new_report">');
        },
        checkForNewMails : function() {
            if (twClient.newMail == 0 && page.content.contains('<span id="new_mail" class="icon header new_mail">'))
                Logger.log(Logger.LogLevel.DEBUG, "New Mail found", "checkForNewMails()", "screen/ScreenInfoManager.js");
            return page.content.contains('<span id="new_mail" class="icon header new_mail">');
        },
        checkForNewForumThreads : function() {
            if (twClient.newForumThread == 0 && page.content.contains("Neuer Beitrag im Stammesforum"))
                Logger.log(Logger.LogLevel.DEBUG, "New Forum Thread found", "checkForNewForumThreads()", "screen/ScreenInfoManager.js");
            return page.content.contains("Neuer Beitrag im Stammesforum");
        },
        getIncomingAttacks : function() {
            var res = "";
            try {
                if(page.content.contains("<span id=\"incomings_amount\">")) {
                    res = page.content.substring(page.content.indexOf("<span id=\"incomings_amount\">") + 28);
                    return res.substring(0, res.indexOf("<"));
                }
            } catch (err) {
                Logger.log(Logger.LogLevel.CRITICAL, err.name + "->" + err.message + "->" + res, "getIncomingAttacks()", "screen/ScreenInfoManager.js");
            }
            return 0;
        }
    };

phantom.injectJs('screen/TWSOverviewVillages.js');
phantom.injectJs('screen/TWSOverview.js');
phantom.injectJs('screen/TWSMain.js');
phantom.injectJs('screen/TWSTrain.js');
phantom.injectJs('screen/TWSPlace.js');
phantom.injectJs('screen/TWSStatue.js');
phantom.injectJs('screen/TWSReport.js');