Logger.log(Logger.LogLevel.DEBUG, "Loading database/BuildingInfo.js", "()", "database/BuildingInfo.js");

var BuildingInfo = BuildingInfo || {
        //<editor-fold desc="Fields">
        main_max_level : 0,
        main_min_level : 0,
        main_wood : 0,
        main_stone : 0,
        main_iron : 0,
        main_pop : 0,
        main_wood_factor : 0,
        main_stone_factor : 0,
        main_iron_factor : 0,
        main_pop_factor : 0,
        main_build_time : 0,
        main_build_time_factor : 0,

        barracks_max_level : 0,
        barracks_min_level : 0,
        barracks_wood : 0,
        barracks_stone : 0,
        barracks_iron : 0,
        barracks_pop : 0,
        barracks_wood_factor : 0,
        barracks_stone_factor : 0,
        barracks_iron_factor : 0,
        barracks_pop_factor : 0,
        barracks_build_time : 0,
        barracks_build_time_factor : 0,

        stable_max_level : 0,
        stable_min_level : 0,
        stable_wood : 0,
        stable_stone : 0,
        stable_iron : 0,
        stable_pop : 0,
        stable_wood_factor : 0,
        stable_stone_factor : 0,
        stable_iron_factor : 0,
        stable_pop_factor : 0,
        stable_build_time : 0,
        stable_build_time_factor : 0,

        garage_max_level : 0,
        garage_min_level : 0,
        garage_wood : 0,
        garage_stone : 0,
        garage_iron : 0,
        garage_pop : 0,
        garage_wood_factor : 0,
        garage_stone_factor : 0,
        garage_iron_factor : 0,
        garage_pop_factor : 0,
        garage_build_time : 0,
        garage_build_time_factor : 0,

        church_max_level : 0,
        church_min_level : 0,
        church_wood : 0,
        church_stone : 0,
        church_iron : 0,
        church_pop : 0,
        church_wood_factor : 0,
        church_stone_factor : 0,
        church_iron_factor : 0,
        church_pop_factor : 0,
        church_build_time : 0,
        church_build_time_factor : 0,

        church_f_max_level : 0,
        church_f_min_level : 0,
        church_f_wood : 0,
        church_f_stone : 0,
        church_f_iron : 0,
        church_f_pop : 0,
        church_f_wood_factor : 0,
        church_f_stone_factor : 0,
        church_f_iron_factor : 0,
        church_f_pop_factor : 0,
        church_f_build_time : 0,
        church_f_build_time_factor : 0,

        snob_max_level : 0,
        snob_min_level : 0,
        snob_wood : 0,
        snob_stone : 0,
        snob_iron : 0,
        snob_pop : 0,
        snob_wood_factor : 0,
        snob_stone_factor : 0,
        snob_iron_factor : 0,
        snob_pop_factor : 0,
        snob_build_time : 0,
        snob_build_time_factor : 0,

        smith_max_level : 0,
        smith_min_level : 0,
        smith_wood : 0,
        smith_stone : 0,
        smith_iron : 0,
        smith_pop : 0,
        smith_wood_factor : 0,
        smith_stone_factor : 0,
        smith_iron_factor : 0,
        smith_pop_factor : 0,
        smith_build_time : 0,
        smith_build_time_factor : 0,

        place_max_level : 0,
        place_min_level : 0,
        place_wood : 0,
        place_stone : 0,
        place_iron : 0,
        place_pop : 0,
        place_wood_factor : 0,
        place_stone_factor : 0,
        place_iron_factor : 0,
        place_pop_factor : 0,
        place_build_time : 0,
        place_build_time_factor : 0,

        statue_max_level : 0,
        statue_min_level : 0,
        statue_wood : 0,
        statue_stone : 0,
        statue_iron : 0,
        statue_pop : 0,
        statue_wood_factor : 0,
        statue_stone_factor : 0,
        statue_iron_factor : 0,
        statue_pop_factor : 0,
        statue_build_time : 0,
        statue_build_time_factor : 0,

        market_max_level : 0,
        market_min_level : 0,
        market_wood : 0,
        market_stone : 0,
        market_iron : 0,
        market_pop : 0,
        market_wood_factor : 0,
        market_stone_factor : 0,
        market_iron_factor : 0,
        market_pop_factor : 0,
        market_build_time : 0,
        market_build_time_factor : 0,

        wood_max_level : 0,
        wood_min_level : 0,
        wood_wood : 0,
        wood_stone : 0,
        wood_iron : 0,
        wood_pop : 0,
        wood_wood_factor : 0,
        wood_stone_factor : 0,
        wood_iron_factor : 0,
        wood_pop_factor : 0,
        wood_build_time : 0,
        wood_build_time_factor : 0,

        stone_max_level : 0,
        stone_min_level : 0,
        stone_wood : 0,
        stone_stone : 0,
        stone_iron : 0,
        stone_pop : 0,
        stone_wood_factor : 0,
        stone_stone_factor : 0,
        stone_iron_factor : 0,
        stone_pop_factor : 0,
        stone_build_time : 0,
        stone_build_time_factor : 0,

        iron_max_level : 0,
        iron_min_level : 0,
        iron_wood : 0,
        iron_stone : 0,
        iron_iron : 0,
        iron_pop : 0,
        iron_wood_factor : 0,
        iron_stone_factor : 0,
        iron_iron_factor : 0,
        iron_pop_factor : 0,
        iron_build_time : 0,
        iron_build_time_factor : 0,

        farm_max_level : 0,
        farm_min_level : 0,
        farm_wood : 0,
        farm_stone : 0,
        farm_iron : 0,
        farm_pop : 0,
        farm_wood_factor : 0,
        farm_stone_factor : 0,
        farm_iron_factor : 0,
        farm_pop_factor : 0,
        farm_build_time : 0,
        farm_build_time_factor : 0,

        storage_max_level : 0,
        storage_min_level : 0,
        storage_wood : 0,
        storage_stone : 0,
        storage_iron : 0,
        storage_pop : 0,
        storage_wood_factor : 0,
        storage_stone_factor : 0,
        storage_iron_factor : 0,
        storage_pop_factor : 0,
        storage_build_time : 0,
        storage_build_time_factor : 0,

        hide_max_level : 0,
        hide_min_level : 0,
        hide_wood : 0,
        hide_stone : 0,
        hide_iron : 0,
        hide_pop : 0,
        hide_wood_factor : 0,
        hide_stone_factor : 0,
        hide_iron_factor : 0,
        hide_pop_factor : 0,
        hide_build_time : 0,
        hide_build_time_factor : 0,

        wall_max_level : 0,
        wall_min_level : 0,
        wall_wood : 0,
        wall_stone : 0,
        wall_iron : 0,
        wall_pop : 0,
        wall_wood_factor : 0,
        wall_stone_factor : 0,
        wall_iron_factor : 0,
        wall_pop_factor : 0,
        wall_build_time : 0,
        wall_build_time_factor : 0,
        //</editor-fold>

        downloadFromWeb : function($dsWorld) {
            Logger.log(Logger.LogLevel.INFO, "Downloading building info...", "downloadFromWeb()", "database/BuildingInfo.js");
            page.open('https://' + $dsWorld + '.die-staemme.de/interface.php?func=get_building_info');
            phantom.waitFor(function() {return !page.loading;});
            var content = page.content;

            //<editor-fold desc="Main">
            var matches = content.match(/<max_level>[0-9.]*<\/max_level>/);
            this.main_max_level = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
            matches = content.match(/<min_level>[0-9.]*<\/min_level>/);
            this.main_min_level = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
            matches = content.match(/<wood>[0-9.]*<\/wood>/);
            this.main_wood = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
            matches = content.match(/<stone>[0-9.]*<\/stone>/);
            this.main_stone = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
            matches = content.match(/<iron>[0-9.]*<\/iron>/);
            this.main_iron = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
            matches = content.match(/<pop>[0-9.]*<\/pop>/);
            this.main_pop = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
            matches = content.match(/<wood_factor>[0-9.]*<\/wood_factor>/);
            this.main_wood_factor = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
            matches = content.match(/<stone_factor>[0-9.]*<\/stone_factor>/);
            this.main_stone_factor = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
            matches = content.match(/<iron_factor>[0-9.]*<\/iron_factor>/);
            this.main_iron_factor = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
            matches = content.match(/<pop_factor>[0-9.]*<\/pop_factor>/);
            this.main_pop_factor = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
            matches = content.match(/<build_time>[0-9.]*<\/build_time>/);
            this.main_build_time = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
            matches = content.match(/<build_time_factor>[0-9.]*<\/build_time_factor>/);
            this.main_build_time_factor = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
            //</editor-fold>

            //<editor-fold desc="Barracks">
            content = content.substr(content.indexOf('<barracks>'));
            matches = content.match(/<max_level>[0-9.]*<\/max_level>/);
            this.barracks_max_level = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
            matches = content.match(/<min_level>[0-9.]*<\/min_level>/);
            this.barracks_min_level = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
            matches = content.match(/<wood>[0-9.]*<\/wood>/);
            this.barracks_wood = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
            matches = content.match(/<stone>[0-9.]*<\/stone>/);
            this.barracks_stone = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
            matches = content.match(/<iron>[0-9.]*<\/iron>/);
            this.barracks_iron = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
            matches = content.match(/<pop>[0-9.]*<\/pop>/);
            this.barracks_pop = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
            matches = content.match(/<wood_factor>[0-9.]*<\/wood_factor>/);
            this.barracks_wood_factor = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
            matches = content.match(/<stone_factor>[0-9.]*<\/stone_factor>/);
            this.barracks_stone_factor = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
            matches = content.match(/<iron_factor>[0-9.]*<\/iron_factor>/);
            this.barracks_iron_factor = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
            matches = content.match(/<pop_factor>[0-9.]*<\/pop_factor>/);
            this.barracks_pop_factor = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
            matches = content.match(/<build_time>[0-9.]*<\/build_time>/);
            this.barracks_build_time = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
            matches = content.match(/<build_time_factor>[0-9.]*<\/build_time_factor>/);
            this.barracks_build_time_factor = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
            //</editor-fold>

            //<editor-fold desc="Stable">
            content = content.substr(content.indexOf('<stable>'));
            matches = content.match(/<max_level>[0-9.]*<\/max_level>/);
            this.stable_max_level = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
            matches = content.match(/<min_level>[0-9.]*<\/min_level>/);
            this.stable_min_level = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
            matches = content.match(/<wood>[0-9.]*<\/wood>/);
            this.stable_wood = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
            matches = content.match(/<stone>[0-9.]*<\/stone>/);
            this.stable_stone = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
            matches = content.match(/<iron>[0-9.]*<\/iron>/);
            this.stable_iron = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
            matches = content.match(/<pop>[0-9.]*<\/pop>/);
            this.stable_pop = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
            matches = content.match(/<wood_factor>[0-9.]*<\/wood_factor>/);
            this.stable_wood_factor = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
            matches = content.match(/<stone_factor>[0-9.]*<\/stone_factor>/);
            this.stable_stone_factor = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
            matches = content.match(/<iron_factor>[0-9.]*<\/iron_factor>/);
            this.stable_iron_factor = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
            matches = content.match(/<pop_factor>[0-9.]*<\/pop_factor>/);
            this.stable_pop_factor = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
            matches = content.match(/<build_time>[0-9.]*<\/build_time>/);
            this.stable_build_time = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
            matches = content.match(/<build_time_factor>[0-9.]*<\/build_time_factor>/);
            this.stable_build_time_factor = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
            //</editor-fold>

            //<editor-fold desc="Garage">
            content = content.substr(content.indexOf('<garage>'));
            matches = content.match(/<max_level>[0-9.]*<\/max_level>/);
            this.garage_max_level = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
            matches = content.match(/<min_level>[0-9.]*<\/min_level>/);
            this.garage_min_level = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
            matches = content.match(/<wood>[0-9.]*<\/wood>/);
            this.garage_wood = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
            matches = content.match(/<stone>[0-9.]*<\/stone>/);
            this.garage_stone = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
            matches = content.match(/<iron>[0-9.]*<\/iron>/);
            this.garage_iron = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
            matches = content.match(/<pop>[0-9.]*<\/pop>/);
            this.garage_pop = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
            matches = content.match(/<wood_factor>[0-9.]*<\/wood_factor>/);
            this.garage_wood_factor = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
            matches = content.match(/<stone_factor>[0-9.]*<\/stone_factor>/);
            this.garage_stone_factor = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
            matches = content.match(/<iron_factor>[0-9.]*<\/iron_factor>/);
            this.garage_iron_factor = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
            matches = content.match(/<pop_factor>[0-9.]*<\/pop_factor>/);
            this.garage_pop_factor = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
            matches = content.match(/<build_time>[0-9.]*<\/build_time>/);
            this.garage_build_time = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
            matches = content.match(/<build_time_factor>[0-9.]*<\/build_time_factor>/);
            this.garage_build_time_factor = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
            //</editor-fold>
            
            //<editor-fold desc="Church">
            if (WorldConfig.church != 0) {
                content = content.substr(content.indexOf('<church>'));
                matches = content.match(/<max_level>[0-9.]*<\/max_level>/);
                this.church_max_level = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
                matches = content.match(/<min_level>[0-9.]*<\/min_level>/);
                this.church_min_level = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
                matches = content.match(/<wood>[0-9.]*<\/wood>/);
                this.church_wood = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
                matches = content.match(/<stone>[0-9.]*<\/stone>/);
                this.church_stone = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
                matches = content.match(/<iron>[0-9.]*<\/iron>/);
                this.church_iron = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
                matches = content.match(/<pop>[0-9.]*<\/pop>/);
                this.church_pop = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
                matches = content.match(/<wood_factor>[0-9.]*<\/wood_factor>/);
                this.church_wood_factor = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
                matches = content.match(/<stone_factor>[0-9.]*<\/stone_factor>/);
                this.church_stone_factor = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
                matches = content.match(/<iron_factor>[0-9.]*<\/iron_factor>/);
                this.church_iron_factor = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
                matches = content.match(/<pop_factor>[0-9.]*<\/pop_factor>/);
                this.church_pop_factor = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
                matches = content.match(/<build_time>[0-9.]*<\/build_time>/);
                this.church_build_time = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
                matches = content.match(/<build_time_factor>[0-9.]*<\/build_time_factor>/);
                this.church_build_time_factor = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
            }
            //</editor-fold>

            //<editor-fold desc="First Church">
            if (WorldConfig.church != 0) {
                content = content.substr(content.indexOf('<church_f>'));
                matches = content.match(/<max_level>[0-9.]*<\/max_level>/);
                this.church_f_max_level = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
                matches = content.match(/<min_level>[0-9.]*<\/min_level>/);
                this.church_f_min_level = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
                matches = content.match(/<wood>[0-9.]*<\/wood>/);
                this.church_f_wood = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
                matches = content.match(/<stone>[0-9.]*<\/stone>/);
                this.church_f_stone = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
                matches = content.match(/<iron>[0-9.]*<\/iron>/);
                this.church_f_iron = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
                matches = content.match(/<pop>[0-9.]*<\/pop>/);
                this.church_f_pop = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
                matches = content.match(/<wood_factor>[0-9.]*<\/wood_factor>/);
                this.church_f_wood_factor = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
                matches = content.match(/<stone_factor>[0-9.]*<\/stone_factor>/);
                this.church_f_stone_factor = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
                matches = content.match(/<iron_factor>[0-9.]*<\/iron_factor>/);
                this.church_f_iron_factor = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
                matches = content.match(/<pop_factor>[0-9.]*<\/pop_factor>/);
                this.church_f_pop_factor = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
                matches = content.match(/<build_time>[0-9.]*<\/build_time>/);
                this.church_f_build_time = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
                matches = content.match(/<build_time_factor>[0-9.]*<\/build_time_factor>/);
                this.church_f_build_time_factor = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
            }
            //</editor-fold>

            //<editor-fold desc="Snob">
            content = content.substr(content.indexOf('<snob>'));
            matches = content.match(/<max_level>[0-9.]*<\/max_level>/);
            this.snob_max_level = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
            matches = content.match(/<min_level>[0-9.]*<\/min_level>/);
            this.snob_min_level = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
            matches = content.match(/<wood>[0-9.]*<\/wood>/);
            this.snob_wood = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
            matches = content.match(/<stone>[0-9.]*<\/stone>/);
            this.snob_stone = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
            matches = content.match(/<iron>[0-9.]*<\/iron>/);
            this.snob_iron = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
            matches = content.match(/<pop>[0-9.]*<\/pop>/);
            this.snob_pop = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
            matches = content.match(/<wood_factor>[0-9.]*<\/wood_factor>/);
            this.snob_wood_factor = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
            matches = content.match(/<stone_factor>[0-9.]*<\/stone_factor>/);
            this.snob_stone_factor = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
            matches = content.match(/<iron_factor>[0-9.]*<\/iron_factor>/);
            this.snob_iron_factor = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
            matches = content.match(/<pop_factor>[0-9.]*<\/pop_factor>/);
            this.snob_pop_factor = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
            matches = content.match(/<build_time>[0-9.]*<\/build_time>/);
            this.snob_build_time = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
            matches = content.match(/<build_time_factor>[0-9.]*<\/build_time_factor>/);
            this.snob_build_time_factor = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
            //</editor-fold>

            //<editor-fold desc="Smith">
            content = content.substr(content.indexOf('<smith>'));
            matches = content.match(/<max_level>[0-9.]*<\/max_level>/);
            this.smith_max_level = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
            matches = content.match(/<min_level>[0-9.]*<\/min_level>/);
            this.smith_min_level = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
            matches = content.match(/<wood>[0-9.]*<\/wood>/);
            this.smith_wood = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
            matches = content.match(/<stone>[0-9.]*<\/stone>/);
            this.smith_stone = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
            matches = content.match(/<iron>[0-9.]*<\/iron>/);
            this.smith_iron = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
            matches = content.match(/<pop>[0-9.]*<\/pop>/);
            this.smith_pop = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
            matches = content.match(/<wood_factor>[0-9.]*<\/wood_factor>/);
            this.smith_wood_factor = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
            matches = content.match(/<stone_factor>[0-9.]*<\/stone_factor>/);
            this.smith_stone_factor = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
            matches = content.match(/<iron_factor>[0-9.]*<\/iron_factor>/);
            this.smith_iron_factor = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
            matches = content.match(/<pop_factor>[0-9.]*<\/pop_factor>/);
            this.smith_pop_factor = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
            matches = content.match(/<build_time>[0-9.]*<\/build_time>/);
            this.smith_build_time = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
            matches = content.match(/<build_time_factor>[0-9.]*<\/build_time_factor>/);
            this.smith_build_time_factor = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
            //</editor-fold>

            //<editor-fold desc="Place">
            content = content.substr(content.indexOf('<place>'));
            matches = content.match(/<max_level>[0-9.]*<\/max_level>/);
            this.place_max_level = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
            matches = content.match(/<min_level>[0-9.]*<\/min_level>/);
            this.place_min_level = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
            matches = content.match(/<wood>[0-9.]*<\/wood>/);
            this.place_wood = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
            matches = content.match(/<stone>[0-9.]*<\/stone>/);
            this.place_stone = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
            matches = content.match(/<iron>[0-9.]*<\/iron>/);
            this.place_iron = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
            matches = content.match(/<pop>[0-9.]*<\/pop>/);
            this.place_pop = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
            matches = content.match(/<wood_factor>[0-9.]*<\/wood_factor>/);
            this.place_wood_factor = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
            matches = content.match(/<stone_factor>[0-9.]*<\/stone_factor>/);
            this.place_stone_factor = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
            matches = content.match(/<iron_factor>[0-9.]*<\/iron_factor>/);
            this.place_iron_factor = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
            matches = content.match(/<pop_factor>[0-9.]*<\/pop_factor>/);
            this.place_pop_factor = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
            matches = content.match(/<build_time>[0-9.]*<\/build_time>/);
            this.place_build_time = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
            matches = content.match(/<build_time_factor>[0-9.]*<\/build_time_factor>/);
            this.place_build_time_factor = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
            //</editor-fold>

            //<editor-fold desc="Statue">
            if (WorldConfig.knight != 0) {
                content = content.substr(content.indexOf('<statue>'));
                matches = content.match(/<max_level>[0-9.]*<\/max_level>/);
                this.statue_max_level = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
                matches = content.match(/<min_level>[0-9.]*<\/min_level>/);
                this.statue_min_level = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
                matches = content.match(/<wood>[0-9.]*<\/wood>/);
                this.statue_wood = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
                matches = content.match(/<stone>[0-9.]*<\/stone>/);
                this.statue_stone = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
                matches = content.match(/<iron>[0-9.]*<\/iron>/);
                this.statue_iron = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
                matches = content.match(/<pop>[0-9.]*<\/pop>/);
                this.statue_pop = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
                matches = content.match(/<wood_factor>[0-9.]*<\/wood_factor>/);
                this.statue_wood_factor = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
                matches = content.match(/<stone_factor>[0-9.]*<\/stone_factor>/);
                this.statue_stone_factor = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
                matches = content.match(/<iron_factor>[0-9.]*<\/iron_factor>/);
                this.statue_iron_factor = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
                matches = content.match(/<pop_factor>[0-9.]*<\/pop_factor>/);
                this.statue_pop_factor = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
                matches = content.match(/<build_time>[0-9.]*<\/build_time>/);
                this.statue_build_time = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
                matches = content.match(/<build_time_factor>[0-9.]*<\/build_time_factor>/);
                this.statue_build_time_factor = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
            }
            //</editor-fold>

            //<editor-fold desc="Market">
            content = content.substr(content.indexOf('<market>'));
            matches = content.match(/<max_level>[0-9.]*<\/max_level>/);
            this.market_max_level = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
            matches = content.match(/<min_level>[0-9.]*<\/min_level>/);
            this.market_min_level = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
            matches = content.match(/<wood>[0-9.]*<\/wood>/);
            this.market_wood = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
            matches = content.match(/<stone>[0-9.]*<\/stone>/);
            this.market_stone = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
            matches = content.match(/<iron>[0-9.]*<\/iron>/);
            this.market_iron = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
            matches = content.match(/<pop>[0-9.]*<\/pop>/);
            this.market_pop = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
            matches = content.match(/<wood_factor>[0-9.]*<\/wood_factor>/);
            this.market_wood_factor = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
            matches = content.match(/<stone_factor>[0-9.]*<\/stone_factor>/);
            this.market_stone_factor = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
            matches = content.match(/<iron_factor>[0-9.]*<\/iron_factor>/);
            this.market_iron_factor = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
            matches = content.match(/<pop_factor>[0-9.]*<\/pop_factor>/);
            this.market_pop_factor = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
            matches = content.match(/<build_time>[0-9.]*<\/build_time>/);
            this.market_build_time = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
            matches = content.match(/<build_time_factor>[0-9.]*<\/build_time_factor>/);
            this.market_build_time_factor = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
            //</editor-fold>

            //<editor-fold desc="Wood">
            content = content.substr(content.indexOf('<wood>') + 2);
            content = content.substr(content.indexOf('<wood>'));
            matches = content.match(/<max_level>[0-9.]*<\/max_level>/);
            this.wood_max_level = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
            matches = content.match(/<min_level>[0-9.]*<\/min_level>/);
            this.wood_min_level = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
            matches = content.match(/<wood>[0-9.]*<\/wood>/);
            this.wood_wood = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
            matches = content.match(/<stone>[0-9.]*<\/stone>/);
            this.wood_stone = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
            matches = content.match(/<iron>[0-9.]*<\/iron>/);
            this.wood_iron = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
            matches = content.match(/<pop>[0-9.]*<\/pop>/);
            this.wood_pop = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
            matches = content.match(/<wood_factor>[0-9.]*<\/wood_factor>/);
            this.wood_wood_factor = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
            matches = content.match(/<stone_factor>[0-9.]*<\/stone_factor>/);
            this.wood_stone_factor = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
            matches = content.match(/<iron_factor>[0-9.]*<\/iron_factor>/);
            this.wood_iron_factor = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
            matches = content.match(/<pop_factor>[0-9.]*<\/pop_factor>/);
            this.wood_pop_factor = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
            matches = content.match(/<build_time>[0-9.]*<\/build_time>/);
            this.wood_build_time = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
            matches = content.match(/<build_time_factor>[0-9.]*<\/build_time_factor>/);
            this.wood_build_time_factor = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
            //</editor-fold>

            //<editor-fold desc="Stone">
            content = content.substr(content.indexOf('<stone>') + 2);
            content = content.substr(content.indexOf('<stone>'));
            matches = content.match(/<max_level>[0-9.]*<\/max_level>/);
            this.stone_max_level = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
            matches = content.match(/<min_level>[0-9.]*<\/min_level>/);
            this.stone_min_level = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
            matches = content.match(/<wood>[0-9.]*<\/wood>/);
            this.stone_wood = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
            matches = content.match(/<stone>[0-9.]*<\/stone>/);
            this.stone_stone = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
            matches = content.match(/<iron>[0-9.]*<\/iron>/);
            this.stone_iron = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
            matches = content.match(/<pop>[0-9.]*<\/pop>/);
            this.stone_pop = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
            matches = content.match(/<wood_factor>[0-9.]*<\/wood_factor>/);
            this.stone_wood_factor = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
            matches = content.match(/<stone_factor>[0-9.]*<\/stone_factor>/);
            this.stone_stone_factor = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
            matches = content.match(/<iron_factor>[0-9.]*<\/iron_factor>/);
            this.stone_iron_factor = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
            matches = content.match(/<pop_factor>[0-9.]*<\/pop_factor>/);
            this.stone_pop_factor = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
            matches = content.match(/<build_time>[0-9.]*<\/build_time>/);
            this.stone_build_time = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
            matches = content.match(/<build_time_factor>[0-9.]*<\/build_time_factor>/);
            this.stone_build_time_factor = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
            //</editor-fold>

            //<editor-fold desc="Iron">
            content = content.substr(content.indexOf('<iron>') + 2);
            content = content.substr(content.indexOf('<iron>'));
            matches = content.match(/<max_level>[0-9.]*<\/max_level>/);
            this.iron_max_level = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
            matches = content.match(/<min_level>[0-9.]*<\/min_level>/);
            this.iron_min_level = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
            matches = content.match(/<wood>[0-9.]*<\/wood>/);
            this.iron_wood = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
            matches = content.match(/<stone>[0-9.]*<\/stone>/);
            this.iron_stone = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
            matches = content.match(/<iron>[0-9.]*<\/iron>/);
            this.iron_iron = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
            matches = content.match(/<pop>[0-9.]*<\/pop>/);
            this.iron_pop = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
            matches = content.match(/<wood_factor>[0-9.]*<\/wood_factor>/);
            this.iron_wood_factor = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
            matches = content.match(/<stone_factor>[0-9.]*<\/stone_factor>/);
            this.iron_stone_factor = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
            matches = content.match(/<iron_factor>[0-9.]*<\/iron_factor>/);
            this.iron_iron_factor = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
            matches = content.match(/<pop_factor>[0-9.]*<\/pop_factor>/);
            this.iron_pop_factor = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
            matches = content.match(/<build_time>[0-9.]*<\/build_time>/);
            this.iron_build_time = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
            matches = content.match(/<build_time_factor>[0-9.]*<\/build_time_factor>/);
            this.iron_build_time_factor = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
            //</editor-fold>

            //<editor-fold desc="Farm">
            content = content.substr(content.indexOf('<farm>'));
            matches = content.match(/<max_level>[0-9.]*<\/max_level>/);
            this.farm_max_level = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
            matches = content.match(/<min_level>[0-9.]*<\/min_level>/);
            this.farm_min_level = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
            matches = content.match(/<wood>[0-9.]*<\/wood>/);
            this.farm_wood = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
            matches = content.match(/<stone>[0-9.]*<\/stone>/);
            this.farm_stone = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
            matches = content.match(/<iron>[0-9.]*<\/iron>/);
            this.farm_iron = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
            matches = content.match(/<pop>[0-9.]*<\/pop>/);
            this.farm_pop = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
            matches = content.match(/<wood_factor>[0-9.]*<\/wood_factor>/);
            this.farm_wood_factor = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
            matches = content.match(/<stone_factor>[0-9.]*<\/stone_factor>/);
            this.farm_stone_factor = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
            matches = content.match(/<iron_factor>[0-9.]*<\/iron_factor>/);
            this.farm_iron_factor = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
            matches = content.match(/<pop_factor>[0-9.]*<\/pop_factor>/);
            this.farm_pop_factor = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
            matches = content.match(/<build_time>[0-9.]*<\/build_time>/);
            this.farm_build_time = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
            matches = content.match(/<build_time_factor>[0-9.]*<\/build_time_factor>/);
            this.farm_build_time_factor = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
            //</editor-fold>

            //<editor-fold desc="Storage">
            content = content.substr(content.indexOf('<storage>'));
            matches = content.match(/<max_level>[0-9.]*<\/max_level>/);
            this.storage_max_level = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
            matches = content.match(/<min_level>[0-9.]*<\/min_level>/);
            this.storage_min_level = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
            matches = content.match(/<wood>[0-9.]*<\/wood>/);
            this.storage_wood = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
            matches = content.match(/<stone>[0-9.]*<\/stone>/);
            this.storage_stone = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
            matches = content.match(/<iron>[0-9.]*<\/iron>/);
            this.storage_iron = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
            matches = content.match(/<pop>[0-9.]*<\/pop>/);
            this.storage_pop = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
            matches = content.match(/<wood_factor>[0-9.]*<\/wood_factor>/);
            this.storage_wood_factor = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
            matches = content.match(/<stone_factor>[0-9.]*<\/stone_factor>/);
            this.storage_stone_factor = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
            matches = content.match(/<iron_factor>[0-9.]*<\/iron_factor>/);
            this.storage_iron_factor = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
            matches = content.match(/<pop_factor>[0-9.]*<\/pop_factor>/);
            this.storage_pop_factor = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
            matches = content.match(/<build_time>[0-9.]*<\/build_time>/);
            this.storage_build_time = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
            matches = content.match(/<build_time_factor>[0-9.]*<\/build_time_factor>/);
            this.storage_build_time_factor = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
            //</editor-fold>

            //<editor-fold desc="Hide">
            content = content.substr(content.indexOf('<hide>'));
            matches = content.match(/<max_level>[0-9.]*<\/max_level>/);
            this.hide_max_level = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
            matches = content.match(/<min_level>[0-9.]*<\/min_level>/);
            this.hide_min_level = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
            matches = content.match(/<wood>[0-9.]*<\/wood>/);
            this.hide_wood = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
            matches = content.match(/<stone>[0-9.]*<\/stone>/);
            this.hide_stone = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
            matches = content.match(/<iron>[0-9.]*<\/iron>/);
            this.hide_iron = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
            matches = content.match(/<pop>[0-9.]*<\/pop>/);
            this.hide_pop = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
            matches = content.match(/<wood_factor>[0-9.]*<\/wood_factor>/);
            this.hide_wood_factor = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
            matches = content.match(/<stone_factor>[0-9.]*<\/stone_factor>/);
            this.hide_stone_factor = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
            matches = content.match(/<iron_factor>[0-9.]*<\/iron_factor>/);
            this.hide_iron_factor = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
            matches = content.match(/<pop_factor>[0-9.]*<\/pop_factor>/);
            this.hide_pop_factor = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
            matches = content.match(/<build_time>[0-9.]*<\/build_time>/);
            this.hide_build_time = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
            matches = content.match(/<build_time_factor>[0-9.]*<\/build_time_factor>/);
            this.hide_build_time_factor = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
            //</editor-fold>

            //<editor-fold desc="Wall">
            content = content.substr(content.indexOf('<wall>'));
            matches = content.match(/<max_level>[0-9.]*<\/max_level>/);
            this.wall_max_level = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
            matches = content.match(/<min_level>[0-9.]*<\/min_level>/);
            this.wall_min_level = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
            matches = content.match(/<wood>[0-9.]*<\/wood>/);
            this.wall_wood = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
            matches = content.match(/<stone>[0-9.]*<\/stone>/);
            this.wall_stone = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
            matches = content.match(/<iron>[0-9.]*<\/iron>/);
            this.wall_iron = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
            matches = content.match(/<pop>[0-9.]*<\/pop>/);
            this.wall_pop = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
            matches = content.match(/<wood_factor>[0-9.]*<\/wood_factor>/);
            this.wall_wood_factor = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
            matches = content.match(/<stone_factor>[0-9.]*<\/stone_factor>/);
            this.wall_stone_factor = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
            matches = content.match(/<iron_factor>[0-9.]*<\/iron_factor>/);
            this.wall_iron_factor = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
            matches = content.match(/<pop_factor>[0-9.]*<\/pop_factor>/);
            this.wall_pop_factor = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
            matches = content.match(/<build_time>[0-9.]*<\/build_time>/);
            this.wall_build_time = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
            matches = content.match(/<build_time_factor>[0-9.]*<\/build_time_factor>/);
            this.wall_build_time_factor = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
            //</editor-fold>
        },
        readFromFile : function ($path) {
            Logger.log(Logger.LogLevel.INFO, "Reading building info from file...", "readFromFile()", "database/BuildingInfo.js");
            try {
                var fs = require('fs');
                var stream  = fs.open($path, 'r');

                while(!stream.atEnd()) {
                    var line = stream.readLine();
                    switch (line.substring(0, line.indexOf(" "))) {
                        case "main_max_level":
                            this.main_max_level = line.substring(line.indexOf("=") + 2);
                            break;
                        case "main_min_level":
                            this.main_min_level = line.substring(line.indexOf("=") + 2);
                            break;
                        case "main_wood":
                            this.main_wood = line.substring(line.indexOf("=") + 2);
                            break;
                        case "main_stone":
                            this.main_stone = line.substring(line.indexOf("=") + 2);
                            break;
                        case "main_iron":
                            this.main_iron = line.substring(line.indexOf("=") + 2);
                            break;
                        case "main_pop":
                            this.main_pop = line.substring(line.indexOf("=") + 2);
                            break;
                        case "main_wood_factor":
                            this.main_wood_factor = line.substring(line.indexOf("=") + 2);
                            break;
                        case "main_stone_factor":
                            this.main_stone_factor = line.substring(line.indexOf("=") + 2);
                            break;
                        case "main_iron_factor":
                            this.main_iron_factor = line.substring(line.indexOf("=") + 2);
                            break;
                        case "main_pop_factor":
                            this.main_pop_factor = line.substring(line.indexOf("=") + 2);
                            break;
                        case "main_build_time":
                            this.main_build_time = line.substring(line.indexOf("=") + 2);
                            break;
                        case "main_build_time_factor":
                            this.main_build_time_factor = line.substring(line.indexOf("=") + 2);
                            break;
                        
                        case "barracks_max_level":
                            this.barracks_max_level = line.substring(line.indexOf("=") + 2);
                            break;
                        case "barracks_min_level":
                            this.barracks_min_level = line.substring(line.indexOf("=") + 2);
                            break;
                        case "barracks_wood":
                            this.barracks_wood = line.substring(line.indexOf("=") + 2);
                            break;
                        case "barracks_stone":
                            this.barracks_stone = line.substring(line.indexOf("=") + 2);
                            break;
                        case "barracks_iron":
                            this.barracks_iron = line.substring(line.indexOf("=") + 2);
                            break;
                        case "barracks_pop":
                            this.barracks_pop = line.substring(line.indexOf("=") + 2);
                            break;
                        case "barracks_wood_factor":
                            this.barracks_wood_factor = line.substring(line.indexOf("=") + 2);
                            break;
                        case "barracks_stone_factor":
                            this.barracks_stone_factor = line.substring(line.indexOf("=") + 2);
                            break;
                        case "barracks_iron_factor":
                            this.barracks_iron_factor = line.substring(line.indexOf("=") + 2);
                            break;
                        case "barracks_pop_factor":
                            this.barracks_pop_factor = line.substring(line.indexOf("=") + 2);
                            break;
                        case "barracks_build_time":
                            this.barracks_build_time = line.substring(line.indexOf("=") + 2);
                            break;
                        case "barracks_build_time_factor":
                            this.barracks_build_time_factor = line.substring(line.indexOf("=") + 2);
                            break;

                        case "stable_max_level":
                            this.stable_max_level = line.substring(line.indexOf("=") + 2);
                            break;
                        case "stable_min_level":
                            this.stable_min_level = line.substring(line.indexOf("=") + 2);
                            break;
                        case "stable_wood":
                            this.stable_wood = line.substring(line.indexOf("=") + 2);
                            break;
                        case "stable_stone":
                            this.stable_stone = line.substring(line.indexOf("=") + 2);
                            break;
                        case "stable_iron":
                            this.stable_iron = line.substring(line.indexOf("=") + 2);
                            break;
                        case "stable_pop":
                            this.stable_pop = line.substring(line.indexOf("=") + 2);
                            break;
                        case "stable_wood_factor":
                            this.stable_wood_factor = line.substring(line.indexOf("=") + 2);
                            break;
                        case "stable_stone_factor":
                            this.stable_stone_factor = line.substring(line.indexOf("=") + 2);
                            break;
                        case "stable_iron_factor":
                            this.stable_iron_factor = line.substring(line.indexOf("=") + 2);
                            break;
                        case "stable_pop_factor":
                            this.stable_pop_factor = line.substring(line.indexOf("=") + 2);
                            break;
                        case "stable_build_time":
                            this.stable_build_time = line.substring(line.indexOf("=") + 2);
                            break;
                        case "stable_build_time_factor":
                            this.stable_build_time_factor = line.substring(line.indexOf("=") + 2);
                            break;

                        case "garage_max_level":
                            this.garage_max_level = line.substring(line.indexOf("=") + 2);
                            break;
                        case "garage_min_level":
                            this.garage_min_level = line.substring(line.indexOf("=") + 2);
                            break;
                        case "garage_wood":
                            this.garage_wood = line.substring(line.indexOf("=") + 2);
                            break;
                        case "garage_stone":
                            this.garage_stone = line.substring(line.indexOf("=") + 2);
                            break;
                        case "garage_iron":
                            this.garage_iron = line.substring(line.indexOf("=") + 2);
                            break;
                        case "garage_pop":
                            this.garage_pop = line.substring(line.indexOf("=") + 2);
                            break;
                        case "garage_wood_factor":
                            this.garage_wood_factor = line.substring(line.indexOf("=") + 2);
                            break;
                        case "garage_stone_factor":
                            this.garage_stone_factor = line.substring(line.indexOf("=") + 2);
                            break;
                        case "garage_iron_factor":
                            this.garage_iron_factor = line.substring(line.indexOf("=") + 2);
                            break;
                        case "garage_pop_factor":
                            this.garage_pop_factor = line.substring(line.indexOf("=") + 2);
                            break;
                        case "garage_build_time":
                            this.garage_build_time = line.substring(line.indexOf("=") + 2);
                            break;
                        case "garage_build_time_factor":
                            this.garage_build_time_factor = line.substring(line.indexOf("=") + 2);
                            break;

                        case "church_max_level":
                            this.church_max_level = line.substring(line.indexOf("=") + 2);
                            break;
                        case "church_min_level":
                            this.church_min_level = line.substring(line.indexOf("=") + 2);
                            break;
                        case "church_wood":
                            this.church_wood = line.substring(line.indexOf("=") + 2);
                            break;
                        case "church_stone":
                            this.church_stone = line.substring(line.indexOf("=") + 2);
                            break;
                        case "church_iron":
                            this.church_iron = line.substring(line.indexOf("=") + 2);
                            break;
                        case "church_pop":
                            this.church_pop = line.substring(line.indexOf("=") + 2);
                            break;
                        case "church_wood_factor":
                            this.church_wood_factor = line.substring(line.indexOf("=") + 2);
                            break;
                        case "church_stone_factor":
                            this.church_stone_factor = line.substring(line.indexOf("=") + 2);
                            break;
                        case "church_iron_factor":
                            this.church_iron_factor = line.substring(line.indexOf("=") + 2);
                            break;
                        case "church_pop_factor":
                            this.church_pop_factor = line.substring(line.indexOf("=") + 2);
                            break;
                        case "church_build_time":
                            this.church_build_time = line.substring(line.indexOf("=") + 2);
                            break;
                        case "church_build_time_factor":
                            this.church_build_time_factor = line.substring(line.indexOf("=") + 2);
                            break;

                        case "church_f_max_level":
                            this.church_f_max_level = line.substring(line.indexOf("=") + 2);
                            break;
                        case "church_f_min_level":
                            this.church_f_min_level = line.substring(line.indexOf("=") + 2);
                            break;
                        case "church_f_wood":
                            this.church_f_wood = line.substring(line.indexOf("=") + 2);
                            break;
                        case "church_f_stone":
                            this.church_f_stone = line.substring(line.indexOf("=") + 2);
                            break;
                        case "church_f_iron":
                            this.church_f_iron = line.substring(line.indexOf("=") + 2);
                            break;
                        case "church_f_pop":
                            this.church_f_pop = line.substring(line.indexOf("=") + 2);
                            break;
                        case "church_f_wood_factor":
                            this.church_f_wood_factor = line.substring(line.indexOf("=") + 2);
                            break;
                        case "church_f_stone_factor":
                            this.church_f_stone_factor = line.substring(line.indexOf("=") + 2);
                            break;
                        case "church_f_iron_factor":
                            this.church_f_iron_factor = line.substring(line.indexOf("=") + 2);
                            break;
                        case "church_f_pop_factor":
                            this.church_f_pop_factor = line.substring(line.indexOf("=") + 2);
                            break;
                        case "church_f_build_time":
                            this.church_f_build_time = line.substring(line.indexOf("=") + 2);
                            break;
                        case "church_f_build_time_factor":
                            this.church_f_build_time_factor = line.substring(line.indexOf("=") + 2);
                            break;

                        case "snob_max_level":
                            this.snob_max_level = line.substring(line.indexOf("=") + 2);
                            break;
                        case "snob_min_level":
                            this.snob_min_level = line.substring(line.indexOf("=") + 2);
                            break;
                        case "snob_wood":
                            this.snob_wood = line.substring(line.indexOf("=") + 2);
                            break;
                        case "snob_stone":
                            this.snob_stone = line.substring(line.indexOf("=") + 2);
                            break;
                        case "snob_iron":
                            this.snob_iron = line.substring(line.indexOf("=") + 2);
                            break;
                        case "snob_pop":
                            this.snob_pop = line.substring(line.indexOf("=") + 2);
                            break;
                        case "snob_wood_factor":
                            this.snob_wood_factor = line.substring(line.indexOf("=") + 2);
                            break;
                        case "snob_stone_factor":
                            this.snob_stone_factor = line.substring(line.indexOf("=") + 2);
                            break;
                        case "snob_iron_factor":
                            this.snob_iron_factor = line.substring(line.indexOf("=") + 2);
                            break;
                        case "snob_pop_factor":
                            this.snob_pop_factor = line.substring(line.indexOf("=") + 2);
                            break;
                        case "snob_build_time":
                            this.snob_build_time = line.substring(line.indexOf("=") + 2);
                            break;
                        case "snob_build_time_factor":
                            this.snob_build_time_factor = line.substring(line.indexOf("=") + 2);
                            break;

                        case "smith_max_level":
                            this.smith_max_level = line.substring(line.indexOf("=") + 2);
                            break;
                        case "smith_min_level":
                            this.smith_min_level = line.substring(line.indexOf("=") + 2);
                            break;
                        case "smith_wood":
                            this.smith_wood = line.substring(line.indexOf("=") + 2);
                            break;
                        case "smith_stone":
                            this.smith_stone = line.substring(line.indexOf("=") + 2);
                            break;
                        case "smith_iron":
                            this.smith_iron = line.substring(line.indexOf("=") + 2);
                            break;
                        case "smith_pop":
                            this.smith_pop = line.substring(line.indexOf("=") + 2);
                            break;
                        case "smith_wood_factor":
                            this.smith_wood_factor = line.substring(line.indexOf("=") + 2);
                            break;
                        case "smith_stone_factor":
                            this.smith_stone_factor = line.substring(line.indexOf("=") + 2);
                            break;
                        case "smith_iron_factor":
                            this.smith_iron_factor = line.substring(line.indexOf("=") + 2);
                            break;
                        case "smith_pop_factor":
                            this.smith_pop_factor = line.substring(line.indexOf("=") + 2);
                            break;
                        case "smith_build_time":
                            this.smith_build_time = line.substring(line.indexOf("=") + 2);
                            break;
                        case "smith_build_time_factor":
                            this.smith_build_time_factor = line.substring(line.indexOf("=") + 2);
                            break;

                        case "place_max_level":
                            this.place_max_level = line.substring(line.indexOf("=") + 2);
                            break;
                        case "place_min_level":
                            this.place_min_level = line.substring(line.indexOf("=") + 2);
                            break;
                        case "place_wood":
                            this.place_wood = line.substring(line.indexOf("=") + 2);
                            break;
                        case "place_stone":
                            this.place_stone = line.substring(line.indexOf("=") + 2);
                            break;
                        case "place_iron":
                            this.place_iron = line.substring(line.indexOf("=") + 2);
                            break;
                        case "place_pop":
                            this.place_pop = line.substring(line.indexOf("=") + 2);
                            break;
                        case "place_wood_factor":
                            this.place_wood_factor = line.substring(line.indexOf("=") + 2);
                            break;
                        case "place_stone_factor":
                            this.place_stone_factor = line.substring(line.indexOf("=") + 2);
                            break;
                        case "place_iron_factor":
                            this.place_iron_factor = line.substring(line.indexOf("=") + 2);
                            break;
                        case "place_pop_factor":
                            this.place_pop_factor = line.substring(line.indexOf("=") + 2);
                            break;
                        case "place_build_time":
                            this.place_build_time = line.substring(line.indexOf("=") + 2);
                            break;
                        case "place_build_time_factor":
                            this.place_build_time_factor = line.substring(line.indexOf("=") + 2);
                            break;

                        case "statue_max_level":
                            this.statue_max_level = line.substring(line.indexOf("=") + 2);
                            break;
                        case "statue_min_level":
                            this.statue_min_level = line.substring(line.indexOf("=") + 2);
                            break;
                        case "statue_wood":
                            this.statue_wood = line.substring(line.indexOf("=") + 2);
                            break;
                        case "statue_stone":
                            this.statue_stone = line.substring(line.indexOf("=") + 2);
                            break;
                        case "statue_iron":
                            this.statue_iron = line.substring(line.indexOf("=") + 2);
                            break;
                        case "statue_pop":
                            this.statue_pop = line.substring(line.indexOf("=") + 2);
                            break;
                        case "statue_wood_factor":
                            this.statue_wood_factor = line.substring(line.indexOf("=") + 2);
                            break;
                        case "statue_stone_factor":
                            this.statue_stone_factor = line.substring(line.indexOf("=") + 2);
                            break;
                        case "statue_iron_factor":
                            this.statue_iron_factor = line.substring(line.indexOf("=") + 2);
                            break;
                        case "statue_pop_factor":
                            this.statue_pop_factor = line.substring(line.indexOf("=") + 2);
                            break;
                        case "statue_build_time":
                            this.statue_build_time = line.substring(line.indexOf("=") + 2);
                            break;
                        case "statue_build_time_factor":
                            this.statue_build_time_factor = line.substring(line.indexOf("=") + 2);
                            break;

                        case "market_max_level":
                            this.market_max_level = line.substring(line.indexOf("=") + 2);
                            break;
                        case "market_min_level":
                            this.market_min_level = line.substring(line.indexOf("=") + 2);
                            break;
                        case "market_wood":
                            this.market_wood = line.substring(line.indexOf("=") + 2);
                            break;
                        case "market_stone":
                            this.market_stone = line.substring(line.indexOf("=") + 2);
                            break;
                        case "market_iron":
                            this.market_iron = line.substring(line.indexOf("=") + 2);
                            break;
                        case "market_pop":
                            this.market_pop = line.substring(line.indexOf("=") + 2);
                            break;
                        case "market_wood_factor":
                            this.market_wood_factor = line.substring(line.indexOf("=") + 2);
                            break;
                        case "market_stone_factor":
                            this.market_stone_factor = line.substring(line.indexOf("=") + 2);
                            break;
                        case "market_iron_factor":
                            this.market_iron_factor = line.substring(line.indexOf("=") + 2);
                            break;
                        case "market_pop_factor":
                            this.market_pop_factor = line.substring(line.indexOf("=") + 2);
                            break;
                        case "market_build_time":
                            this.market_build_time = line.substring(line.indexOf("=") + 2);
                            break;
                        case "market_build_time_factor":
                            this.market_build_time_factor = line.substring(line.indexOf("=") + 2);
                            break;

                        case "wood_max_level":
                            this.wood_max_level = line.substring(line.indexOf("=") + 2);
                            break;
                        case "wood_min_level":
                            this.wood_min_level = line.substring(line.indexOf("=") + 2);
                            break;
                        case "wood_wood":
                            this.wood_wood = line.substring(line.indexOf("=") + 2);
                            break;
                        case "wood_stone":
                            this.wood_stone = line.substring(line.indexOf("=") + 2);
                            break;
                        case "wood_iron":
                            this.wood_iron = line.substring(line.indexOf("=") + 2);
                            break;
                        case "wood_pop":
                            this.wood_pop = line.substring(line.indexOf("=") + 2);
                            break;
                        case "wood_wood_factor":
                            this.wood_wood_factor = line.substring(line.indexOf("=") + 2);
                            break;
                        case "wood_stone_factor":
                            this.wood_stone_factor = line.substring(line.indexOf("=") + 2);
                            break;
                        case "wood_iron_factor":
                            this.wood_iron_factor = line.substring(line.indexOf("=") + 2);
                            break;
                        case "wood_pop_factor":
                            this.wood_pop_factor = line.substring(line.indexOf("=") + 2);
                            break;
                        case "wood_build_time":
                            this.wood_build_time = line.substring(line.indexOf("=") + 2);
                            break;
                        case "wood_build_time_factor":
                            this.wood_build_time_factor = line.substring(line.indexOf("=") + 2);
                            break;

                        case "stone_max_level":
                            this.stone_max_level = line.substring(line.indexOf("=") + 2);
                            break;
                        case "stone_min_level":
                            this.stone_min_level = line.substring(line.indexOf("=") + 2);
                            break;
                        case "stone_wood":
                            this.stone_wood = line.substring(line.indexOf("=") + 2);
                            break;
                        case "stone_stone":
                            this.stone_stone = line.substring(line.indexOf("=") + 2);
                            break;
                        case "stone_iron":
                            this.stone_iron = line.substring(line.indexOf("=") + 2);
                            break;
                        case "stone_pop":
                            this.stone_pop = line.substring(line.indexOf("=") + 2);
                            break;
                        case "stone_wood_factor":
                            this.stone_wood_factor = line.substring(line.indexOf("=") + 2);
                            break;
                        case "stone_stone_factor":
                            this.stone_stone_factor = line.substring(line.indexOf("=") + 2);
                            break;
                        case "stone_iron_factor":
                            this.stone_iron_factor = line.substring(line.indexOf("=") + 2);
                            break;
                        case "stone_pop_factor":
                            this.stone_pop_factor = line.substring(line.indexOf("=") + 2);
                            break;
                        case "stone_build_time":
                            this.stone_build_time = line.substring(line.indexOf("=") + 2);
                            break;
                        case "stone_build_time_factor":
                            this.stone_build_time_factor = line.substring(line.indexOf("=") + 2);
                            break;

                        case "iron_max_level":
                            this.iron_max_level = line.substring(line.indexOf("=") + 2);
                            break;
                        case "iron_min_level":
                            this.iron_min_level = line.substring(line.indexOf("=") + 2);
                            break;
                        case "iron_wood":
                            this.iron_wood = line.substring(line.indexOf("=") + 2);
                            break;
                        case "iron_stone":
                            this.iron_stone = line.substring(line.indexOf("=") + 2);
                            break;
                        case "iron_iron":
                            this.iron_iron = line.substring(line.indexOf("=") + 2);
                            break;
                        case "iron_pop":
                            this.iron_pop = line.substring(line.indexOf("=") + 2);
                            break;
                        case "iron_wood_factor":
                            this.iron_wood_factor = line.substring(line.indexOf("=") + 2);
                            break;
                        case "iron_stone_factor":
                            this.iron_stone_factor = line.substring(line.indexOf("=") + 2);
                            break;
                        case "iron_iron_factor":
                            this.iron_iron_factor = line.substring(line.indexOf("=") + 2);
                            break;
                        case "iron_pop_factor":
                            this.iron_pop_factor = line.substring(line.indexOf("=") + 2);
                            break;
                        case "iron_build_time":
                            this.iron_build_time = line.substring(line.indexOf("=") + 2);
                            break;
                        case "iron_build_time_factor":
                            this.iron_build_time_factor = line.substring(line.indexOf("=") + 2);
                            break;

                        case "farm_max_level":
                            this.farm_max_level = line.substring(line.indexOf("=") + 2);
                            break;
                        case "farm_min_level":
                            this.farm_min_level = line.substring(line.indexOf("=") + 2);
                            break;
                        case "farm_wood":
                            this.farm_wood = line.substring(line.indexOf("=") + 2);
                            break;
                        case "farm_stone":
                            this.farm_stone = line.substring(line.indexOf("=") + 2);
                            break;
                        case "farm_iron":
                            this.farm_iron = line.substring(line.indexOf("=") + 2);
                            break;
                        case "farm_pop":
                            this.farm_pop = line.substring(line.indexOf("=") + 2);
                            break;
                        case "farm_wood_factor":
                            this.farm_wood_factor = line.substring(line.indexOf("=") + 2);
                            break;
                        case "farm_stone_factor":
                            this.farm_stone_factor = line.substring(line.indexOf("=") + 2);
                            break;
                        case "farm_iron_factor":
                            this.farm_iron_factor = line.substring(line.indexOf("=") + 2);
                            break;
                        case "farm_pop_factor":
                            this.farm_pop_factor = line.substring(line.indexOf("=") + 2);
                            break;
                        case "farm_build_time":
                            this.farm_build_time = line.substring(line.indexOf("=") + 2);
                            break;
                        case "farm_build_time_factor":
                            this.farm_build_time_factor = line.substring(line.indexOf("=") + 2);
                            break;

                        case "storage_max_level":
                            this.storage_max_level = line.substring(line.indexOf("=") + 2);
                            break;
                        case "storage_min_level":
                            this.storage_min_level = line.substring(line.indexOf("=") + 2);
                            break;
                        case "storage_wood":
                            this.storage_wood = line.substring(line.indexOf("=") + 2);
                            break;
                        case "storage_stone":
                            this.storage_stone = line.substring(line.indexOf("=") + 2);
                            break;
                        case "storage_iron":
                            this.storage_iron = line.substring(line.indexOf("=") + 2);
                            break;
                        case "storage_pop":
                            this.storage_pop = line.substring(line.indexOf("=") + 2);
                            break;
                        case "storage_wood_factor":
                            this.storage_wood_factor = line.substring(line.indexOf("=") + 2);
                            break;
                        case "storage_stone_factor":
                            this.storage_stone_factor = line.substring(line.indexOf("=") + 2);
                            break;
                        case "storage_iron_factor":
                            this.storage_iron_factor = line.substring(line.indexOf("=") + 2);
                            break;
                        case "storage_pop_factor":
                            this.storage_pop_factor = line.substring(line.indexOf("=") + 2);
                            break;
                        case "storage_build_time":
                            this.storage_build_time = line.substring(line.indexOf("=") + 2);
                            break;
                        case "storage_build_time_factor":
                            this.storage_build_time_factor = line.substring(line.indexOf("=") + 2);
                            break;

                        case "hide_max_level":
                            this.hide_max_level = line.substring(line.indexOf("=") + 2);
                            break;
                        case "hide_min_level":
                            this.hide_min_level = line.substring(line.indexOf("=") + 2);
                            break;
                        case "hide_wood":
                            this.hide_wood = line.substring(line.indexOf("=") + 2);
                            break;
                        case "hide_stone":
                            this.hide_stone = line.substring(line.indexOf("=") + 2);
                            break;
                        case "hide_iron":
                            this.hide_iron = line.substring(line.indexOf("=") + 2);
                            break;
                        case "hide_pop":
                            this.hide_pop = line.substring(line.indexOf("=") + 2);
                            break;
                        case "hide_wood_factor":
                            this.hide_wood_factor = line.substring(line.indexOf("=") + 2);
                            break;
                        case "hide_stone_factor":
                            this.hide_stone_factor = line.substring(line.indexOf("=") + 2);
                            break;
                        case "hide_iron_factor":
                            this.hide_iron_factor = line.substring(line.indexOf("=") + 2);
                            break;
                        case "hide_pop_factor":
                            this.hide_pop_factor = line.substring(line.indexOf("=") + 2);
                            break;
                        case "hide_build_time":
                            this.hide_build_time = line.substring(line.indexOf("=") + 2);
                            break;
                        case "hide_build_time_factor":
                            this.hide_build_time_factor = line.substring(line.indexOf("=") + 2);
                            break;

                        case "wall_max_level":
                            this.wall_max_level = line.substring(line.indexOf("=") + 2);
                            break;
                        case "wall_min_level":
                            this.wall_min_level = line.substring(line.indexOf("=") + 2);
                            break;
                        case "wall_wood":
                            this.wall_wood = line.substring(line.indexOf("=") + 2);
                            break;
                        case "wall_stone":
                            this.wall_stone = line.substring(line.indexOf("=") + 2);
                            break;
                        case "wall_iron":
                            this.wall_iron = line.substring(line.indexOf("=") + 2);
                            break;
                        case "wall_pop":
                            this.wall_pop = line.substring(line.indexOf("=") + 2);
                            break;
                        case "wall_wood_factor":
                            this.wall_wood_factor = line.substring(line.indexOf("=") + 2);
                            break;
                        case "wall_stone_factor":
                            this.wall_stone_factor = line.substring(line.indexOf("=") + 2);
                            break;
                        case "wall_iron_factor":
                            this.wall_iron_factor = line.substring(line.indexOf("=") + 2);
                            break;
                        case "wall_pop_factor":
                            this.wall_pop_factor = line.substring(line.indexOf("=") + 2);
                            break;
                        case "wall_build_time":
                            this.wall_build_time = line.substring(line.indexOf("=") + 2);
                            break;
                        case "wall_build_time_factor":
                            this.wall_build_time_factor = line.substring(line.indexOf("=") + 2);
                            break;
                    }
                }

                stream.close();
            } catch (err) {
                Logger.log(Logger.LogLevel.WARNING, err.name + "->" + err.message, "readFromFile()", "database/BuildingInfo.js");
            }
        },
        writeToFile : function ($path) {
            Logger.log(Logger.LogLevel.INFO, "Writing building info to file...", "writeToFile()", "database/BuildingInfo.js");
            try {
                var fs = require('fs');
                var stream = fs.open($path, 'w');

                stream.writeLine('main_max_level = ' + this.main_max_level);
                stream.writeLine('main_min_level = ' + this.main_min_level);
                stream.writeLine('main_wood = ' + this.main_wood);
                stream.writeLine('main_stone = ' + this.main_stone);
                stream.writeLine('main_iron = ' + this.main_iron);
                stream.writeLine('main_pop = ' + this.main_pop);
                stream.writeLine('main_wood_factor = ' + this.main_wood_factor);
                stream.writeLine('main_stone_factor = ' + this.main_stone_factor);
                stream.writeLine('main_iron_factor = ' + this.main_iron_factor);
                stream.writeLine('main_pop_factor = ' + this.main_pop_factor);
                stream.writeLine('main_build_time = ' + this.main_build_time);
                stream.writeLine('main_build_time_factor = ' + this.main_build_time_factor);

                stream.writeLine('barracks_max_level = ' + this.barracks_max_level);
                stream.writeLine('barracks_min_level = ' + this.barracks_min_level);
                stream.writeLine('barracks_wood = ' + this.barracks_wood);
                stream.writeLine('barracks_stone = ' + this.barracks_stone);
                stream.writeLine('barracks_iron = ' + this.barracks_iron);
                stream.writeLine('barracks_pop = ' + this.barracks_pop);
                stream.writeLine('barracks_wood_factor = ' + this.barracks_wood_factor);
                stream.writeLine('barracks_stone_factor = ' + this.barracks_stone_factor);
                stream.writeLine('barracks_iron_factor = ' + this.barracks_iron_factor);
                stream.writeLine('barracks_pop_factor = ' + this.barracks_pop_factor);
                stream.writeLine('barracks_build_time = ' + this.barracks_build_time);
                stream.writeLine('barracks_build_time_factor = ' + this.barracks_build_time_factor);

                stream.writeLine('stable_max_level = ' + this.stable_max_level);
                stream.writeLine('stable_min_level = ' + this.stable_min_level);
                stream.writeLine('stable_wood = ' + this.stable_wood);
                stream.writeLine('stable_stone = ' + this.stable_stone);
                stream.writeLine('stable_iron = ' + this.stable_iron);
                stream.writeLine('stable_pop = ' + this.stable_pop);
                stream.writeLine('stable_wood_factor = ' + this.stable_wood_factor);
                stream.writeLine('stable_stone_factor = ' + this.stable_stone_factor);
                stream.writeLine('stable_iron_factor = ' + this.stable_iron_factor);
                stream.writeLine('stable_pop_factor = ' + this.stable_pop_factor);
                stream.writeLine('stable_build_time = ' + this.stable_build_time);
                stream.writeLine('stable_build_time_factor = ' + this.stable_build_time_factor);

                stream.writeLine('garage_max_level = ' + this.garage_max_level);
                stream.writeLine('garage_min_level = ' + this.garage_min_level);
                stream.writeLine('garage_wood = ' + this.garage_wood);
                stream.writeLine('garage_stone = ' + this.garage_stone);
                stream.writeLine('garage_iron = ' + this.garage_iron);
                stream.writeLine('garage_pop = ' + this.garage_pop);
                stream.writeLine('garage_wood_factor = ' + this.garage_wood_factor);
                stream.writeLine('garage_stone_factor = ' + this.garage_stone_factor);
                stream.writeLine('garage_iron_factor = ' + this.garage_iron_factor);
                stream.writeLine('garage_pop_factor = ' + this.garage_pop_factor);
                stream.writeLine('garage_build_time = ' + this.garage_build_time);
                stream.writeLine('garage_build_time_factor = ' + this.garage_build_time_factor);

                stream.writeLine('church_max_level = ' + this.church_max_level);
                stream.writeLine('church_min_level = ' + this.church_min_level);
                stream.writeLine('church_wood = ' + this.church_wood);
                stream.writeLine('church_stone = ' + this.church_stone);
                stream.writeLine('church_iron = ' + this.church_iron);
                stream.writeLine('church_pop = ' + this.church_pop);
                stream.writeLine('church_wood_factor = ' + this.church_wood_factor);
                stream.writeLine('church_stone_factor = ' + this.church_stone_factor);
                stream.writeLine('church_iron_factor = ' + this.church_iron_factor);
                stream.writeLine('church_pop_factor = ' + this.church_pop_factor);
                stream.writeLine('church_build_time = ' + this.church_build_time);
                stream.writeLine('church_build_time_factor = ' + this.church_build_time_factor);

                stream.writeLine('church_f_max_level = ' + this.church_f_max_level);
                stream.writeLine('church_f_min_level = ' + this.church_f_min_level);
                stream.writeLine('church_f_wood = ' + this.church_f_wood);
                stream.writeLine('church_f_stone = ' + this.church_f_stone);
                stream.writeLine('church_f_iron = ' + this.church_f_iron);
                stream.writeLine('church_f_pop = ' + this.church_f_pop);
                stream.writeLine('church_f_wood_factor = ' + this.church_f_wood_factor);
                stream.writeLine('church_f_stone_factor = ' + this.church_f_stone_factor);
                stream.writeLine('church_f_iron_factor = ' + this.church_f_iron_factor);
                stream.writeLine('church_f_pop_factor = ' + this.church_f_pop_factor);
                stream.writeLine('church_f_build_time = ' + this.church_f_build_time);
                stream.writeLine('church_f_build_time_factor = ' + this.church_f_build_time_factor);

                stream.writeLine('snob_max_level = ' + this.snob_max_level);
                stream.writeLine('snob_min_level = ' + this.snob_min_level);
                stream.writeLine('snob_wood = ' + this.snob_wood);
                stream.writeLine('snob_stone = ' + this.snob_stone);
                stream.writeLine('snob_iron = ' + this.snob_iron);
                stream.writeLine('snob_pop = ' + this.snob_pop);
                stream.writeLine('snob_wood_factor = ' + this.snob_wood_factor);
                stream.writeLine('snob_stone_factor = ' + this.snob_stone_factor);
                stream.writeLine('snob_iron_factor = ' + this.snob_iron_factor);
                stream.writeLine('snob_pop_factor = ' + this.snob_pop_factor);
                stream.writeLine('snob_build_time = ' + this.snob_build_time);
                stream.writeLine('snob_build_time_factor = ' + this.snob_build_time_factor);

                stream.writeLine('smith_max_level = ' + this.smith_max_level);
                stream.writeLine('smith_min_level = ' + this.smith_min_level);
                stream.writeLine('smith_wood = ' + this.smith_wood);
                stream.writeLine('smith_stone = ' + this.smith_stone);
                stream.writeLine('smith_iron = ' + this.smith_iron);
                stream.writeLine('smith_pop = ' + this.smith_pop);
                stream.writeLine('smith_wood_factor = ' + this.smith_wood_factor);
                stream.writeLine('smith_stone_factor = ' + this.smith_stone_factor);
                stream.writeLine('smith_iron_factor = ' + this.smith_iron_factor);
                stream.writeLine('smith_pop_factor = ' + this.smith_pop_factor);
                stream.writeLine('smith_build_time = ' + this.smith_build_time);
                stream.writeLine('smith_build_time_factor = ' + this.smith_build_time_factor);

                stream.writeLine('place_max_level = ' + this.place_max_level);
                stream.writeLine('place_min_level = ' + this.place_min_level);
                stream.writeLine('place_wood = ' + this.place_wood);
                stream.writeLine('place_stone = ' + this.place_stone);
                stream.writeLine('place_iron = ' + this.place_iron);
                stream.writeLine('place_pop = ' + this.place_pop);
                stream.writeLine('place_wood_factor = ' + this.place_wood_factor);
                stream.writeLine('place_stone_factor = ' + this.place_stone_factor);
                stream.writeLine('place_iron_factor = ' + this.place_iron_factor);
                stream.writeLine('place_pop_factor = ' + this.place_pop_factor);
                stream.writeLine('place_build_time = ' + this.place_build_time);
                stream.writeLine('place_build_time_factor = ' + this.place_build_time_factor);

                stream.writeLine('statue_max_level = ' + this.statue_max_level);
                stream.writeLine('statue_min_level = ' + this.statue_min_level);
                stream.writeLine('statue_wood = ' + this.statue_wood);
                stream.writeLine('statue_stone = ' + this.statue_stone);
                stream.writeLine('statue_iron = ' + this.statue_iron);
                stream.writeLine('statue_pop = ' + this.statue_pop);
                stream.writeLine('statue_wood_factor = ' + this.statue_wood_factor);
                stream.writeLine('statue_stone_factor = ' + this.statue_stone_factor);
                stream.writeLine('statue_iron_factor = ' + this.statue_iron_factor);
                stream.writeLine('statue_pop_factor = ' + this.statue_pop_factor);
                stream.writeLine('statue_build_time = ' + this.statue_build_time);
                stream.writeLine('statue_build_time_factor = ' + this.statue_build_time_factor);

                stream.writeLine('market_max_level = ' + this.market_max_level);
                stream.writeLine('market_min_level = ' + this.market_min_level);
                stream.writeLine('market_wood = ' + this.market_wood);
                stream.writeLine('market_stone = ' + this.market_stone);
                stream.writeLine('market_iron = ' + this.market_iron);
                stream.writeLine('market_pop = ' + this.market_pop);
                stream.writeLine('market_wood_factor = ' + this.market_wood_factor);
                stream.writeLine('market_stone_factor = ' + this.market_stone_factor);
                stream.writeLine('market_iron_factor = ' + this.market_iron_factor);
                stream.writeLine('market_pop_factor = ' + this.market_pop_factor);
                stream.writeLine('market_build_time = ' + this.market_build_time);
                stream.writeLine('market_build_time_factor = ' + this.market_build_time_factor);

                stream.writeLine('wood_max_level = ' + this.wood_max_level);
                stream.writeLine('wood_min_level = ' + this.wood_min_level);
                stream.writeLine('wood_wood = ' + this.wood_wood);
                stream.writeLine('wood_stone = ' + this.wood_stone);
                stream.writeLine('wood_iron = ' + this.wood_iron);
                stream.writeLine('wood_pop = ' + this.wood_pop);
                stream.writeLine('wood_wood_factor = ' + this.wood_wood_factor);
                stream.writeLine('wood_stone_factor = ' + this.wood_stone_factor);
                stream.writeLine('wood_iron_factor = ' + this.wood_iron_factor);
                stream.writeLine('wood_pop_factor = ' + this.wood_pop_factor);
                stream.writeLine('wood_build_time = ' + this.wood_build_time);
                stream.writeLine('wood_build_time_factor = ' + this.wood_build_time_factor);

                stream.writeLine('stone_max_level = ' + this.stone_max_level);
                stream.writeLine('stone_min_level = ' + this.stone_min_level);
                stream.writeLine('stone_wood = ' + this.stone_wood);
                stream.writeLine('stone_stone = ' + this.stone_stone);
                stream.writeLine('stone_iron = ' + this.stone_iron);
                stream.writeLine('stone_pop = ' + this.stone_pop);
                stream.writeLine('stone_wood_factor = ' + this.stone_wood_factor);
                stream.writeLine('stone_stone_factor = ' + this.stone_stone_factor);
                stream.writeLine('stone_iron_factor = ' + this.stone_iron_factor);
                stream.writeLine('stone_pop_factor = ' + this.stone_pop_factor);
                stream.writeLine('stone_build_time = ' + this.stone_build_time);
                stream.writeLine('stone_build_time_factor = ' + this.stone_build_time_factor);

                stream.writeLine('iron_max_level = ' + this.iron_max_level);
                stream.writeLine('iron_min_level = ' + this.iron_min_level);
                stream.writeLine('iron_wood = ' + this.iron_wood);
                stream.writeLine('iron_stone = ' + this.iron_stone);
                stream.writeLine('iron_iron = ' + this.iron_iron);
                stream.writeLine('iron_pop = ' + this.iron_pop);
                stream.writeLine('iron_wood_factor = ' + this.iron_wood_factor);
                stream.writeLine('iron_stone_factor = ' + this.iron_stone_factor);
                stream.writeLine('iron_iron_factor = ' + this.iron_iron_factor);
                stream.writeLine('iron_pop_factor = ' + this.iron_pop_factor);
                stream.writeLine('iron_build_time = ' + this.iron_build_time);
                stream.writeLine('iron_build_time_factor = ' + this.iron_build_time_factor);

                stream.writeLine('farm_max_level = ' + this.farm_max_level);
                stream.writeLine('farm_min_level = ' + this.farm_min_level);
                stream.writeLine('farm_wood = ' + this.farm_wood);
                stream.writeLine('farm_stone = ' + this.farm_stone);
                stream.writeLine('farm_iron = ' + this.farm_iron);
                stream.writeLine('farm_pop = ' + this.farm_pop);
                stream.writeLine('farm_wood_factor = ' + this.farm_wood_factor);
                stream.writeLine('farm_stone_factor = ' + this.farm_stone_factor);
                stream.writeLine('farm_iron_factor = ' + this.farm_iron_factor);
                stream.writeLine('farm_pop_factor = ' + this.farm_pop_factor);
                stream.writeLine('farm_build_time = ' + this.farm_build_time);
                stream.writeLine('farm_build_time_factor = ' + this.farm_build_time_factor);

                stream.writeLine('storage_max_level = ' + this.storage_max_level);
                stream.writeLine('storage_min_level = ' + this.storage_min_level);
                stream.writeLine('storage_wood = ' + this.storage_wood);
                stream.writeLine('storage_stone = ' + this.storage_stone);
                stream.writeLine('storage_iron = ' + this.storage_iron);
                stream.writeLine('storage_pop = ' + this.storage_pop);
                stream.writeLine('storage_wood_factor = ' + this.storage_wood_factor);
                stream.writeLine('storage_stone_factor = ' + this.storage_stone_factor);
                stream.writeLine('storage_iron_factor = ' + this.storage_iron_factor);
                stream.writeLine('storage_pop_factor = ' + this.storage_pop_factor);
                stream.writeLine('storage_build_time = ' + this.storage_build_time);
                stream.writeLine('storage_build_time_factor = ' + this.storage_build_time_factor);

                stream.writeLine('hide_max_level = ' + this.hide_max_level);
                stream.writeLine('hide_min_level = ' + this.hide_min_level);
                stream.writeLine('hide_wood = ' + this.hide_wood);
                stream.writeLine('hide_stone = ' + this.hide_stone);
                stream.writeLine('hide_iron = ' + this.hide_iron);
                stream.writeLine('hide_pop = ' + this.hide_pop);
                stream.writeLine('hide_wood_factor = ' + this.hide_wood_factor);
                stream.writeLine('hide_stone_factor = ' + this.hide_stone_factor);
                stream.writeLine('hide_iron_factor = ' + this.hide_iron_factor);
                stream.writeLine('hide_pop_factor = ' + this.hide_pop_factor);
                stream.writeLine('hide_build_time = ' + this.hide_build_time);
                stream.writeLine('hide_build_time_factor = ' + this.hide_build_time_factor);

                stream.writeLine('wall_max_level = ' + this.wall_max_level);
                stream.writeLine('wall_min_level = ' + this.wall_min_level);
                stream.writeLine('wall_wood = ' + this.wall_wood);
                stream.writeLine('wall_stone = ' + this.wall_stone);
                stream.writeLine('wall_iron = ' + this.wall_iron);
                stream.writeLine('wall_pop = ' + this.wall_pop);
                stream.writeLine('wall_wood_factor = ' + this.wall_wood_factor);
                stream.writeLine('wall_stone_factor = ' + this.wall_stone_factor);
                stream.writeLine('wall_iron_factor = ' + this.wall_iron_factor);
                stream.writeLine('wall_pop_factor = ' + this.wall_pop_factor);
                stream.writeLine('wall_build_time = ' + this.wall_build_time);
                stream.writeLine('wall_build_time_factor = ' + this.wall_build_time_factor);

                stream.close();
            } catch (err) {
                Logger.log(Logger.LogLevel.WARNING, err.name + "->" + err.message, "writeToFile()", "database/BuildingInfo.js");
            }
        }
    };