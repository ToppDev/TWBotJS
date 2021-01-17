Logger.log(Logger.LogLevel.DEBUG, "Loading database/WorldConfig.js", "()", "database/WorldConfig.js");

var WorldConfig = WorldConfig || {
        //<editor-fold desc="Fields">
        speed : 0,
        unit_speed : 0,
        /**  0 = inactive, 1 = active, 2 = time-based */
        moral : 0,
        /**  0 = inactive, 1 = active */
        build_destroy : 0,
        /**  Time in seconds for canceling a trade. */
        trade_cancel_time : 0,
        /**  0 = inactive, 1 = active */
        command_millis_arrival : 0,
        /**  Time in seconds for canceling a command. */
        command_cancel_time : 0,
        /**  Days you can not be attacked. */
        newbie_days : 0,
        game_base_config : 0,
        /**  0 = old build-times, 1 = new_buildtimes, 2 = ? */
        new_buildtime_formula : 0,
        /** 0 = deactivated, 1 = activated, 2 = activated, can find items */
        knight : 0,
        /** 0 = deactivated, 1 = activated */
        archer : 0,
        tech : 0,
        spy : 0,
        farm_limit : 0,
        /** 0 = deactivated, 1 = activated */
        church : 0,
        watchtower : 0,
        fake_limit : 0,
        base_production : 0,
        snob_gold : 0,
        snob_cheap_rebuild : 0,
        snob_simple : 0,
        snob_rise : 0,
        snob_max_dist : 0,
        snob_factor : 0,
        snob_coin_wood : 0,
        snob_coin_stone : 0,
        snob_coin_iron : 0,
        /** 0 = deactivated */
        bonus_villages : 0,
        night_active : 0,
        night_start_hour : 0,
        night_end_hour : 0,
        night_def_factor : 0,

        lastDatabaseUpdateDate : 0,
        declarePlayerAsFarmInterval : 432000000, // 5 days
        databaseUpdateInterval : 432000000, // 5 days
        //</editor-fold>

        downloadFromWeb : function($dsWorld) {
            Logger.log(Logger.LogLevel.INFO, "Downloading world config...", "downloadFromWeb()", "database/WorldConfig.js");
            page.open('https://' + $dsWorld + '.die-staemme.de/interface.php?func=get_config');
            phantom.waitFor(function() {return !page.loading;});
            var content = page.content;

            var matches = content.match(/<speed>[0-9.]*<\/speed>/);
            this.speed = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
            matches = content.match(/<unit_speed>[0-9.]*<\/unit_speed>/);
            this.unit_speed = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
            matches = content.match(/<moral>[0-9.]*<\/moral>/);
            this.moral = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
            matches = content.match(/<destroy>[0-9.]*<\/destroy>/);
            this.build_destroy = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
            matches = content.match(/<trade_cancel_time>[0-9.]*<\/trade_cancel_time>/);
            this.trade_cancel_time = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
            matches = content.match(/<millis_arrival>[0-9.]*<\/millis_arrival>/);
            this.command_millis_arrival = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
            matches = content.match(/<command_cancel_time>[0-9.]*<\/command_cancel_time>/);
            this.command_cancel_time = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
            matches = content.match(/<days>[0-9.]*<\/days>/);
            this.newbie_days = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
            matches = content.match(/<base_config>[0-9.]*<\/base_config>/);
            this.game_base_config = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
            matches = content.match(/<buildtime_formula>[0-9.]*<\/buildtime_formula>/);
            this.new_buildtime_formula = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
            matches = content.match(/<knight>[0-9.]*<\/knight>/);
            this.knight = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
            matches = content.match(/<archer>[0-9.]*<\/archer>/);
            this.archer = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
            matches = content.match(/<tech>[0-9.]*<\/tech>/);
            this.tech = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
            matches = content.match(/<spy>[0-9.]*<\/spy>/);
            this.spy = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
            matches = content.match(/<farm_limit>[0-9.]*<\/farm_limit>/);
            this.farm_limit = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
            matches = content.match(/<church>[0-9.]*<\/church>/);
            this.church = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
            matches = content.match(/<watchtower>[0-9.]*<\/watchtower>/);
            this.watchtower = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
            matches = content.match(/<fake_limit>[0-9.]*<\/fake_limit>/);
            this.fake_limit = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
            matches = content.match(/<base_production>[0-9.]*<\/base_production>/);
            this.base_production = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
            matches = content.match(/<gold>[0-9.]*<\/gold>/);
            this.snob_gold = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
            matches = content.match(/<cheap_rebuild>[0-9.]*<\/cheap_rebuild>/);
            this.snob_cheap_rebuild = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
            matches = content.match(/<simple>[0-9.]*<\/simple>/);
            this.snob_simple = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
            matches = content.match(/<rise>[0-9.]*<\/rise>/);
            this.snob_rise = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
            matches = content.match(/<max_dist>[0-9.]*<\/max_dist>/);
            this.snob_max_dist = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
            matches = content.match(/<factor>[0-9.]*<\/factor>/);
            this.snob_factor = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
            matches = content.match(/<coin_wood>[0-9.]*<\/coin_wood>/);
            this.snob_coin_wood = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
            matches = content.match(/<coin_stone>[0-9.]*<\/coin_stone>/);
            this.snob_coin_stone = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
            matches = content.match(/<coin_iron>[0-9.]*<\/coin_iron>/);
            this.snob_coin_iron = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
            matches = content.match(/<bonus_villages>[0-9.]*<\/bonus_villages>/);
            this.bonus_villages = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
            content = content.substr(content.indexOf('<night>'));
            matches = content.match(/<active>[0-9.]*<\/active>/);
            this.night_active = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
            matches = content.match(/<start_hour>[0-9.]*<\/start_hour>/);
            this.night_start_hour = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
            matches = content.match(/<end_hour>[0-9.]*<\/end_hour>/);
            this.night_end_hour = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
            matches = content.match(/<def_factor>[0-9.]*<\/def_factor>/);
            this.night_def_factor = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
        },
        readFromFile : function ($path) {
            Logger.log(Logger.LogLevel.INFO, "Reading world config from file...", "readFromFile()", "database/WorldConfig.js");
            try {
                var fs = require('fs');
                var stream  = fs.open($path, 'r');

                while(!stream.atEnd()) {
                    var line = stream.readLine();
                    switch (line.substring(0, line.indexOf(" "))) {
                        case "speed":
                            this.speed = line.substring(line.indexOf("=") + 2);
                            break;
                        case "unit_speed":
                            this.unit_speed = line.substring(line.indexOf("=") + 2);
                            break;
                        case "moral":
                            this.moral = line.substring(line.indexOf("=") + 2);
                            break;
                        case "build_destroy":
                            this.build_destroy = line.substring(line.indexOf("=") + 2);
                            break;
                        case "trade_cancel_time":
                            this.trade_cancel_time = line.substring(line.indexOf("=") + 2);
                            break;
                        case "command_millis_arrival":
                            this.command_millis_arrival = line.substring(line.indexOf("=") + 2);
                            break;
                        case "command_cancel_time":
                            this.command_cancel_time = line.substring(line.indexOf("=") + 2);
                            break;
                        case "newbie_days":
                            this.newbie_days = line.substring(line.indexOf("=") + 2);
                            break;
                        case "game_base_config":
                            this.game_base_config = line.substring(line.indexOf("=") + 2);
                            break;
                        case "new_buildtime_formula":
                            this.new_buildtime_formula = line.substring(line.indexOf("=") + 2);
                            break;
                        case "knight":
                            this.knight = line.substring(line.indexOf("=") + 2);
                            break;
                        case "archer":
                            this.archer = line.substring(line.indexOf("=") + 2);
                            break;
                        case "tech":
                            this.tech = line.substring(line.indexOf("=") + 2);
                            break;
                        case "spy":
                            this.spy = line.substring(line.indexOf("=") + 2);
                            break;
                        case "farm_limit":
                            this.farm_limit = line.substring(line.indexOf("=") + 2);
                            break;
                        case "church":
                            this.church = line.substring(line.indexOf("=") + 2);
                            break;
                        case "watchtower":
                            this.watchtower = line.substring(line.indexOf("=") + 2);
                            break;
                        case "fake_limit":
                            this.fake_limit = line.substring(line.indexOf("=") + 2);
                            break;
                        case "base_production":
                            this.base_production = line.substring(line.indexOf("=") + 2);
                            break;
                        case "snob_gold":
                            this.snob_gold = line.substring(line.indexOf("=") + 2);
                            break;
                        case "snob_cheap_rebuild":
                            this.snob_cheap_rebuild = line.substring(line.indexOf("=") + 2);
                            break;
                        case "snob_simple":
                            this.snob_simple = line.substring(line.indexOf("=") + 2);
                            break;
                        case "snob_rise":
                            this.snob_rise = line.substring(line.indexOf("=") + 2);
                            break;
                        case "snob_max_dist":
                            this.snob_max_dist = line.substring(line.indexOf("=") + 2);
                            break;
                        case "snob_factor":
                            this.snob_factor = line.substring(line.indexOf("=") + 2);
                            break;
                        case "snob_coin_wood":
                            this.snob_coin_wood = line.substring(line.indexOf("=") + 2);
                            break;
                        case "snob_coin_stone":
                            this.snob_coin_stone = line.substring(line.indexOf("=") + 2);
                            break;
                        case "snob_coin_iron":
                            this.snob_coin_iron = line.substring(line.indexOf("=") + 2);
                            break;
                        case "bonus_villages":
                            this.bonus_villages = line.substring(line.indexOf("=") + 2);
                            break;
                        case "night_active":
                            this.night_active = line.substring(line.indexOf("=") + 2);
                            break;
                        case "night_start_hour":
                            this.night_start_hour = line.substring(line.indexOf("=") + 2);
                            break;
                        case "night_end_hour":
                            this.night_end_hour = line.substring(line.indexOf("=") + 2);
                            break;
                        case "night_def_factor":
                            this.night_def_factor = line.substring(line.indexOf("=") + 2);
                            break;
                        case "lastDatabaseUpdateDate":
                            this.lastDatabaseUpdateDate = line.substring(line.indexOf("=") + 2);
                            break;
                        case "declarePlayerAsFarmInterval":
                            this.declarePlayerAsFarmInterval = line.substring(line.indexOf("=") + 2);
                            break;
                        case "databaseUpdateInterval":
                            this.databaseUpdateInterval = line.substring(line.indexOf("=") + 2);
                            break;
                    }
                }

                stream.close();
            } catch (err) {
                Logger.log(Logger.LogLevel.WARNING, err.name + "->" + err.message, "readFromFile()", "database/WorldConfig.js");
            }
        },
        writeToFile : function ($path) {
            Logger.log(Logger.LogLevel.INFO, "Writing world config to file...", "writeToFile()", "database/WorldConfig.js");
            try {
                var fs = require('fs');
                var stream = fs.open($path, 'w');

                stream.writeLine('speed = ' + this.speed);
                stream.writeLine('unit_speed = ' + this.unit_speed);
                stream.writeLine('moral = ' + this.moral);
                stream.writeLine('build_destroy = ' + this.build_destroy);
                stream.writeLine('trade_cancel_time = ' + this.trade_cancel_time);
                stream.writeLine('command_millis_arrival = ' + this.command_millis_arrival);
                stream.writeLine('command_cancel_time = ' + this.command_cancel_time);
                stream.writeLine('newbie_days = ' + this.newbie_days);
                stream.writeLine('game_base_config = ' + this.game_base_config);
                stream.writeLine('new_buildtime_formula = ' + this.new_buildtime_formula);
                stream.writeLine('knight = ' + this.knight);
                stream.writeLine('archer = ' + this.archer);
                stream.writeLine('tech = ' + this.tech);
                stream.writeLine('spy = ' + this.spy);
                stream.writeLine('farm_limit = ' + this.farm_limit);
                stream.writeLine('church = ' + this.church);
                stream.writeLine('watchtower = ' + this.watchtower);
                stream.writeLine('fake_limit = ' + this.fake_limit);
                stream.writeLine('base_production = ' + this.base_production);
                stream.writeLine('snob_gold = ' + this.snob_gold);
                stream.writeLine('snob_cheap_rebuild = ' + this.snob_cheap_rebuild);
                stream.writeLine('snob_simple = ' + this.snob_simple);
                stream.writeLine('snob_rise = ' + this.snob_rise);
                stream.writeLine('snob_max_dist = ' + this.snob_max_dist);
                stream.writeLine('snob_factor = ' + this.snob_factor);
                stream.writeLine('snob_coin_wood = ' + this.snob_coin_wood);
                stream.writeLine('snob_coin_stone = ' + this.snob_coin_stone);
                stream.writeLine('snob_coin_iron = ' + this.snob_coin_iron);
                stream.writeLine('bonus_villages = ' + this.bonus_villages);
                stream.writeLine('night_active = ' + this.night_active);
                stream.writeLine('night_start_hour = ' + this.night_start_hour);
                stream.writeLine('night_end_hour = ' + this.night_end_hour);
                stream.writeLine('night_def_factor = ' + this.night_def_factor);
                stream.writeLine('lastDatabaseUpdateDate = ' + this.lastDatabaseUpdateDate);
                stream.writeLine('declarePlayerAsFarmInterval = ' + this.declarePlayerAsFarmInterval);
                stream.writeLine('databaseUpdateInterval = ' + this.databaseUpdateInterval);

                stream.close();
            } catch (err) {
                Logger.log(Logger.LogLevel.WARNING, err.name + "->" + err.message, "writeToFile()", "database/WorldConfig.js");
            }
        }
    };