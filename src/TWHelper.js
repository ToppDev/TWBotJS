Logger.log(Logger.LogLevel.DEBUG, "Loading TWHelper.js", "()", "TWHelper.js");

var TWHelper = TWHelper || {
        BuildingType : {
            MAIN : 0,
            BARRACKS : 1,
            STABLE : 2,
            GARAGE : 3,
            CHURCH : 4,
            CHURCH_F : 5,
            SNOB : 6,
            SMITH : 7,
            PLACE : 8,
            STATUE : 9,
            MARKET : 10,
            WOOD : 11,
            STONE : 12,
            IRON : 13,
            FARM : 14,
            STORAGE : 15,
            HIDE : 16,
            WALL : 17
        },
        UnitType : {
            SPEAR : 0,
            SWORD : 1,
            AXE : 2,
            ARCHER : 3,
            SPY : 4,
            LIGHT : 5,
            MARCHER : 6,
            HEAVY : 7,
            RAM : 8,
            CATAPULT : 9,
            SNOB : 10,
            KNIGHT : 11
        },
        ScreenType : {
            OVERVIEW_VILLAGES : 0,
            OVERVIEW : 1,
            TRAIN : 2,
            INFO_VILLAGE : 3,
            INFO_COMMAND : 4,
            CONFIRM_ATTACK : 5,
            REPORT_ATTACK : 6,
            REPORT : 7,
            MAIN : 8,
            BARRACKS : 9,
            STABLE : 10,
            GARAGE : 11,
            CHURCH : 12,
            CHURCH_F : 13,
            SNOB : 14,
            SMITH : 15,
            PLACE : 16,
            STATUE : 17,
            MARKET : 18,
            WOOD : 19,
            STONE : 20,
            IRON : 21,
            FARM : 22,
            STORAGE : 23,
            HIDE : 24,
            WALL : 25
        },
        TaskType : {
            BUILDING : 0,
            UNIT : 1
        },
        FarmFlagType : {
            NONE : 0,
            // Never farm this village
            DO_NOT_FARM : 1,
            // Don't farm till time is past
            WAIT_TILL_THEN_SPY : 2,
            // Send spy troop before farming again
            SPY_FIRST : 3,
            // Village is declared as farmable
            FARMABLE : 4
        },

        BuildingValue : {
            MAX_LEVEL : 0,
            MIN_LEVEL : 1,
            WOOD : 2,
            STONE : 3,
            IRON : 4,
            POP : 5,
            WOOD_FACTOR : 6,
            STONE_FACTOR : 7,
            IRON_FACTOR : 8,
            POP_FACTOR : 9,
            BUILD_TIME : 10,
            BUILD_TIME_FACTOR : 11,
            EFFECT : 12
        },
        UnitValue : {
            WOOD : 0,
            STONE : 1,
            IRON : 2,
            POP : 3,
            SPEED : 4,
            ATTACK : 5,
            DEFENSE : 6,
            DEFENSE_CAVALRY : 7,
            DEFENSE_ARCHER : 8,
            CARRY : 9,
            BUILD_TIME : 10
        },

        getNameFromBuildingType : function($buildingType) {
            switch ($buildingType) {
                case this.BuildingType.MAIN:
                    return "Main";
                case this.BuildingType.BARRACKS:
                    return "Barracks";
                case this.BuildingType.STABLE:
                    return "Stable";
                case this.BuildingType.GARAGE:
                    return "Garage";
                case this.BuildingType.CHURCH:
                    return "Church";
                case this.BuildingType.CHURCH_F:
                    return "First Church";
                case this.BuildingType.SNOB:
                    return "Snob";
                case this.BuildingType.SMITH:
                    return "Smith";
                case this.BuildingType.PLACE:
                    return "Place";
                case this.BuildingType.STATUE:
                    return "Statue";
                case this.BuildingType.MARKET:
                    return "Market";
                case this.BuildingType.WOOD:
                    return "Wood";
                case this.BuildingType.STONE:
                    return "Stone";
                case this.BuildingType.IRON:
                    return "Iron";
                case this.BuildingType.FARM:
                    return "Farm";
                case this.BuildingType.STORAGE:
                    return "Storage";
                case this.BuildingType.HIDE:
                    return "Hide";
                case this.BuildingType.WALL:
                    return "Wall";
                default:
                    Logger.log(Logger.LogLevel.CRITICAL, "Unknown Type: " + $buildingType, "getNameFromBuildingType()", "TWHelper.js");
                    return ""
            }
        },
        getTWUrlFromBuildingType : function($buildingType) {
            switch ($buildingType) {
                case this.BuildingType.MAIN:
                    return "main";
                case this.BuildingType.BARRACKS:
                    return "barracks";
                case this.BuildingType.STABLE:
                    return "stable";
                case this.BuildingType.GARAGE:
                    return "garage";
                case this.BuildingType.CHURCH:
                    return "church";
                case this.BuildingType.CHURCH_F:
                    return "church_f";
                case this.BuildingType.SNOB:
                    return "snob";
                case this.BuildingType.SMITH:
                    return "smith";
                case this.BuildingType.PLACE:
                    return "place";
                case this.BuildingType.STATUE:
                    return "statue";
                case this.BuildingType.MARKET:
                    return "market";
                case this.BuildingType.WOOD:
                    return "wood";
                case this.BuildingType.STONE:
                    return "stone";
                case this.BuildingType.IRON:
                    return "iron";
                case this.BuildingType.FARM:
                    return "farm";
                case this.BuildingType.STORAGE:
                    return "storage";
                case this.BuildingType.HIDE:
                    return "hide";
                case this.BuildingType.WALL:
                    return "wall";
                default:
                    Logger.log(Logger.LogLevel.CRITICAL, "Unknown Type: " + $buildingType, "getTWUrlFromBuildingType()", "TWHelper.js");
                    return ""
            }
        },
        getNameFromUnitType : function($unitType) {
            switch ($unitType) {
                case this.UnitType.SPEAR:
                    return "Spear";
                case this.UnitType.SWORD:
                    return "Sword";
                case this.UnitType.AXE:
                    return "Axe";
                case this.UnitType.ARCHER:
                    return "Archer";
                case this.UnitType.SPY:
                    return "Spy";
                case this.UnitType.LIGHT:
                    return "Light";
                case this.UnitType.MARCHER:
                    return "Marcher";
                case this.UnitType.HEAVY:
                    return "Heavy";
                case this.UnitType.RAM:
                    return "Ram";
                case this.UnitType.CATAPULT:
                    return "Catapult";
                case this.UnitType.SNOB:
                    return "Snob";
                case this.UnitType.KNIGHT:
                    return "Knight";
                default:
                    Logger.log(Logger.LogLevel.CRITICAL, "Unknown Type: " + $unitType, "getNameFromUnitType()", "TWHelper.js");
                    return ""
            }
        },
        getTWUrlFromUnitType : function($unitType) {
            switch ($unitType) {
                case this.UnitType.SPEAR:
                    return "spear";
                case this.UnitType.SWORD:
                    return "sword";
                case this.UnitType.AXE:
                    return "axe";
                case this.UnitType.ARCHER:
                    return "archer";
                case this.UnitType.SPY:
                    return "spy";
                case this.UnitType.LIGHT:
                    return "light";
                case this.UnitType.MARCHER:
                    return "marcher";
                case this.UnitType.HEAVY:
                    return "heavy";
                case this.UnitType.RAM:
                    return "ram";
                case this.UnitType.CATAPULT:
                    return "catapult";
                case this.UnitType.SNOB:
                    return "snob";
                case this.UnitType.KNIGHT:
                    return "knight";
                default:
                    Logger.log(Logger.LogLevel.CRITICAL, "Unknown Type: " + $unitType, "getTWUrlFromUnitType()", "TWHelper.js");
                    return ""
            }
        },
        getNameFromScreenType : function($screenType) {
            switch ($screenType) {
                case this.ScreenType.OVERVIEW_VILLAGES:
                    return "Overview Villages";
                case this.ScreenType.OVERVIEW:
                    return "Overview";
                case this.ScreenType.TRAIN:
                    return "Training";
                case this.ScreenType.INFO_VILLAGE:
                    return "Village Info";
                case this.ScreenType.INFO_COMMAND:
                    return "Command Info";
                case this.ScreenType.CONFIRM_ATTACK:
                    return "Confirm Attack";
                case this.ScreenType.REPORT_ATTACK:
                    return "Attack report";
                case this.ScreenType.REPORT:
                    return "Report";
                case this.ScreenType.MAIN:
                    return "Main";
                case this.ScreenType.BARRACKS:
                    return "Barracks";
                case this.ScreenType.STABLE:
                    return "Stable";
                case this.ScreenType.GARAGE:
                    return "Garage";
                case this.ScreenType.CHURCH:
                    return "Church";
                case this.ScreenType.CHURCH_F:
                    return "First Church";
                case this.ScreenType.SNOB:
                    return "Snob";
                case this.ScreenType.SMITH:
                    return "Smith";
                case this.ScreenType.PLACE:
                    return "Place";
                case this.ScreenType.STATUE:
                    return "Statue";
                case this.ScreenType.MARKET:
                    return "Market";
                case this.ScreenType.WOOD:
                    return "Wood";
                case this.ScreenType.STONE:
                    return "Stone";
                case this.ScreenType.IRON:
                    return "Iron";
                case this.ScreenType.FARM:
                    return "Farm";
                case this.ScreenType.STORAGE:
                    return "Storage";
                case this.ScreenType.HIDE:
                    return "Hide";
                case this.ScreenType.WALL:
                    return "Wall";
                default:
                    Logger.log(Logger.LogLevel.CRITICAL, "Unknown Type: " + $screenType, "getNameFromScreenType()", "TWHelper.js");
                    return ""
            }
        },
        getTWUrlFromScreenType : function($screenType) {
            switch ($screenType) {
                case this.ScreenType.OVERVIEW_VILLAGES:
                    return "overview_villages";
                case this.ScreenType.OVERVIEW:
                    return "overview";
                case this.ScreenType.TRAIN:
                    return "train";
                case this.ScreenType.INFO_VILLAGE:
                    return "info_village";
                case this.ScreenType.INFO_COMMAND:
                    return "info_command";
                case this.ScreenType.CONFIRM_ATTACK:
                    return "confirm_attack";
                case this.ScreenType.REPORT_ATTACK:
                    return "report&mode=attack";
                case this.ScreenType.REPORT:
                    return "report";
                case this.ScreenType.MAIN:
                    return "main";
                case this.ScreenType.BARRACKS:
                    return "barracks";
                case this.ScreenType.STABLE:
                    return "stable";
                case this.ScreenType.GARAGE:
                    return "garage";
                case this.ScreenType.CHURCH:
                    return "church";
                case this.ScreenType.CHURCH_F:
                    return "church_f";
                case this.ScreenType.SNOB:
                    return "snob";
                case this.ScreenType.SMITH:
                    return "smith";
                case this.ScreenType.PLACE:
                    return "place";
                case this.ScreenType.STATUE:
                    return "statue";
                case this.ScreenType.MARKET:
                    return "market";
                case this.ScreenType.WOOD:
                    return "wood";
                case this.ScreenType.STONE:
                    return "stone";
                case this.ScreenType.IRON:
                    return "iron";
                case this.ScreenType.FARM:
                    return "farm";
                case this.ScreenType.STORAGE:
                    return "storage";
                case this.ScreenType.HIDE:
                    return "hide";
                case this.ScreenType.WALL:
                    return "wall";
                default:
                    Logger.log(Logger.LogLevel.CRITICAL, "Unknown Type: " + $screenType, "getTWUrlFromScreenType()", "TWHelper.js");
                    return ""
            }
        },
        convertWorldToTWWorld : function($world) { // Welt 126
            return 'de' + $world.substr($world.indexOf(' ') + 1);
        },
        convertTWWorldToWorld : function($twWorld) { // de126
            return 'Welt ' + $twWorld.substr(2);
        },
        /**
         * Converts a Tribal Wars time into a long time.
         *
         * @param $time Tribal Wars time. Allowed formats:
         *             <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;heute um 23:18:56 Uhr
         *             <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;morgen um 01:37:30 Uhr
         *             <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;am 12.12. um 01:37:30 Uhr
         *             <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;30.03.14 15:11:13
         * @return long Time in long format.
         */
        convertTWTimeToLong : function($time) {
            try {
                var time_tmp = $time;
                var date = new Date();

                var year, month, day, hour, minute, second;

                if (time_tmp.contains("heute")) { // heute um 23:18:56 Uhr
                    year = date.getFullYear();
                    month = date.getMonth();
                    day = date.getDate();
                    if (!time_tmp.contains("Uhr")) time_tmp += " Uhr";
                } else if (time_tmp.contains("morgen")) { // morgen um 01:37:30 Uhr
                    date.setDate(date.getDate() + 1);
                    year = date.getFullYear();
                    month = date.getMonth();
                    day = date.getDate();
                    if (!time_tmp.contains("Uhr")) time_tmp += " Uhr";
                } else if (time_tmp.contains("am")) { // am 12.12. um 01:37:30 Uhr
                    time_tmp = time_tmp.substr(time_tmp.indexOf("am") + 3);
                    day = time_tmp.substr(0, time_tmp.indexOf("."));
                    time_tmp = time_tmp.substr(time_tmp.indexOf(".") + 1);
                    //month starts with 0 in date
                    month = time_tmp.substr(0, time_tmp.indexOf(".")) - 1;
                    year = date.getFullYear();
                    if (date.getMonth() < month)
                        year++;
                    if (!time_tmp.contains("Uhr")) time_tmp += " Uhr";
                } else { // 30.03.14 15:11:13
                    day = time_tmp.substr(0, time_tmp.indexOf("."));
                    time_tmp = time_tmp.substr(time_tmp.indexOf(".") + 1);
                    //month starts with 0 in calendar
                    month = time_tmp.substr(0, time_tmp.indexOf(".")) - 1;
                    time_tmp = time_tmp.substr(time_tmp.indexOf(".") + 1);
                    year = 2000 + Number(time_tmp.substr(0, time_tmp.indexOf(" ")));
                    time_tmp = time_tmp.substr(time_tmp.indexOf(" ") + 1);
                    time_tmp = "um " + time_tmp + " Uhr";
                }
                time_tmp = time_tmp.substr(time_tmp.indexOf("um") + 3);
                time_tmp = time_tmp.substr(0, time_tmp.indexOf("Uhr") - 1);

                hour = time_tmp.substr(0, time_tmp.indexOf(":"));
                time_tmp = time_tmp.substr(time_tmp.indexOf(":") + 1);
                minute = time_tmp.substr(0, time_tmp.indexOf(":"));
                time_tmp = time_tmp.substr(time_tmp.indexOf(":") + 1);
                second = time_tmp;

                date = new Date(year, month, day, hour, minute, second, 0);

                return date.getTime();
            } catch (err) {
                Logger.log(Logger.LogLevel.CRITICAL, err.name + "->" + err.message + "->" + $time, "convertTWTimeToLong()", "TWHelper.js");
            }
        },

        calculateTimeForDistanceInMillis: function($sourceVillageId, $destinationX, $destinationY, $unitSpeed) {
            try {
                var index = PlayerVillage.getIndex($sourceVillageId);

                if (index != -1) {
                    var distance = Math.sqrt(Math.pow(playerVillages[index].x - $destinationX, 2)
                        + Math.pow(playerVillages[index].y - $destinationY, 2));
                    return distance * $unitSpeed * 60 * WorldConfig.speed * WorldConfig.unit_speed * 1000;
                }
            } catch (err) {
                Logger.log(Logger.LogLevel.CRITICAL, err.name + "->" + err.message, "calculateTimeForDistance()", "TWHelper.js");
            }

            Logger.log(Logger.LogLevel.CRITICAL, "Source village is not in db.", "calculateTimeForDistanceInMillis()", "TWHelper.js");

            return -1;
        },

        getUnitConfigInfo : function ($unitType, $unitValue) {
            switch ($unitType) {
                case this.UnitType.SPEAR:
                    switch ($unitValue) {
                        case this.UnitValue.WOOD:
                            return UnitInfo.spear_wood;
                        case this.UnitValue.STONE:
                            return UnitInfo.spear_stone;
                        case this.UnitValue.IRON:
                            return UnitInfo.spear_iron;
                        case this.UnitValue.POP:
                            return UnitInfo.spear_pop;
                        case this.UnitValue.SPEED:
                            return UnitInfo.spear_speed;
                        case this.UnitValue.ATTACK:
                            return UnitInfo.spear_attack;
                        case this.UnitValue.DEFENSE:
                            return UnitInfo.spear_defense;
                        case this.UnitValue.DEFENSE_CAVALRY:
                            return UnitInfo.spear_defense_cavalry;
                        case this.UnitValue.DEFENSE_ARCHER:
                            return UnitInfo.spear_defense_archer;
                        case this.UnitValue.CARRY:
                            return UnitInfo.spear_carry;
                        case this.UnitValue.BUILD_TIME:
                            return UnitInfo.spear_build_time;
                    }
                    break;
                case this.UnitType.SWORD:
                    switch ($unitValue) {
                        case this.UnitValue.WOOD:
                            return UnitInfo.sword_wood;
                        case this.UnitValue.STONE:
                            return UnitInfo.sword_stone;
                        case this.UnitValue.IRON:
                            return UnitInfo.sword_iron;
                        case this.UnitValue.POP:
                            return UnitInfo.sword_pop;
                        case this.UnitValue.SPEED:
                            return UnitInfo.sword_speed;
                        case this.UnitValue.ATTACK:
                            return UnitInfo.sword_attack;
                        case this.UnitValue.DEFENSE:
                            return UnitInfo.sword_defense;
                        case this.UnitValue.DEFENSE_CAVALRY:
                            return UnitInfo.sword_defense_cavalry;
                        case this.UnitValue.DEFENSE_ARCHER:
                            return UnitInfo.sword_defense_archer;
                        case this.UnitValue.CARRY:
                            return UnitInfo.sword_carry;
                        case this.UnitValue.BUILD_TIME:
                            return UnitInfo.sword_build_time;
                    }
                    break;
                case this.UnitType.AXE:
                    switch ($unitValue) {
                        case this.UnitValue.WOOD:
                            return UnitInfo.axe_wood;
                        case this.UnitValue.STONE:
                            return UnitInfo.axe_stone;
                        case this.UnitValue.IRON:
                            return UnitInfo.axe_iron;
                        case this.UnitValue.POP:
                            return UnitInfo.axe_pop;
                        case this.UnitValue.SPEED:
                            return UnitInfo.axe_speed;
                        case this.UnitValue.ATTACK:
                            return UnitInfo.axe_attack;
                        case this.UnitValue.DEFENSE:
                            return UnitInfo.axe_defense;
                        case this.UnitValue.DEFENSE_CAVALRY:
                            return UnitInfo.axe_defense_cavalry;
                        case this.UnitValue.DEFENSE_ARCHER:
                            return UnitInfo.axe_defense_archer;
                        case this.UnitValue.CARRY:
                            return UnitInfo.axe_carry;
                        case this.UnitValue.BUILD_TIME:
                            return UnitInfo.axe_build_time;
                    }
                    break;
                case this.UnitType.ARCHER:
                    switch ($unitValue) {
                        case this.UnitValue.WOOD:
                            return UnitInfo.archer_wood;
                        case this.UnitValue.STONE:
                            return UnitInfo.archer_stone;
                        case this.UnitValue.IRON:
                            return UnitInfo.archer_iron;
                        case this.UnitValue.POP:
                            return UnitInfo.archer_pop;
                        case this.UnitValue.SPEED:
                            return UnitInfo.archer_speed;
                        case this.UnitValue.ATTACK:
                            return UnitInfo.archer_attack;
                        case this.UnitValue.DEFENSE:
                            return UnitInfo.archer_defense;
                        case this.UnitValue.DEFENSE_CAVALRY:
                            return UnitInfo.archer_defense_cavalry;
                        case this.UnitValue.DEFENSE_ARCHER:
                            return UnitInfo.archer_defense_archer;
                        case this.UnitValue.CARRY:
                            return UnitInfo.archer_carry;
                        case this.UnitValue.BUILD_TIME:
                            return UnitInfo.archer_build_time;
                    }
                    break;
                case this.UnitType.SPY:
                    switch ($unitValue) {
                        case this.UnitValue.WOOD:
                            return UnitInfo.spy_wood;
                        case this.UnitValue.STONE:
                            return UnitInfo.spy_stone;
                        case this.UnitValue.IRON:
                            return UnitInfo.spy_iron;
                        case this.UnitValue.POP:
                            return UnitInfo.spy_pop;
                        case this.UnitValue.SPEED:
                            return UnitInfo.spy_speed;
                        case this.UnitValue.ATTACK:
                            return UnitInfo.spy_attack;
                        case this.UnitValue.DEFENSE:
                            return UnitInfo.spy_defense;
                        case this.UnitValue.DEFENSE_CAVALRY:
                            return UnitInfo.spy_defense_cavalry;
                        case this.UnitValue.DEFENSE_ARCHER:
                            return UnitInfo.spy_defense_archer;
                        case this.UnitValue.CARRY:
                            return UnitInfo.spy_carry;
                        case this.UnitValue.BUILD_TIME:
                            return UnitInfo.spy_build_time;
                    }
                    break;
                case this.UnitType.LIGHT:
                    switch ($unitValue) {
                        case this.UnitValue.WOOD:
                            return UnitInfo.light_wood;
                        case this.UnitValue.STONE:
                            return UnitInfo.light_stone;
                        case this.UnitValue.IRON:
                            return UnitInfo.light_iron;
                        case this.UnitValue.POP:
                            return UnitInfo.light_pop;
                        case this.UnitValue.SPEED:
                            return UnitInfo.light_speed;
                        case this.UnitValue.ATTACK:
                            return UnitInfo.light_attack;
                        case this.UnitValue.DEFENSE:
                            return UnitInfo.light_defense;
                        case this.UnitValue.DEFENSE_CAVALRY:
                            return UnitInfo.light_defense_cavalry;
                        case this.UnitValue.DEFENSE_ARCHER:
                            return UnitInfo.light_defense_archer;
                        case this.UnitValue.CARRY:
                            return UnitInfo.light_carry;
                        case this.UnitValue.BUILD_TIME:
                            return UnitInfo.light_build_time;
                    }
                    break;
                case this.UnitType.MARCHER:
                    switch ($unitValue) {
                        case this.UnitValue.WOOD:
                            return UnitInfo.marcher_wood;
                        case this.UnitValue.STONE:
                            return UnitInfo.marcher_stone;
                        case this.UnitValue.IRON:
                            return UnitInfo.marcher_iron;
                        case this.UnitValue.POP:
                            return UnitInfo.marcher_pop;
                        case this.UnitValue.SPEED:
                            return UnitInfo.marcher_speed;
                        case this.UnitValue.ATTACK:
                            return UnitInfo.marcher_attack;
                        case this.UnitValue.DEFENSE:
                            return UnitInfo.marcher_defense;
                        case this.UnitValue.DEFENSE_CAVALRY:
                            return UnitInfo.marcher_defense_cavalry;
                        case this.UnitValue.DEFENSE_ARCHER:
                            return UnitInfo.marcher_defense_archer;
                        case this.UnitValue.CARRY:
                            return UnitInfo.marcher_carry;
                        case this.UnitValue.BUILD_TIME:
                            return UnitInfo.marcher_build_time;
                    }
                    break;
                case this.UnitType.HEAVY:
                    switch ($unitValue) {
                        case this.UnitValue.WOOD:
                            return UnitInfo.heavy_wood;
                        case this.UnitValue.STONE:
                            return UnitInfo.heavy_stone;
                        case this.UnitValue.IRON:
                            return UnitInfo.heavy_iron;
                        case this.UnitValue.POP:
                            return UnitInfo.heavy_pop;
                        case this.UnitValue.SPEED:
                            return UnitInfo.heavy_speed;
                        case this.UnitValue.ATTACK:
                            return UnitInfo.heavy_attack;
                        case this.UnitValue.DEFENSE:
                            return UnitInfo.heavy_defense;
                        case this.UnitValue.DEFENSE_CAVALRY:
                            return UnitInfo.heavy_defense_cavalry;
                        case this.UnitValue.DEFENSE_ARCHER:
                            return UnitInfo.heavy_defense_archer;
                        case this.UnitValue.CARRY:
                            return UnitInfo.heavy_carry;
                        case this.UnitValue.BUILD_TIME:
                            return UnitInfo.heavy_build_time;
                    }
                    break;
                case this.UnitType.RAM:
                    switch ($unitValue) {
                        case this.UnitValue.WOOD:
                            return UnitInfo.ram_wood;
                        case this.UnitValue.STONE:
                            return UnitInfo.ram_stone;
                        case this.UnitValue.IRON:
                            return UnitInfo.ram_iron;
                        case this.UnitValue.POP:
                            return UnitInfo.ram_pop;
                        case this.UnitValue.SPEED:
                            return UnitInfo.ram_speed;
                        case this.UnitValue.ATTACK:
                            return UnitInfo.ram_attack;
                        case this.UnitValue.DEFENSE:
                            return UnitInfo.ram_defense;
                        case this.UnitValue.DEFENSE_CAVALRY:
                            return UnitInfo.ram_defense_cavalry;
                        case this.UnitValue.DEFENSE_ARCHER:
                            return UnitInfo.ram_defense_archer;
                        case this.UnitValue.CARRY:
                            return UnitInfo.ram_carry;
                        case this.UnitValue.BUILD_TIME:
                            return UnitInfo.ram_build_time;
                    }
                    break;
                case this.UnitType.CATAPULT:
                    switch ($unitValue) {
                        case this.UnitValue.WOOD:
                            return UnitInfo.catapult_wood;
                        case this.UnitValue.STONE:
                            return UnitInfo.catapult_stone;
                        case this.UnitValue.IRON:
                            return UnitInfo.catapult_iron;
                        case this.UnitValue.POP:
                            return UnitInfo.catapult_pop;
                        case this.UnitValue.SPEED:
                            return UnitInfo.catapult_speed;
                        case this.UnitValue.ATTACK:
                            return UnitInfo.catapult_attack;
                        case this.UnitValue.DEFENSE:
                            return UnitInfo.catapult_defense;
                        case this.UnitValue.DEFENSE_CAVALRY:
                            return UnitInfo.catapult_defense_cavalry;
                        case this.UnitValue.DEFENSE_ARCHER:
                            return UnitInfo.catapult_defense_archer;
                        case this.UnitValue.CARRY:
                            return UnitInfo.catapult_carry;
                        case this.UnitValue.BUILD_TIME:
                            return UnitInfo.catapult_build_time;
                    }
                    break;
                case this.UnitType.SNOB:
                    switch ($unitValue) {
                        case this.UnitValue.WOOD:
                            return UnitInfo.snob_wood;
                        case this.UnitValue.STONE:
                            return UnitInfo.snob_stone;
                        case this.UnitValue.IRON:
                            return UnitInfo.snob_iron;
                        case this.UnitValue.POP:
                            return UnitInfo.snob_pop;
                        case this.UnitValue.SPEED:
                            return UnitInfo.snob_speed;
                        case this.UnitValue.ATTACK:
                            return UnitInfo.snob_attack;
                        case this.UnitValue.DEFENSE:
                            return UnitInfo.snob_defense;
                        case this.UnitValue.DEFENSE_CAVALRY:
                            return UnitInfo.snob_defense_cavalry;
                        case this.UnitValue.DEFENSE_ARCHER:
                            return UnitInfo.snob_defense_archer;
                        case this.UnitValue.CARRY:
                            return UnitInfo.snob_carry;
                        case this.UnitValue.BUILD_TIME:
                            return UnitInfo.snob_build_time;
                    }
                    break;
                case this.UnitType.KNIGHT:
                    switch ($unitValue) {
                        case this.UnitValue.WOOD:
                            return UnitInfo.knight_wood;
                        case this.UnitValue.STONE:
                            return UnitInfo.knight_stone;
                        case this.UnitValue.IRON:
                            return UnitInfo.knight_iron;
                        case this.UnitValue.POP:
                            return UnitInfo.knight_pop;
                        case this.UnitValue.SPEED:
                            return UnitInfo.knight_speed;
                        case this.UnitValue.ATTACK:
                            return UnitInfo.knight_attack;
                        case this.UnitValue.DEFENSE:
                            return UnitInfo.knight_defense;
                        case this.UnitValue.DEFENSE_CAVALRY:
                            return UnitInfo.knight_defense_cavalry;
                        case this.UnitValue.DEFENSE_ARCHER:
                            return UnitInfo.knight_defense_archer;
                        case this.UnitValue.CARRY:
                            return UnitInfo.knight_carry;
                        case this.UnitValue.BUILD_TIME:
                            return UnitInfo.knight_build_time;
                    }
                    break;
            }
            return 0;
        },
        getBuildingConfigInfo : function($buildingType, $buildingValue) {
            switch ($buildingType) {
                case this.BuildingType.MAIN:
                    switch ($buildingValue) {
                        case this.BuildingValue.MAX_LEVEL:
                            return BuildingInfo.main_max_level;
                        case this.BuildingValue.MIN_LEVEL:
                            return BuildingInfo.main_min_level;
                        case this.BuildingValue.WOOD:
                            return BuildingInfo.main_wood;
                        case this.BuildingValue.STONE:
                            return BuildingInfo.main_stone;
                        case this.BuildingValue.IRON:
                            return BuildingInfo.main_iron;
                        case this.BuildingValue.POP:
                            return BuildingInfo.main_pop;
                        case this.BuildingValue.WOOD_FACTOR:
                            return BuildingInfo.main_wood_factor;
                        case this.BuildingValue.STONE_FACTOR:
                            return BuildingInfo.main_stone_factor;
                        case this.BuildingValue.IRON_FACTOR:
                            return BuildingInfo.main_iron_factor;
                        case this.BuildingValue.POP_FACTOR:
                            return BuildingInfo.main_pop_factor;
                        case this.BuildingValue.BUILD_TIME:
                            return BuildingInfo.main_build_time;
                        case this.BuildingValue.BUILD_TIME_FACTOR:
                            return BuildingInfo.main_build_time_factor;
                    }
                    break;
                case this.BuildingType.BARRACKS:
                    switch ($buildingValue) {
                        case this.BuildingValue.MAX_LEVEL:
                            return BuildingInfo.barracks_max_level;
                        case this.BuildingValue.MIN_LEVEL:
                            return BuildingInfo.barracks_min_level;
                        case this.BuildingValue.WOOD:
                            return BuildingInfo.barracks_wood;
                        case this.BuildingValue.STONE:
                            return BuildingInfo.barracks_stone;
                        case this.BuildingValue.IRON:
                            return BuildingInfo.barracks_iron;
                        case this.BuildingValue.POP:
                            return BuildingInfo.barracks_pop;
                        case this.BuildingValue.WOOD_FACTOR:
                            return BuildingInfo.barracks_wood_factor;
                        case this.BuildingValue.STONE_FACTOR:
                            return BuildingInfo.barracks_stone_factor;
                        case this.BuildingValue.IRON_FACTOR:
                            return BuildingInfo.barracks_iron_factor;
                        case this.BuildingValue.POP_FACTOR:
                            return BuildingInfo.barracks_pop_factor;
                        case this.BuildingValue.BUILD_TIME:
                            return BuildingInfo.barracks_build_time;
                        case this.BuildingValue.BUILD_TIME_FACTOR:
                            return BuildingInfo.barracks_build_time_factor;
                    }
                    break;
                case this.BuildingType.STABLE:
                    switch ($buildingValue) {
                        case this.BuildingValue.MAX_LEVEL:
                            return BuildingInfo.stable_max_level;
                        case this.BuildingValue.MIN_LEVEL:
                            return BuildingInfo.stable_min_level;
                        case this.BuildingValue.WOOD:
                            return BuildingInfo.stable_wood;
                        case this.BuildingValue.STONE:
                            return BuildingInfo.stable_stone;
                        case this.BuildingValue.IRON:
                            return BuildingInfo.stable_iron;
                        case this.BuildingValue.POP:
                            return BuildingInfo.stable_pop;
                        case this.BuildingValue.WOOD_FACTOR:
                            return BuildingInfo.stable_wood_factor;
                        case this.BuildingValue.STONE_FACTOR:
                            return BuildingInfo.stable_stone_factor;
                        case this.BuildingValue.IRON_FACTOR:
                            return BuildingInfo.stable_iron_factor;
                        case this.BuildingValue.POP_FACTOR:
                            return BuildingInfo.stable_pop_factor;
                        case this.BuildingValue.BUILD_TIME:
                            return BuildingInfo.stable_build_time;
                        case this.BuildingValue.BUILD_TIME_FACTOR:
                            return BuildingInfo.stable_build_time_factor;
                    }
                    break;
                case this.BuildingType.GARAGE:
                    switch ($buildingValue) {
                        case this.BuildingValue.MAX_LEVEL:
                            return BuildingInfo.garage_max_level;
                        case this.BuildingValue.MIN_LEVEL:
                            return BuildingInfo.garage_min_level;
                        case this.BuildingValue.WOOD:
                            return BuildingInfo.garage_wood;
                        case this.BuildingValue.STONE:
                            return BuildingInfo.garage_stone;
                        case this.BuildingValue.IRON:
                            return BuildingInfo.garage_iron;
                        case this.BuildingValue.POP:
                            return BuildingInfo.garage_pop;
                        case this.BuildingValue.WOOD_FACTOR:
                            return BuildingInfo.garage_wood_factor;
                        case this.BuildingValue.STONE_FACTOR:
                            return BuildingInfo.garage_stone_factor;
                        case this.BuildingValue.IRON_FACTOR:
                            return BuildingInfo.garage_iron_factor;
                        case this.BuildingValue.POP_FACTOR:
                            return BuildingInfo.garage_pop_factor;
                        case this.BuildingValue.BUILD_TIME:
                            return BuildingInfo.garage_build_time;
                        case this.BuildingValue.BUILD_TIME_FACTOR:
                            return BuildingInfo.garage_build_time_factor;
                    }
                    break;
                case this.BuildingType.CHURCH:
                    switch ($buildingValue) {
                        case this.BuildingValue.MAX_LEVEL:
                            return BuildingInfo.church_max_level;
                        case this.BuildingValue.MIN_LEVEL:
                            return BuildingInfo.church_min_level;
                        case this.BuildingValue.WOOD:
                            return BuildingInfo.church_wood;
                        case this.BuildingValue.STONE:
                            return BuildingInfo.church_stone;
                        case this.BuildingValue.IRON:
                            return BuildingInfo.church_iron;
                        case this.BuildingValue.POP:
                            return BuildingInfo.church_pop;
                        case this.BuildingValue.WOOD_FACTOR:
                            return BuildingInfo.church_wood_factor;
                        case this.BuildingValue.STONE_FACTOR:
                            return BuildingInfo.church_stone_factor;
                        case this.BuildingValue.IRON_FACTOR:
                            return BuildingInfo.church_iron_factor;
                        case this.BuildingValue.POP_FACTOR:
                            return BuildingInfo.church_pop_factor;
                        case this.BuildingValue.BUILD_TIME:
                            return BuildingInfo.church_build_time;
                        case this.BuildingValue.BUILD_TIME_FACTOR:
                            return BuildingInfo.church_build_time_factor;
                    }
                    break;
                case this.BuildingType.CHURCH_F:
                    switch ($buildingValue) {
                        case this.BuildingValue.MAX_LEVEL:
                            return BuildingInfo.church_f_max_level;
                        case this.BuildingValue.MIN_LEVEL:
                            return BuildingInfo.church_f_min_level;
                        case this.BuildingValue.WOOD:
                            return BuildingInfo.church_f_wood;
                        case this.BuildingValue.STONE:
                            return BuildingInfo.church_f_stone;
                        case this.BuildingValue.IRON:
                            return BuildingInfo.church_f_iron;
                        case this.BuildingValue.POP:
                            return BuildingInfo.church_f_pop;
                        case this.BuildingValue.WOOD_FACTOR:
                            return BuildingInfo.church_f_wood_factor;
                        case this.BuildingValue.STONE_FACTOR:
                            return BuildingInfo.church_f_stone_factor;
                        case this.BuildingValue.IRON_FACTOR:
                            return BuildingInfo.church_f_iron_factor;
                        case this.BuildingValue.POP_FACTOR:
                            return BuildingInfo.church_f_pop_factor;
                        case this.BuildingValue.BUILD_TIME:
                            return BuildingInfo.church_f_build_time;
                        case this.BuildingValue.BUILD_TIME_FACTOR:
                            return BuildingInfo.church_f_build_time_factor;
                    }
                    break;
                case this.BuildingType.SNOB:
                    switch ($buildingValue) {
                        case this.BuildingValue.MAX_LEVEL:
                            return BuildingInfo.snob_max_level;
                        case this.BuildingValue.MIN_LEVEL:
                            return BuildingInfo.snob_min_level;
                        case this.BuildingValue.WOOD:
                            return BuildingInfo.snob_wood;
                        case this.BuildingValue.STONE:
                            return BuildingInfo.snob_stone;
                        case this.BuildingValue.IRON:
                            return BuildingInfo.snob_iron;
                        case this.BuildingValue.POP:
                            return BuildingInfo.snob_pop;
                        case this.BuildingValue.WOOD_FACTOR:
                            return BuildingInfo.snob_wood_factor;
                        case this.BuildingValue.STONE_FACTOR:
                            return BuildingInfo.snob_stone_factor;
                        case this.BuildingValue.IRON_FACTOR:
                            return BuildingInfo.snob_iron_factor;
                        case this.BuildingValue.POP_FACTOR:
                            return BuildingInfo.snob_pop_factor;
                        case this.BuildingValue.BUILD_TIME:
                            return BuildingInfo.snob_build_time;
                        case this.BuildingValue.BUILD_TIME_FACTOR:
                            return BuildingInfo.snob_build_time_factor;
                    }
                    break;
                case this.BuildingType.SMITH:
                    switch ($buildingValue) {
                        case this.BuildingValue.MAX_LEVEL:
                            return BuildingInfo.smith_max_level;
                        case this.BuildingValue.MIN_LEVEL:
                            return BuildingInfo.smith_min_level;
                        case this.BuildingValue.WOOD:
                            return BuildingInfo.smith_wood;
                        case this.BuildingValue.STONE:
                            return BuildingInfo.smith_stone;
                        case this.BuildingValue.IRON:
                            return BuildingInfo.smith_iron;
                        case this.BuildingValue.POP:
                            return BuildingInfo.smith_pop;
                        case this.BuildingValue.WOOD_FACTOR:
                            return BuildingInfo.smith_wood_factor;
                        case this.BuildingValue.STONE_FACTOR:
                            return BuildingInfo.smith_stone_factor;
                        case this.BuildingValue.IRON_FACTOR:
                            return BuildingInfo.smith_iron_factor;
                        case this.BuildingValue.POP_FACTOR:
                            return BuildingInfo.smith_pop_factor;
                        case this.BuildingValue.BUILD_TIME:
                            return BuildingInfo.smith_build_time;
                        case this.BuildingValue.BUILD_TIME_FACTOR:
                            return BuildingInfo.smith_build_time_factor;
                    }
                    break;
                case this.BuildingType.PLACE:
                    switch ($buildingValue) {
                        case this.BuildingValue.MAX_LEVEL:
                            return BuildingInfo.place_max_level;
                        case this.BuildingValue.MIN_LEVEL:
                            return BuildingInfo.place_min_level;
                        case this.BuildingValue.WOOD:
                            return BuildingInfo.place_wood;
                        case this.BuildingValue.STONE:
                            return BuildingInfo.place_stone;
                        case this.BuildingValue.IRON:
                            return BuildingInfo.place_iron;
                        case this.BuildingValue.POP:
                            return BuildingInfo.place_pop;
                        case this.BuildingValue.WOOD_FACTOR:
                            return BuildingInfo.place_wood_factor;
                        case this.BuildingValue.STONE_FACTOR:
                            return BuildingInfo.place_stone_factor;
                        case this.BuildingValue.IRON_FACTOR:
                            return BuildingInfo.place_iron_factor;
                        case this.BuildingValue.POP_FACTOR:
                            return BuildingInfo.place_pop_factor;
                        case this.BuildingValue.BUILD_TIME:
                            return BuildingInfo.place_build_time;
                        case this.BuildingValue.BUILD_TIME_FACTOR:
                            return BuildingInfo.place_build_time_factor;
                    }
                    break;
                case this.BuildingType.STATUE:
                    switch ($buildingValue) {
                        case this.BuildingValue.MAX_LEVEL:
                            return BuildingInfo.statue_max_level;
                        case this.BuildingValue.MIN_LEVEL:
                            return BuildingInfo.statue_min_level;
                        case this.BuildingValue.WOOD:
                            return BuildingInfo.statue_wood;
                        case this.BuildingValue.STONE:
                            return BuildingInfo.statue_stone;
                        case this.BuildingValue.IRON:
                            return BuildingInfo.statue_iron;
                        case this.BuildingValue.POP:
                            return BuildingInfo.statue_pop;
                        case this.BuildingValue.WOOD_FACTOR:
                            return BuildingInfo.statue_wood_factor;
                        case this.BuildingValue.STONE_FACTOR:
                            return BuildingInfo.statue_stone_factor;
                        case this.BuildingValue.IRON_FACTOR:
                            return BuildingInfo.statue_iron_factor;
                        case this.BuildingValue.POP_FACTOR:
                            return BuildingInfo.statue_pop_factor;
                        case this.BuildingValue.BUILD_TIME:
                            return BuildingInfo.statue_build_time;
                        case this.BuildingValue.BUILD_TIME_FACTOR:
                            return BuildingInfo.statue_build_time_factor;
                    }
                    break;
                case this.BuildingType.MARKET:
                    switch ($buildingValue) {
                        case this.BuildingValue.MAX_LEVEL:
                            return BuildingInfo.market_max_level;
                        case this.BuildingValue.MIN_LEVEL:
                            return BuildingInfo.market_min_level;
                        case this.BuildingValue.WOOD:
                            return BuildingInfo.market_wood;
                        case this.BuildingValue.STONE:
                            return BuildingInfo.market_stone;
                        case this.BuildingValue.IRON:
                            return BuildingInfo.market_iron;
                        case this.BuildingValue.POP:
                            return BuildingInfo.market_pop;
                        case this.BuildingValue.WOOD_FACTOR:
                            return BuildingInfo.market_wood_factor;
                        case this.BuildingValue.STONE_FACTOR:
                            return BuildingInfo.market_stone_factor;
                        case this.BuildingValue.IRON_FACTOR:
                            return BuildingInfo.market_iron_factor;
                        case this.BuildingValue.POP_FACTOR:
                            return BuildingInfo.market_pop_factor;
                        case this.BuildingValue.BUILD_TIME:
                            return BuildingInfo.market_build_time;
                        case this.BuildingValue.BUILD_TIME_FACTOR:
                            return BuildingInfo.market_build_time_factor;
                    }
                    break;
                case this.BuildingType.WOOD:
                    switch ($buildingValue) {
                        case this.BuildingValue.MAX_LEVEL:
                            return BuildingInfo.wood_max_level;
                        case this.BuildingValue.MIN_LEVEL:
                            return BuildingInfo.wood_min_level;
                        case this.BuildingValue.WOOD:
                            return BuildingInfo.wood_wood;
                        case this.BuildingValue.STONE:
                            return BuildingInfo.wood_stone;
                        case this.BuildingValue.IRON:
                            return BuildingInfo.wood_iron;
                        case this.BuildingValue.POP:
                            return BuildingInfo.wood_pop;
                        case this.BuildingValue.WOOD_FACTOR:
                            return BuildingInfo.wood_wood_factor;
                        case this.BuildingValue.STONE_FACTOR:
                            return BuildingInfo.wood_stone_factor;
                        case this.BuildingValue.IRON_FACTOR:
                            return BuildingInfo.wood_iron_factor;
                        case this.BuildingValue.POP_FACTOR:
                            return BuildingInfo.wood_pop_factor;
                        case this.BuildingValue.BUILD_TIME:
                            return BuildingInfo.wood_build_time;
                        case this.BuildingValue.BUILD_TIME_FACTOR:
                            return BuildingInfo.wood_build_time_factor;
                    }
                    break;
                case this.BuildingType.STONE:
                    switch ($buildingValue) {
                        case this.BuildingValue.MAX_LEVEL:
                            return BuildingInfo.stone_max_level;
                        case this.BuildingValue.MIN_LEVEL:
                            return BuildingInfo.stone_min_level;
                        case this.BuildingValue.WOOD:
                            return BuildingInfo.stone_wood;
                        case this.BuildingValue.STONE:
                            return BuildingInfo.stone_stone;
                        case this.BuildingValue.IRON:
                            return BuildingInfo.stone_iron;
                        case this.BuildingValue.POP:
                            return BuildingInfo.stone_pop;
                        case this.BuildingValue.WOOD_FACTOR:
                            return BuildingInfo.stone_wood_factor;
                        case this.BuildingValue.STONE_FACTOR:
                            return BuildingInfo.stone_stone_factor;
                        case this.BuildingValue.IRON_FACTOR:
                            return BuildingInfo.stone_iron_factor;
                        case this.BuildingValue.POP_FACTOR:
                            return BuildingInfo.stone_pop_factor;
                        case this.BuildingValue.BUILD_TIME:
                            return BuildingInfo.stone_build_time;
                        case this.BuildingValue.BUILD_TIME_FACTOR:
                            return BuildingInfo.stone_build_time_factor;
                    }
                    break;
                case this.BuildingType.IRON:
                    switch ($buildingValue) {
                        case this.BuildingValue.MAX_LEVEL:
                            return BuildingInfo.iron_max_level;
                        case this.BuildingValue.MIN_LEVEL:
                            return BuildingInfo.iron_min_level;
                        case this.BuildingValue.WOOD:
                            return BuildingInfo.iron_wood;
                        case this.BuildingValue.STONE:
                            return BuildingInfo.iron_stone;
                        case this.BuildingValue.IRON:
                            return BuildingInfo.iron_iron;
                        case this.BuildingValue.POP:
                            return BuildingInfo.iron_pop;
                        case this.BuildingValue.WOOD_FACTOR:
                            return BuildingInfo.iron_wood_factor;
                        case this.BuildingValue.STONE_FACTOR:
                            return BuildingInfo.iron_stone_factor;
                        case this.BuildingValue.IRON_FACTOR:
                            return BuildingInfo.iron_iron_factor;
                        case this.BuildingValue.POP_FACTOR:
                            return BuildingInfo.iron_pop_factor;
                        case this.BuildingValue.BUILD_TIME:
                            return BuildingInfo.iron_build_time;
                        case this.BuildingValue.BUILD_TIME_FACTOR:
                            return BuildingInfo.iron_build_time_factor;
                    }
                    break;
                case this.BuildingType.FARM:
                    switch ($buildingValue) {
                        case this.BuildingValue.MAX_LEVEL:
                            return BuildingInfo.farm_max_level;
                        case this.BuildingValue.MIN_LEVEL:
                            return BuildingInfo.farm_min_level;
                        case this.BuildingValue.WOOD:
                            return BuildingInfo.farm_wood;
                        case this.BuildingValue.STONE:
                            return BuildingInfo.farm_stone;
                        case this.BuildingValue.IRON:
                            return BuildingInfo.farm_iron;
                        case this.BuildingValue.POP:
                            return BuildingInfo.farm_pop;
                        case this.BuildingValue.WOOD_FACTOR:
                            return BuildingInfo.farm_wood_factor;
                        case this.BuildingValue.STONE_FACTOR:
                            return BuildingInfo.farm_stone_factor;
                        case this.BuildingValue.IRON_FACTOR:
                            return BuildingInfo.farm_iron_factor;
                        case this.BuildingValue.POP_FACTOR:
                            return BuildingInfo.farm_pop_factor;
                        case this.BuildingValue.BUILD_TIME:
                            return BuildingInfo.farm_build_time;
                        case this.BuildingValue.BUILD_TIME_FACTOR:
                            return BuildingInfo.farm_build_time_factor;
                    }
                    break;
                case this.BuildingType.STORAGE:
                    switch ($buildingValue) {
                        case this.BuildingValue.MAX_LEVEL:
                            return BuildingInfo.storage_max_level;
                        case this.BuildingValue.MIN_LEVEL:
                            return BuildingInfo.storage_min_level;
                        case this.BuildingValue.WOOD:
                            return BuildingInfo.storage_wood;
                        case this.BuildingValue.STONE:
                            return BuildingInfo.storage_stone;
                        case this.BuildingValue.IRON:
                            return BuildingInfo.storage_iron;
                        case this.BuildingValue.POP:
                            return BuildingInfo.storage_pop;
                        case this.BuildingValue.WOOD_FACTOR:
                            return BuildingInfo.storage_wood_factor;
                        case this.BuildingValue.STONE_FACTOR:
                            return BuildingInfo.storage_stone_factor;
                        case this.BuildingValue.IRON_FACTOR:
                            return BuildingInfo.storage_iron_factor;
                        case this.BuildingValue.POP_FACTOR:
                            return BuildingInfo.storage_pop_factor;
                        case this.BuildingValue.BUILD_TIME:
                            return BuildingInfo.storage_build_time;
                        case this.BuildingValue.BUILD_TIME_FACTOR:
                            return BuildingInfo.storage_build_time_factor;
                    }
                    break;
                case this.BuildingType.HIDE:
                    switch ($buildingValue) {
                        case this.BuildingValue.MAX_LEVEL:
                            return BuildingInfo.hide_max_level;
                        case this.BuildingValue.MIN_LEVEL:
                            return BuildingInfo.hide_min_level;
                        case this.BuildingValue.WOOD:
                            return BuildingInfo.hide_wood;
                        case this.BuildingValue.STONE:
                            return BuildingInfo.hide_stone;
                        case this.BuildingValue.IRON:
                            return BuildingInfo.hide_iron;
                        case this.BuildingValue.POP:
                            return BuildingInfo.hide_pop;
                        case this.BuildingValue.WOOD_FACTOR:
                            return BuildingInfo.hide_wood_factor;
                        case this.BuildingValue.STONE_FACTOR:
                            return BuildingInfo.hide_stone_factor;
                        case this.BuildingValue.IRON_FACTOR:
                            return BuildingInfo.hide_iron_factor;
                        case this.BuildingValue.POP_FACTOR:
                            return BuildingInfo.hide_pop_factor;
                        case this.BuildingValue.BUILD_TIME:
                            return BuildingInfo.hide_build_time;
                        case this.BuildingValue.BUILD_TIME_FACTOR:
                            return BuildingInfo.hide_build_time_factor;
                    }
                    break;
                case this.BuildingType.WALL:
                    switch ($buildingValue) {
                        case this.BuildingValue.MAX_LEVEL:
                            return BuildingInfo.wall_max_level;
                        case this.BuildingValue.MIN_LEVEL:
                            return BuildingInfo.wall_min_level;
                        case this.BuildingValue.WOOD:
                            return BuildingInfo.wall_wood;
                        case this.BuildingValue.STONE:
                            return BuildingInfo.wall_stone;
                        case this.BuildingValue.IRON:
                            return BuildingInfo.wall_iron;
                        case this.BuildingValue.POP:
                            return BuildingInfo.wall_pop;
                        case this.BuildingValue.WOOD_FACTOR:
                            return BuildingInfo.wall_wood_factor;
                        case this.BuildingValue.STONE_FACTOR:
                            return BuildingInfo.wall_stone_factor;
                        case this.BuildingValue.IRON_FACTOR:
                            return BuildingInfo.wall_iron_factor;
                        case this.BuildingValue.POP_FACTOR:
                            return BuildingInfo.wall_pop_factor;
                        case this.BuildingValue.BUILD_TIME:
                            return BuildingInfo.wall_build_time;
                        case this.BuildingValue.BUILD_TIME_FACTOR:
                            return BuildingInfo.wall_build_time_factor;
                    }
            }
            return 0;
        },

        getBuildingValue : function($buildingType, $level, $buildingValue) {
            switch ($buildingValue) {
                case this.BuildingValue.WOOD:
                    return Math.round(this.getBuildingConfigInfo($buildingType, $buildingValue) * Math.pow(this.getBuildingConfigInfo($buildingType, this.BuildingValue.WOOD_FACTOR), $level - 1));
                case this.BuildingValue.STONE:
                    return Math.round(this.getBuildingConfigInfo($buildingType, $buildingValue) * Math.pow(this.getBuildingConfigInfo($buildingType, this.BuildingValue.STONE_FACTOR), $level - 1));
                case this.BuildingValue.IRON:
                    return Math.round(this.getBuildingConfigInfo($buildingType, $buildingValue) * Math.pow(this.getBuildingConfigInfo($buildingType, this.BuildingValue.IRON_FACTOR), $level - 1));
                case this.BuildingValue.POP:
                    if ($level == 1)
                        return Math.round(this.getBuildingConfigInfo($buildingType, $buildingValue) * Math.pow(this.getBuildingConfigInfo($buildingType, this.BuildingValue.POP_FACTOR), $level - 1));
                    else
                        return Math.round(this.getBuildingConfigInfo($buildingType, $buildingValue) * Math.pow(this.getBuildingConfigInfo($buildingType, this.BuildingValue.POP_FACTOR), $level - 1))
                            - Math.round(this.getBuildingConfigInfo($buildingType, $buildingValue) * Math.pow(this.getBuildingConfigInfo($buildingType, this.BuildingValue.POP_FACTOR), $level - 2));
                case this.BuildingValue.EFFECT:
                    switch ($buildingType) {
                        case this.BuildingType.MAIN:
                            return Math.pow(0.952381, $level);
                        case this.BuildingType.BARRACKS:
                        case this.BuildingType.STABLE:
                        case this.BuildingType.GARAGE:
                            if ($level == 0) return 1;
                            else if ($level == 1) return 0.63;
                            else if ($level == 2) return 0.59;
                            else if ($level == 3) return 0.56;
                            else if ($level == 4) return 0.53;
                            else if ($level == 5) return 0.50;
                            else if ($level == 6) return 0.47;
                            else if ($level == 7) return 0.44;
                            else if ($level == 8) return 0.42;
                            else if ($level == 9) return 0.39;
                            else if ($level == 10) return 0.37;
                            else if ($level == 11) return 0.35;
                            else if ($level == 12) return 0.33;
                            else if ($level == 13) return 0.31;
                            else if ($level == 14) return 0.29;
                            else if ($level == 15) return 0.28;
                            else if ($level == 16) return 0.26;
                            else if ($level == 17) return 0.25;
                            else if ($level == 18) return 0.23;
                            else if ($level == 19) return 0.22;
                            else if ($level == 20) return 0.21;
                            else if ($level == 21) return 0.20;
                            else if ($level == 22) return 0.19;
                            else if ($level == 23) return 0.17;
                            else if ($level == 24) return 0.16;
                            else if ($level == 25) return 0.16;
                            break;
                        case this.BuildingType.CHURCH:
                            break;
                        case this.BuildingType.CHURCH_F:
                            break;
                        case this.BuildingType.SNOB:
                            break;
                        case this.BuildingType.SMITH:
                            break;
                        case this.BuildingType.PLACE:
                            break;
                        case this.BuildingType.STATUE:
                            break;
                        case this.BuildingType.MARKET:
                            break;
                        case this.BuildingType.WOOD:
                        case this.BuildingType.STONE:
                        case this.BuildingType.IRON:
                            return Math.round(WorldConfig.speed * 30 * Math.pow(1.163118, $level - 1));
                        case this.BuildingType.FARM:
                            if ($level == 1) return 240;
                            else if ($level == 2) return 281;
                            else if ($level == 3) return 329;
                            else if ($level == 4) return 386;
                            else if ($level == 5) return 452;
                            else if ($level == 6) return 530;
                            else if ($level == 7) return 622;
                            else if ($level == 8) return 729;
                            else if ($level == 9) return 854;
                            else if ($level == 10) return 1002;
                            else if ($level == 11) return 1174;
                            else if ($level == 12) return 1376;
                            else if ($level == 13) return 1613;
                            else if ($level == 14) return 1891;
                            else if ($level == 15) return 2216;
                            else if ($level == 16) return 2598;
                            else if ($level == 17) return 3045;
                            else if ($level == 18) return 3569;
                            else if ($level == 19) return 4183;
                            else if ($level == 20) return 4904;
                            else if ($level == 21) return 5748;
                            else if ($level == 22) return 6737;
                            else if ($level == 23) return 7896;
                            else if ($level == 24) return 9255;
                            else if ($level == 25) return 10848;
                            else if ($level == 26) return 12715;
                            else if ($level == 27) return 14904;
                            else if ($level == 28) return 17469;
                            else if ($level == 29) return 20476;
                            else if ($level == 30) return 24000;
                            break;
                        case this.BuildingType.STORAGE:
                            if ($level == 1) return 1000;
                            else if ($level == 2) return 1229;
                            else if ($level == 3) return 1512;
                            else if ($level == 4) return 1859;
                            else if ($level == 5) return 2285;
                            else if ($level == 6) return 2810;
                            else if ($level == 7) return 3454;
                            else if ($level == 8) return 4247;
                            else if ($level == 9) return 5222;
                            else if ($level == 10) return 6420;
                            else if ($level == 11) return 7893;
                            else if ($level == 12) return 9705;
                            else if ($level == 13) return 11932;
                            else if ($level == 14) return 14670;
                            else if ($level == 15) return 18037;
                            else if ($level == 16) return 22177;
                            else if ($level == 17) return 27266;
                            else if ($level == 18) return 33523;
                            else if ($level == 19) return 41217;
                            else if ($level == 20) return 50675;
                            else if ($level == 21) return 62305;
                            else if ($level == 22) return 76604;
                            else if ($level == 23) return 94184;
                            else if ($level == 24) return 115798;
                            else if ($level == 25) return 142372;
                            else if ($level == 26) return 175047;
                            else if ($level == 27) return 215219;
                            else if ($level == 28) return 264611;
                            else if ($level == 29) return 325337;
                            else if ($level == 30) return 400000;
                            break;
                        case this.BuildingType.HIDE:
                            return Math.round(150 * Math.pow(1.3335, $level - 1));
                        case this.BuildingType.WALL:
                            return Math.round(Math.pow(1.03699, $level) * 100);
                    }
            }
            return 0;
        },
        getBuildingLevelInPlayerVillage : function ($buildingType, $villageId) {
            switch ($buildingType) {
                case this.BuildingType.MAIN:
                    return PlayerVillage.getVillage($villageId).main_level;
                case this.BuildingType.BARRACKS:
                    return PlayerVillage.getVillage($villageId).barracks_level;
                case this.BuildingType.STABLE:
                    return PlayerVillage.getVillage($villageId).stable_level;
                case this.BuildingType.GARAGE:
                    return PlayerVillage.getVillage($villageId).garage_level;
                case this.BuildingType.CHURCH:
                    return PlayerVillage.getVillage($villageId).church_level;
                case this.BuildingType.CHURCH_F:
                    return PlayerVillage.getVillage($villageId).church_f_level;
                case this.BuildingType.SNOB:
                    return PlayerVillage.getVillage($villageId).snob_level;
                case this.BuildingType.SMITH:
                    return PlayerVillage.getVillage($villageId).smith_level;
                case this.BuildingType.PLACE:
                    return PlayerVillage.getVillage($villageId).place_level;
                case this.BuildingType.STATUE:
                    return PlayerVillage.getVillage($villageId).statue_level;
                case this.BuildingType.MARKET:
                    return PlayerVillage.getVillage($villageId).market_level;
                case this.BuildingType.WOOD:
                    return PlayerVillage.getVillage($villageId).wood_level;
                case this.BuildingType.STONE:
                    return PlayerVillage.getVillage($villageId).stone_level;
                case this.BuildingType.IRON:
                    return PlayerVillage.getVillage($villageId).iron_level;
                case this.BuildingType.FARM:
                    return PlayerVillage.getVillage($villageId).farm_level;
                case this.BuildingType.STORAGE:
                    return PlayerVillage.getVillage($villageId).storage_level;
                case this.BuildingType.HIDE:
                    return PlayerVillage.getVillage($villageId).hide_level;
                case this.BuildingType.WALL:
                    return PlayerVillage.getVillage($villageId).wall_level;
            }
        },

        getUnitBuildTimeInMillis : function($unitType, $villageId) {
            var baseValue = this.getUnitConfigInfo($unitType, this.UnitValue.BUILD_TIME);
            var prodLevel = 1;
            var prodBuildingType = this.BuildingType.BARRACKS;

            switch ($unitType) {
                case this.UnitType.SPEAR:
                case this.UnitType.SWORD:
                case this.UnitType.AXE:
                case this.UnitType.ARCHER:
                    prodBuildingType = this.BuildingType.BARRACKS;
                    prodLevel = PlayerVillage.getVillage($villageId).barracks_level;
                    break;
                case this.UnitType.SPY:
                case this.UnitType.LIGHT:
                case this.UnitType.MARCHER:
                case this.UnitType.HEAVY:
                    prodBuildingType = this.BuildingType.STABLE;
                    prodLevel = PlayerVillage.getVillage($villageId).stable_level;
                    break;
                case this.UnitType.RAM:
                case this.UnitType.CATAPULT:
                    prodBuildingType = this.BuildingType.GARAGE;
                    prodLevel = PlayerVillage.getVillage($villageId).garage_level;
                    break;
            }

            return baseValue * this.getBuildingValue(prodBuildingType, prodLevel, this.BuildingValue.EFFECT) * 1000;
        },
        getBuildingBuildTimeInMillis : function($buildingType, $newLevel, $villageId) {
            // BuildTime Formula 2 does not work
            var baseValue = this.getBuildingConfigInfo($buildingType, this.BuildingValue.BUILD_TIME);
            var baseValueFactor = this.getBuildingConfigInfo($buildingType, this.BuildingValue.BUILD_TIME_FACTOR);
            var factor = 1;
        
            if (WorldConfig.new_buildtime_formula == 1)
            {
                if ($newLevel == 1) factor = 9.0225263157894736842105263157895;
                else if ($newLevel == 2) factor = 10.827052631578947368421052631579;
                else if ($newLevel == 3) factor = 3.0401231527093596059113300492611;
                else if ($newLevel == 4) factor = 1.9854423592493297587131367292225;
                else if ($newLevel == 5) factor = 1.6041245487364620938628158844765;
                else if ($newLevel == 6) factor = 1.4115486432825943084050297816016;
                else if ($newLevel == 7) factor = 1.2965653495440729483282674772036;
                else if ($newLevel == 8) factor = 1.2202224870878029400079459674215;
                else if ($newLevel == 9) factor = 1.1659474849731097753875355900032;
                else if ($newLevel == 10) factor = 1.1253613231552162849872773536896;
                else if ($newLevel == 11) factor = 1.0938169826875515251442704039571;
                else if ($newLevel == 12) factor = 1.0687430776976002685014264138278;
                else if ($newLevel == 13) factor = 1.048336076817558299039780521262;
                else if ($newLevel == 14) factor = 1.0313596491228070175438596491228;
                else if ($newLevel == 15) factor = 1.0169118462391424875254111994086;
                else if ($newLevel == 16) factor = 1.0046420692278432864206922784329;
                else if ($newLevel == 17) factor = 0.99405469828126960230836783339606;
                else if ($newLevel == 18) factor = 0.98475842783905546061830045052043;
                else if ($newLevel == 19) factor = 0.97659091881713527624427611588993;
                else if ($newLevel == 20) factor = 0.96931082085589890623340766698524;
                else if ($newLevel == 21) factor = 0.96281277468502783474948725461471;
                else if ($newLevel == 22) factor = 0.95699453949763378230797233345468;
                else if ($newLevel == 23) factor = 0.95172063555913113435237329042639;
                else if ($newLevel == 24) factor = 0.94692775906346929926958609878931;
                else if ($newLevel == 25) factor = 0.94255543413608509814228210200158;
                else if ($newLevel == 26) factor = 0.93855890083906291250100435027146;
                else if ($newLevel == 27) factor = 0.93487647322236725516163762302657;
                else if ($newLevel == 28) factor = 0.93148472790272690594666434612007;
                else if ($newLevel == 29) factor = 0.92834148040104597837084926610688;
                else if ($newLevel == 30) factor = 0.92543006380412297985448948514603;
            }
        
            return baseValue * Math.pow(baseValueFactor, ($newLevel - 1))
                * this.getBuildingValue(this.BuildingType.MAIN, PlayerVillage.getVillage($villageId).main_level, this.BuildingValue.EFFECT) / factor * 1000;
        }
    };