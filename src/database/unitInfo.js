Logger.log(Logger.LogLevel.DEBUG, "Loading database/UnitInfo.js", "()", "database/UnitInfo.js");

var UnitInfo = UnitInfo || {
        //<editor-fold desc="Fields">
        spear_wood : 0,
        spear_stone : 0,
        spear_iron : 0,
        spear_pop : 0,
        spear_speed : 0,
        spear_attack : 0,
        spear_defense : 0,
        spear_defense_cavalry : 0,
        spear_defense_archer : 0,
        spear_carry : 0,
        spear_build_time : 0,
        
        sword_wood : 0,
        sword_stone : 0,
        sword_iron : 0,
        sword_pop : 0,
        sword_speed : 0,
        sword_attack : 0,
        sword_defense : 0,
        sword_defense_cavalry : 0,
        sword_defense_archer : 0,
        sword_carry : 0,
        sword_build_time : 0,
        
        axe_wood : 0,
        axe_stone : 0,
        axe_iron : 0,
        axe_pop : 0,
        axe_speed : 0,
        axe_attack : 0,
        axe_defense : 0,
        axe_defense_cavalry : 0,
        axe_defense_archer : 0,
        axe_carry : 0,
        axe_build_time : 0,
        
        archer_wood : 0,
        archer_stone : 0,
        archer_iron : 0,
        archer_pop : 0,
        archer_speed : 0,
        archer_attack : 0,
        archer_defense : 0,
        archer_defense_cavalry : 0,
        archer_defense_archer : 0,
        archer_carry : 0,
        archer_build_time : 0,
        
        spy_wood : 0,
        spy_stone : 0,
        spy_iron : 0,
        spy_pop : 0,
        spy_speed : 0,
        spy_attack : 0,
        spy_defense : 0,
        spy_defense_cavalry : 0,
        spy_defense_archer : 0,
        spy_carry : 0,
        spy_build_time : 0,
        
        light_wood : 0,
        light_stone : 0,
        light_iron : 0,
        light_pop : 0,
        light_speed : 0,
        light_attack : 0,
        light_defense : 0,
        light_defense_cavalry : 0,
        light_defense_archer : 0,
        light_carry : 0,
        light_build_time : 0,
        
        marcher_wood : 0,
        marcher_stone : 0,
        marcher_iron : 0,
        marcher_pop : 0,
        marcher_speed : 0,
        marcher_attack : 0,
        marcher_defense : 0,
        marcher_defense_cavalry : 0,
        marcher_defense_archer : 0,
        marcher_carry : 0,
        marcher_build_time : 0,
        
        heavy_wood : 0,
        heavy_stone : 0,
        heavy_iron : 0,
        heavy_pop : 0,
        heavy_speed : 0,
        heavy_attack : 0,
        heavy_defense : 0,
        heavy_defense_cavalry : 0,
        heavy_defense_archer : 0,
        heavy_carry : 0,
        heavy_build_time : 0,
        
        ram_wood : 0,
        ram_stone : 0,
        ram_iron : 0,
        ram_pop : 0,
        ram_speed : 0,
        ram_attack : 0,
        ram_defense : 0,
        ram_defense_cavalry : 0,
        ram_defense_archer : 0,
        ram_carry : 0,
        ram_build_time : 0,
        
        catapult_wood : 0,
        catapult_stone : 0,
        catapult_iron : 0,
        catapult_pop : 0,
        catapult_speed : 0,
        catapult_attack : 0,
        catapult_defense : 0,
        catapult_defense_cavalry : 0,
        catapult_defense_archer : 0,
        catapult_carry : 0,
        catapult_build_time : 0,
        
        knight_wood : 0,
        knight_stone : 0,
        knight_iron : 0,
        knight_pop : 0,
        knight_speed : 0,
        knight_attack : 0,
        knight_defense : 0,
        knight_defense_cavalry : 0,
        knight_defense_archer : 0,
        knight_carry : 0,
        knight_build_time : 0,
        
        snob_wood : 0,
        snob_stone : 0,
        snob_iron : 0,
        snob_pop : 0,
        snob_speed : 0,
        snob_attack : 0,
        snob_defense : 0,
        snob_defense_cavalry : 0,
        snob_defense_archer : 0,
        snob_carry : 0,
        snob_build_time : 0,
        
        militia_wood : 0,
        militia_stone : 0,
        militia_iron : 0,
        militia_pop : 0,
        militia_speed : 0,
        militia_attack : 0,
        militia_defense : 0,
        militia_defense_cavalry : 0,
        militia_defense_archer : 0,
        militia_carry : 0,
        militia_build_time : 0,
        //</editor-fold>

        downloadFromWeb : function($dsWorld) {
            Logger.log(Logger.LogLevel.INFO, "Downloading unit info...", "downloadFromWeb()", "database/UnitInfo.js");
            page.open('https://' + $dsWorld + '.die-staemme.de/interface.php?func=get_unit_info');
            phantom.waitFor(function() {return !page.loading;});
            var content = page.content;

            //<editor-fold desc="Spear">
            var matches = content.match(/<build_time>[0-9.]*<\/build_time>/);
            this.spear_build_time = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
            matches = content.match(/<wood>[0-9.]*<\/wood>/);
            this.spear_wood = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
            matches = content.match(/<stone>[0-9.]*<\/stone>/);
            this.spear_stone = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
            matches = content.match(/<iron>[0-9.]*<\/iron>/);
            this.spear_iron = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
            matches = content.match(/<pop>[0-9.]*<\/pop>/);
            this.spear_pop = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
            matches = content.match(/<speed>[0-9.]*<\/speed>/);
            this.spear_speed = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
            matches = content.match(/<attack>[0-9.]*<\/attack>/);
            this.spear_attack = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
            matches = content.match(/<defense>[0-9.]*<\/defense>/);
            this.spear_defense = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
            matches = content.match(/<defense_cavalry>[0-9.]*<\/defense_cavalry>/);
            this.spear_defense_cavalry = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
            matches = content.match(/<defense_archer>[0-9.]*<\/defense_archer>/);
            this.spear_defense_archer = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
            matches = content.match(/<carry>[0-9.]*<\/carry>/);
            this.spear_carry = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
            //</editor-fold>

            //<editor-fold desc="Sword">
            content = content.substr(content.indexOf('<sword>'));
            matches = content.match(/<build_time>[0-9.]*<\/build_time>/);
            this.sword_build_time = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
            matches = content.match(/<wood>[0-9.]*<\/wood>/);
            this.sword_wood = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
            matches = content.match(/<stone>[0-9.]*<\/stone>/);
            this.sword_stone = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
            matches = content.match(/<iron>[0-9.]*<\/iron>/);
            this.sword_iron = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
            matches = content.match(/<pop>[0-9.]*<\/pop>/);
            this.sword_pop = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
            matches = content.match(/<speed>[0-9.]*<\/speed>/);
            this.sword_speed = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
            matches = content.match(/<attack>[0-9.]*<\/attack>/);
            this.sword_attack = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
            matches = content.match(/<defense>[0-9.]*<\/defense>/);
            this.sword_defense = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
            matches = content.match(/<defense_cavalry>[0-9.]*<\/defense_cavalry>/);
            this.sword_defense_cavalry = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
            matches = content.match(/<defense_archer>[0-9.]*<\/defense_archer>/);
            this.sword_defense_archer = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
            matches = content.match(/<carry>[0-9.]*<\/carry>/);
            this.sword_carry = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
            //</editor-fold>

            //<editor-fold desc="Axe">
            content = content.substr(content.indexOf('<axe>'));
            matches = content.match(/<build_time>[0-9.]*<\/build_time>/);
            this.axe_build_time = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
            matches = content.match(/<wood>[0-9.]*<\/wood>/);
            this.axe_wood = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
            matches = content.match(/<stone>[0-9.]*<\/stone>/);
            this.axe_stone = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
            matches = content.match(/<iron>[0-9.]*<\/iron>/);
            this.axe_iron = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
            matches = content.match(/<pop>[0-9.]*<\/pop>/);
            this.axe_pop = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
            matches = content.match(/<speed>[0-9.]*<\/speed>/);
            this.axe_speed = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
            matches = content.match(/<attack>[0-9.]*<\/attack>/);
            this.axe_attack = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
            matches = content.match(/<defense>[0-9.]*<\/defense>/);
            this.axe_defense = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
            matches = content.match(/<defense_cavalry>[0-9.]*<\/defense_cavalry>/);
            this.axe_defense_cavalry = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
            matches = content.match(/<defense_archer>[0-9.]*<\/defense_archer>/);
            this.axe_defense_archer = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
            matches = content.match(/<carry>[0-9.]*<\/carry>/);
            this.axe_carry = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
            //</editor-fold>

            //<editor-fold desc="Archer">
            if (WorldConfig.archer != 0) {
                content = content.substr(content.indexOf('<archer>'));
                matches = content.match(/<build_time>[0-9.]*<\/build_time>/);
                this.archer_build_time = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
                matches = content.match(/<wood>[0-9.]*<\/wood>/);
                this.archer_wood = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
                matches = content.match(/<stone>[0-9.]*<\/stone>/);
                this.archer_stone = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
                matches = content.match(/<iron>[0-9.]*<\/iron>/);
                this.archer_iron = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
                matches = content.match(/<pop>[0-9.]*<\/pop>/);
                this.archer_pop = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
                matches = content.match(/<speed>[0-9.]*<\/speed>/);
                this.archer_speed = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
                matches = content.match(/<attack>[0-9.]*<\/attack>/);
                this.archer_attack = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
                matches = content.match(/<defense>[0-9.]*<\/defense>/);
                this.archer_defense = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
                matches = content.match(/<defense_cavalry>[0-9.]*<\/defense_cavalry>/);
                this.archer_defense_cavalry = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
                matches = content.match(/<defense_archer>[0-9.]*<\/defense_archer>/);
                this.archer_defense_archer = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
                matches = content.match(/<carry>[0-9.]*<\/carry>/);
                this.archer_carry = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
            }
            //</editor-fold>

            //<editor-fold desc="Spy">
            content = content.substr(content.indexOf('<spy>'));
            matches = content.match(/<build_time>[0-9.]*<\/build_time>/);
            this.spy_build_time = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
            matches = content.match(/<wood>[0-9.]*<\/wood>/);
            this.spy_wood = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
            matches = content.match(/<stone>[0-9.]*<\/stone>/);
            this.spy_stone = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
            matches = content.match(/<iron>[0-9.]*<\/iron>/);
            this.spy_iron = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
            matches = content.match(/<pop>[0-9.]*<\/pop>/);
            this.spy_pop = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
            matches = content.match(/<speed>[0-9.]*<\/speed>/);
            this.spy_speed = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
            matches = content.match(/<attack>[0-9.]*<\/attack>/);
            this.spy_attack = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
            matches = content.match(/<defense>[0-9.]*<\/defense>/);
            this.spy_defense = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
            matches = content.match(/<defense_cavalry>[0-9.]*<\/defense_cavalry>/);
            this.spy_defense_cavalry = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
            matches = content.match(/<defense_archer>[0-9.]*<\/defense_archer>/);
            this.spy_defense_archer = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
            matches = content.match(/<carry>[0-9.]*<\/carry>/);
            this.spy_carry = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
            //</editor-fold>

            //<editor-fold desc="Light">
            content = content.substr(content.indexOf('<light>'));
            matches = content.match(/<build_time>[0-9.]*<\/build_time>/);
            this.light_build_time = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
            matches = content.match(/<wood>[0-9.]*<\/wood>/);
            this.light_wood = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
            matches = content.match(/<stone>[0-9.]*<\/stone>/);
            this.light_stone = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
            matches = content.match(/<iron>[0-9.]*<\/iron>/);
            this.light_iron = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
            matches = content.match(/<pop>[0-9.]*<\/pop>/);
            this.light_pop = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
            matches = content.match(/<speed>[0-9.]*<\/speed>/);
            this.light_speed = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
            matches = content.match(/<attack>[0-9.]*<\/attack>/);
            this.light_attack = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
            matches = content.match(/<defense>[0-9.]*<\/defense>/);
            this.light_defense = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
            matches = content.match(/<defense_cavalry>[0-9.]*<\/defense_cavalry>/);
            this.light_defense_cavalry = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
            matches = content.match(/<defense_archer>[0-9.]*<\/defense_archer>/);
            this.light_defense_archer = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
            matches = content.match(/<carry>[0-9.]*<\/carry>/);
            this.light_carry = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
            //</editor-fold>

            //<editor-fold desc="Marcher">
            if (WorldConfig.archer != 0) {
                content = content.substr(content.indexOf('<marcher>'));
                matches = content.match(/<build_time>[0-9.]*<\/build_time>/);
                this.marcher_build_time = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
                matches = content.match(/<wood>[0-9.]*<\/wood>/);
                this.marcher_wood = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
                matches = content.match(/<stone>[0-9.]*<\/stone>/);
                this.marcher_stone = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
                matches = content.match(/<iron>[0-9.]*<\/iron>/);
                this.marcher_iron = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
                matches = content.match(/<pop>[0-9.]*<\/pop>/);
                this.marcher_pop = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
                matches = content.match(/<speed>[0-9.]*<\/speed>/);
                this.marcher_speed = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
                matches = content.match(/<attack>[0-9.]*<\/attack>/);
                this.marcher_attack = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
                matches = content.match(/<defense>[0-9.]*<\/defense>/);
                this.marcher_defense = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
                matches = content.match(/<defense_cavalry>[0-9.]*<\/defense_cavalry>/);
                this.marcher_defense_cavalry = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
                matches = content.match(/<defense_archer>[0-9.]*<\/defense_archer>/);
                this.marcher_defense_archer = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
                matches = content.match(/<carry>[0-9.]*<\/carry>/);
                this.marcher_carry = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
            }
            //</editor-fold>

            //<editor-fold desc="Heavy">
            content = content.substr(content.indexOf('<heavy>'));
            matches = content.match(/<build_time>[0-9.]*<\/build_time>/);
            this.heavy_build_time = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
            matches = content.match(/<wood>[0-9.]*<\/wood>/);
            this.heavy_wood = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
            matches = content.match(/<stone>[0-9.]*<\/stone>/);
            this.heavy_stone = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
            matches = content.match(/<iron>[0-9.]*<\/iron>/);
            this.heavy_iron = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
            matches = content.match(/<pop>[0-9.]*<\/pop>/);
            this.heavy_pop = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
            matches = content.match(/<speed>[0-9.]*<\/speed>/);
            this.heavy_speed = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
            matches = content.match(/<attack>[0-9.]*<\/attack>/);
            this.heavy_attack = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
            matches = content.match(/<defense>[0-9.]*<\/defense>/);
            this.heavy_defense = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
            matches = content.match(/<defense_cavalry>[0-9.]*<\/defense_cavalry>/);
            this.heavy_defense_cavalry = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
            matches = content.match(/<defense_archer>[0-9.]*<\/defense_archer>/);
            this.heavy_defense_archer = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
            matches = content.match(/<carry>[0-9.]*<\/carry>/);
            this.heavy_carry = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
            //</editor-fold>

            //<editor-fold desc="Ram">
            content = content.substr(content.indexOf('<ram>'));
            matches = content.match(/<build_time>[0-9.]*<\/build_time>/);
            this.ram_build_time = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
            matches = content.match(/<wood>[0-9.]*<\/wood>/);
            this.ram_wood = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
            matches = content.match(/<stone>[0-9.]*<\/stone>/);
            this.ram_stone = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
            matches = content.match(/<iron>[0-9.]*<\/iron>/);
            this.ram_iron = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
            matches = content.match(/<pop>[0-9.]*<\/pop>/);
            this.ram_pop = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
            matches = content.match(/<speed>[0-9.]*<\/speed>/);
            this.ram_speed = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
            matches = content.match(/<attack>[0-9.]*<\/attack>/);
            this.ram_attack = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
            matches = content.match(/<defense>[0-9.]*<\/defense>/);
            this.ram_defense = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
            matches = content.match(/<defense_cavalry>[0-9.]*<\/defense_cavalry>/);
            this.ram_defense_cavalry = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
            matches = content.match(/<defense_archer>[0-9.]*<\/defense_archer>/);
            this.ram_defense_archer = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
            matches = content.match(/<carry>[0-9.]*<\/carry>/);
            this.ram_carry = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
            //</editor-fold>

            //<editor-fold desc="Catapult">
            content = content.substr(content.indexOf('<catapult>'));
            matches = content.match(/<build_time>[0-9.]*<\/build_time>/);
            this.catapult_build_time = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
            matches = content.match(/<wood>[0-9.]*<\/wood>/);
            this.catapult_wood = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
            matches = content.match(/<stone>[0-9.]*<\/stone>/);
            this.catapult_stone = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
            matches = content.match(/<iron>[0-9.]*<\/iron>/);
            this.catapult_iron = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
            matches = content.match(/<pop>[0-9.]*<\/pop>/);
            this.catapult_pop = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
            matches = content.match(/<speed>[0-9.]*<\/speed>/);
            this.catapult_speed = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
            matches = content.match(/<attack>[0-9.]*<\/attack>/);
            this.catapult_attack = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
            matches = content.match(/<defense>[0-9.]*<\/defense>/);
            this.catapult_defense = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
            matches = content.match(/<defense_cavalry>[0-9.]*<\/defense_cavalry>/);
            this.catapult_defense_cavalry = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
            matches = content.match(/<defense_archer>[0-9.]*<\/defense_archer>/);
            this.catapult_defense_archer = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
            matches = content.match(/<carry>[0-9.]*<\/carry>/);
            this.catapult_carry = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
            //</editor-fold>

            //<editor-fold desc="Knight">
            if (WorldConfig.knight != 0) {
                content = content.substr(content.indexOf('<knight>'));
                matches = content.match(/<build_time>[0-9.]*<\/build_time>/);
                this.knight_build_time = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
                matches = content.match(/<wood>[0-9.]*<\/wood>/);
                this.knight_wood = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
                matches = content.match(/<stone>[0-9.]*<\/stone>/);
                this.knight_stone = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
                matches = content.match(/<iron>[0-9.]*<\/iron>/);
                this.knight_iron = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
                matches = content.match(/<pop>[0-9.]*<\/pop>/);
                this.knight_pop = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
                matches = content.match(/<speed>[0-9.]*<\/speed>/);
                this.knight_speed = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
                matches = content.match(/<attack>[0-9.]*<\/attack>/);
                this.knight_attack = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
                matches = content.match(/<defense>[0-9.]*<\/defense>/);
                this.knight_defense = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
                matches = content.match(/<defense_cavalry>[0-9.]*<\/defense_cavalry>/);
                this.knight_defense_cavalry = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
                matches = content.match(/<defense_archer>[0-9.]*<\/defense_archer>/);
                this.knight_defense_archer = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
                matches = content.match(/<carry>[0-9.]*<\/carry>/);
                this.knight_carry = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
            }
            //</editor-fold>

            //<editor-fold desc="Snob">
            content = content.substr(content.indexOf('<snob>'));
            matches = content.match(/<build_time>[0-9.]*<\/build_time>/);
            this.snob_build_time = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
            matches = content.match(/<wood>[0-9.]*<\/wood>/);
            this.snob_wood = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
            matches = content.match(/<stone>[0-9.]*<\/stone>/);
            this.snob_stone = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
            matches = content.match(/<iron>[0-9.]*<\/iron>/);
            this.snob_iron = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
            matches = content.match(/<pop>[0-9.]*<\/pop>/);
            this.snob_pop = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
            matches = content.match(/<speed>[0-9.]*<\/speed>/);
            this.snob_speed = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
            matches = content.match(/<attack>[0-9.]*<\/attack>/);
            this.snob_attack = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
            matches = content.match(/<defense>[0-9.]*<\/defense>/);
            this.snob_defense = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
            matches = content.match(/<defense_cavalry>[0-9.]*<\/defense_cavalry>/);
            this.snob_defense_cavalry = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
            matches = content.match(/<defense_archer>[0-9.]*<\/defense_archer>/);
            this.snob_defense_archer = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
            matches = content.match(/<carry>[0-9.]*<\/carry>/);
            this.snob_carry = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
            //</editor-fold>

            //<editor-fold desc="Militia">
            content = content.substr(content.indexOf('<militia>'));
            matches = content.match(/<build_time>[0-9.]*<\/build_time>/);
            this.militia_build_time = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
            matches = content.match(/<wood>[0-9.]*<\/wood>/);
            this.militia_wood = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
            matches = content.match(/<stone>[0-9.]*<\/stone>/);
            this.militia_stone = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
            matches = content.match(/<iron>[0-9.]*<\/iron>/);
            this.militia_iron = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
            matches = content.match(/<pop>[0-9.]*<\/pop>/);
            this.militia_pop = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
            matches = content.match(/<speed>[0-9.]*<\/speed>/);
            this.militia_speed = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
            matches = content.match(/<attack>[0-9.]*<\/attack>/);
            this.militia_attack = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
            matches = content.match(/<defense>[0-9.]*<\/defense>/);
            this.militia_defense = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
            matches = content.match(/<defense_cavalry>[0-9.]*<\/defense_cavalry>/);
            this.militia_defense_cavalry = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
            matches = content.match(/<defense_archer>[0-9.]*<\/defense_archer>/);
            this.militia_defense_archer = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
            matches = content.match(/<carry>[0-9.]*<\/carry>/);
            this.militia_carry = matches[0].substr(matches[0].indexOf('>') + 1, matches[0].lastIndexOf('<') - matches[0].indexOf('>') - 1);
            //</editor-fold>
        },
        readFromFile : function ($path) {
            Logger.log(Logger.LogLevel.INFO, "Reading unit info from file...", "readFromFile()", "database/UnitInfo.js");
            try {
                var fs = require('fs');
                var stream  = fs.open($path, 'r');

                while(!stream.atEnd()) {
                    var line = stream.readLine();
                    switch (line.substring(0, line.indexOf(" "))) {
                        case "spear_wood":
                            this.spear_wood = line.substring(line.indexOf("=") + 2);
                            break;
                        case "spear_stone":
                            this.spear_stone = line.substring(line.indexOf("=") + 2);
                            break;
                        case "spear_iron":
                            this.spear_iron = line.substring(line.indexOf("=") + 2);
                            break;
                        case "spear_pop":
                            this.spear_pop = line.substring(line.indexOf("=") + 2);
                            break;
                        case "spear_speed":
                            this.spear_speed = line.substring(line.indexOf("=") + 2);
                            break;
                        case "spear_attack":
                            this.spear_attack = line.substring(line.indexOf("=") + 2);
                            break;
                        case "spear_defense":
                            this.spear_defense = line.substring(line.indexOf("=") + 2);
                            break;
                        case "spear_defense_cavalry":
                            this.spear_defense_cavalry = line.substring(line.indexOf("=") + 2);
                            break;
                        case "spear_defense_archer":
                            this.spear_defense_archer = line.substring(line.indexOf("=") + 2);
                            break;
                        case "spear_carry":
                            this.spear_carry = line.substring(line.indexOf("=") + 2);
                            break;
                        case "spear_build_time":
                            this.spear_build_time = line.substring(line.indexOf("=") + 2);
                            break;

                        case "sword_wood":
                            this.sword_wood = line.substring(line.indexOf("=") + 2);
                            break;
                        case "sword_stone":
                            this.sword_stone = line.substring(line.indexOf("=") + 2);
                            break;
                        case "sword_iron":
                            this.sword_iron = line.substring(line.indexOf("=") + 2);
                            break;
                        case "sword_pop":
                            this.sword_pop = line.substring(line.indexOf("=") + 2);
                            break;
                        case "sword_speed":
                            this.sword_speed = line.substring(line.indexOf("=") + 2);
                            break;
                        case "sword_attack":
                            this.sword_attack = line.substring(line.indexOf("=") + 2);
                            break;
                        case "sword_defense":
                            this.sword_defense = line.substring(line.indexOf("=") + 2);
                            break;
                        case "sword_defense_cavalry":
                            this.sword_defense_cavalry = line.substring(line.indexOf("=") + 2);
                            break;
                        case "sword_defense_archer":
                            this.sword_defense_archer = line.substring(line.indexOf("=") + 2);
                            break;
                        case "sword_carry":
                            this.sword_carry = line.substring(line.indexOf("=") + 2);
                            break;
                        case "sword_build_time":
                            this.sword_build_time = line.substring(line.indexOf("=") + 2);
                            break;

                        case "axe_wood":
                            this.axe_wood = line.substring(line.indexOf("=") + 2);
                            break;
                        case "axe_stone":
                            this.axe_stone = line.substring(line.indexOf("=") + 2);
                            break;
                        case "axe_iron":
                            this.axe_iron = line.substring(line.indexOf("=") + 2);
                            break;
                        case "axe_pop":
                            this.axe_pop = line.substring(line.indexOf("=") + 2);
                            break;
                        case "axe_speed":
                            this.axe_speed = line.substring(line.indexOf("=") + 2);
                            break;
                        case "axe_attack":
                            this.axe_attack = line.substring(line.indexOf("=") + 2);
                            break;
                        case "axe_defense":
                            this.axe_defense = line.substring(line.indexOf("=") + 2);
                            break;
                        case "axe_defense_cavalry":
                            this.axe_defense_cavalry = line.substring(line.indexOf("=") + 2);
                            break;
                        case "axe_defense_archer":
                            this.axe_defense_archer = line.substring(line.indexOf("=") + 2);
                            break;
                        case "axe_carry":
                            this.axe_carry = line.substring(line.indexOf("=") + 2);
                            break;
                        case "axe_build_time":
                            this.axe_build_time = line.substring(line.indexOf("=") + 2);
                            break;

                        case "archer_wood":
                            this.archer_wood = line.substring(line.indexOf("=") + 2);
                            break;
                        case "archer_stone":
                            this.archer_stone = line.substring(line.indexOf("=") + 2);
                            break;
                        case "archer_iron":
                            this.archer_iron = line.substring(line.indexOf("=") + 2);
                            break;
                        case "archer_pop":
                            this.archer_pop = line.substring(line.indexOf("=") + 2);
                            break;
                        case "archer_speed":
                            this.archer_speed = line.substring(line.indexOf("=") + 2);
                            break;
                        case "archer_attack":
                            this.archer_attack = line.substring(line.indexOf("=") + 2);
                            break;
                        case "archer_defense":
                            this.archer_defense = line.substring(line.indexOf("=") + 2);
                            break;
                        case "archer_defense_cavalry":
                            this.archer_defense_cavalry = line.substring(line.indexOf("=") + 2);
                            break;
                        case "archer_defense_archer":
                            this.archer_defense_archer = line.substring(line.indexOf("=") + 2);
                            break;
                        case "archer_carry":
                            this.archer_carry = line.substring(line.indexOf("=") + 2);
                            break;
                        case "archer_build_time":
                            this.archer_build_time = line.substring(line.indexOf("=") + 2);
                            break;

                        case "spy_wood":
                            this.spy_wood = line.substring(line.indexOf("=") + 2);
                            break;
                        case "spy_stone":
                            this.spy_stone = line.substring(line.indexOf("=") + 2);
                            break;
                        case "spy_iron":
                            this.spy_iron = line.substring(line.indexOf("=") + 2);
                            break;
                        case "spy_pop":
                            this.spy_pop = line.substring(line.indexOf("=") + 2);
                            break;
                        case "spy_speed":
                            this.spy_speed = line.substring(line.indexOf("=") + 2);
                            break;
                        case "spy_attack":
                            this.spy_attack = line.substring(line.indexOf("=") + 2);
                            break;
                        case "spy_defense":
                            this.spy_defense = line.substring(line.indexOf("=") + 2);
                            break;
                        case "spy_defense_cavalry":
                            this.spy_defense_cavalry = line.substring(line.indexOf("=") + 2);
                            break;
                        case "spy_defense_archer":
                            this.spy_defense_archer = line.substring(line.indexOf("=") + 2);
                            break;
                        case "spy_carry":
                            this.spy_carry = line.substring(line.indexOf("=") + 2);
                            break;
                        case "spy_build_time":
                            this.spy_build_time = line.substring(line.indexOf("=") + 2);
                            break;

                        case "light_wood":
                            this.light_wood = line.substring(line.indexOf("=") + 2);
                            break;
                        case "light_stone":
                            this.light_stone = line.substring(line.indexOf("=") + 2);
                            break;
                        case "light_iron":
                            this.light_iron = line.substring(line.indexOf("=") + 2);
                            break;
                        case "light_pop":
                            this.light_pop = line.substring(line.indexOf("=") + 2);
                            break;
                        case "light_speed":
                            this.light_speed = line.substring(line.indexOf("=") + 2);
                            break;
                        case "light_attack":
                            this.light_attack = line.substring(line.indexOf("=") + 2);
                            break;
                        case "light_defense":
                            this.light_defense = line.substring(line.indexOf("=") + 2);
                            break;
                        case "light_defense_cavalry":
                            this.light_defense_cavalry = line.substring(line.indexOf("=") + 2);
                            break;
                        case "light_defense_archer":
                            this.light_defense_archer = line.substring(line.indexOf("=") + 2);
                            break;
                        case "light_carry":
                            this.light_carry = line.substring(line.indexOf("=") + 2);
                            break;
                        case "light_build_time":
                            this.light_build_time = line.substring(line.indexOf("=") + 2);
                            break;

                        case "marcher_wood":
                            this.marcher_wood = line.substring(line.indexOf("=") + 2);
                            break;
                        case "marcher_stone":
                            this.marcher_stone = line.substring(line.indexOf("=") + 2);
                            break;
                        case "marcher_iron":
                            this.marcher_iron = line.substring(line.indexOf("=") + 2);
                            break;
                        case "marcher_pop":
                            this.marcher_pop = line.substring(line.indexOf("=") + 2);
                            break;
                        case "marcher_speed":
                            this.marcher_speed = line.substring(line.indexOf("=") + 2);
                            break;
                        case "marcher_attack":
                            this.marcher_attack = line.substring(line.indexOf("=") + 2);
                            break;
                        case "marcher_defense":
                            this.marcher_defense = line.substring(line.indexOf("=") + 2);
                            break;
                        case "marcher_defense_cavalry":
                            this.marcher_defense_cavalry = line.substring(line.indexOf("=") + 2);
                            break;
                        case "marcher_defense_archer":
                            this.marcher_defense_archer = line.substring(line.indexOf("=") + 2);
                            break;
                        case "marcher_carry":
                            this.marcher_carry = line.substring(line.indexOf("=") + 2);
                            break;
                        case "marcher_build_time":
                            this.marcher_build_time = line.substring(line.indexOf("=") + 2);
                            break;

                        case "heavy_wood":
                            this.heavy_wood = line.substring(line.indexOf("=") + 2);
                            break;
                        case "heavy_stone":
                            this.heavy_stone = line.substring(line.indexOf("=") + 2);
                            break;
                        case "heavy_iron":
                            this.heavy_iron = line.substring(line.indexOf("=") + 2);
                            break;
                        case "heavy_pop":
                            this.heavy_pop = line.substring(line.indexOf("=") + 2);
                            break;
                        case "heavy_speed":
                            this.heavy_speed = line.substring(line.indexOf("=") + 2);
                            break;
                        case "heavy_attack":
                            this.heavy_attack = line.substring(line.indexOf("=") + 2);
                            break;
                        case "heavy_defense":
                            this.heavy_defense = line.substring(line.indexOf("=") + 2);
                            break;
                        case "heavy_defense_cavalry":
                            this.heavy_defense_cavalry = line.substring(line.indexOf("=") + 2);
                            break;
                        case "heavy_defense_archer":
                            this.heavy_defense_archer = line.substring(line.indexOf("=") + 2);
                            break;
                        case "heavy_carry":
                            this.heavy_carry = line.substring(line.indexOf("=") + 2);
                            break;
                        case "heavy_build_time":
                            this.heavy_build_time = line.substring(line.indexOf("=") + 2);
                            break;

                        case "ram_wood":
                            this.ram_wood = line.substring(line.indexOf("=") + 2);
                            break;
                        case "ram_stone":
                            this.ram_stone = line.substring(line.indexOf("=") + 2);
                            break;
                        case "ram_iron":
                            this.ram_iron = line.substring(line.indexOf("=") + 2);
                            break;
                        case "ram_pop":
                            this.ram_pop = line.substring(line.indexOf("=") + 2);
                            break;
                        case "ram_speed":
                            this.ram_speed = line.substring(line.indexOf("=") + 2);
                            break;
                        case "ram_attack":
                            this.ram_attack = line.substring(line.indexOf("=") + 2);
                            break;
                        case "ram_defense":
                            this.ram_defense = line.substring(line.indexOf("=") + 2);
                            break;
                        case "ram_defense_cavalry":
                            this.ram_defense_cavalry = line.substring(line.indexOf("=") + 2);
                            break;
                        case "ram_defense_archer":
                            this.ram_defense_archer = line.substring(line.indexOf("=") + 2);
                            break;
                        case "ram_carry":
                            this.ram_carry = line.substring(line.indexOf("=") + 2);
                            break;
                        case "ram_build_time":
                            this.ram_build_time = line.substring(line.indexOf("=") + 2);
                            break;

                        case "catapult_wood":
                            this.catapult_wood = line.substring(line.indexOf("=") + 2);
                            break;
                        case "catapult_stone":
                            this.catapult_stone = line.substring(line.indexOf("=") + 2);
                            break;
                        case "catapult_iron":
                            this.catapult_iron = line.substring(line.indexOf("=") + 2);
                            break;
                        case "catapult_pop":
                            this.catapult_pop = line.substring(line.indexOf("=") + 2);
                            break;
                        case "catapult_speed":
                            this.catapult_speed = line.substring(line.indexOf("=") + 2);
                            break;
                        case "catapult_attack":
                            this.catapult_attack = line.substring(line.indexOf("=") + 2);
                            break;
                        case "catapult_defense":
                            this.catapult_defense = line.substring(line.indexOf("=") + 2);
                            break;
                        case "catapult_defense_cavalry":
                            this.catapult_defense_cavalry = line.substring(line.indexOf("=") + 2);
                            break;
                        case "catapult_defense_archer":
                            this.catapult_defense_archer = line.substring(line.indexOf("=") + 2);
                            break;
                        case "catapult_carry":
                            this.catapult_carry = line.substring(line.indexOf("=") + 2);
                            break;
                        case "catapult_build_time":
                            this.catapult_build_time = line.substring(line.indexOf("=") + 2);
                            break;

                        case "knight_wood":
                            this.knight_wood = line.substring(line.indexOf("=") + 2);
                            break;
                        case "knight_stone":
                            this.knight_stone = line.substring(line.indexOf("=") + 2);
                            break;
                        case "knight_iron":
                            this.knight_iron = line.substring(line.indexOf("=") + 2);
                            break;
                        case "knight_pop":
                            this.knight_pop = line.substring(line.indexOf("=") + 2);
                            break;
                        case "knight_speed":
                            this.knight_speed = line.substring(line.indexOf("=") + 2);
                            break;
                        case "knight_attack":
                            this.knight_attack = line.substring(line.indexOf("=") + 2);
                            break;
                        case "knight_defense":
                            this.knight_defense = line.substring(line.indexOf("=") + 2);
                            break;
                        case "knight_defense_cavalry":
                            this.knight_defense_cavalry = line.substring(line.indexOf("=") + 2);
                            break;
                        case "knight_defense_archer":
                            this.knight_defense_archer = line.substring(line.indexOf("=") + 2);
                            break;
                        case "knight_carry":
                            this.knight_carry = line.substring(line.indexOf("=") + 2);
                            break;
                        case "knight_build_time":
                            this.knight_build_time = line.substring(line.indexOf("=") + 2);
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
                        case "snob_speed":
                            this.snob_speed = line.substring(line.indexOf("=") + 2);
                            break;
                        case "snob_attack":
                            this.snob_attack = line.substring(line.indexOf("=") + 2);
                            break;
                        case "snob_defense":
                            this.snob_defense = line.substring(line.indexOf("=") + 2);
                            break;
                        case "snob_defense_cavalry":
                            this.snob_defense_cavalry = line.substring(line.indexOf("=") + 2);
                            break;
                        case "snob_defense_archer":
                            this.snob_defense_archer = line.substring(line.indexOf("=") + 2);
                            break;
                        case "snob_carry":
                            this.snob_carry = line.substring(line.indexOf("=") + 2);
                            break;
                        case "snob_build_time":
                            this.snob_build_time = line.substring(line.indexOf("=") + 2);
                            break;
                    }
                }

                stream.close();
            } catch (err) {
                Logger.log(Logger.LogLevel.WARNING, err.name + "->" + err.message, "readFromFile()", "database/UnitInfo.js");
            }
        },
        writeToFile : function ($path) {
            Logger.log(Logger.LogLevel.INFO, "Writing unit info to file...", "writeToFile()", "database/UnitInfo.js");
            try {
                var fs = require('fs');
                var stream = fs.open($path, 'w');

                stream.writeLine('spear_wood = ' + this.spear_wood);
                stream.writeLine('spear_stone = ' + this.spear_stone);
                stream.writeLine('spear_iron = ' + this.spear_iron);
                stream.writeLine('spear_pop = ' + this.spear_pop);
                stream.writeLine('spear_speed = ' + this.spear_speed);
                stream.writeLine('spear_attack = ' + this.spear_attack);
                stream.writeLine('spear_defense = ' + this.spear_defense);
                stream.writeLine('spear_defense_cavalry = ' + this.spear_defense_cavalry);
                stream.writeLine('spear_defense_archer = ' + this.spear_defense_archer);
                stream.writeLine('spear_carry = ' + this.spear_carry);
                stream.writeLine('spear_build_time = ' + this.spear_build_time);

                stream.writeLine('sword_wood = ' + this.sword_wood);
                stream.writeLine('sword_stone = ' + this.sword_stone);
                stream.writeLine('sword_iron = ' + this.sword_iron);
                stream.writeLine('sword_pop = ' + this.sword_pop);
                stream.writeLine('sword_speed = ' + this.sword_speed);
                stream.writeLine('sword_attack = ' + this.sword_attack);
                stream.writeLine('sword_defense = ' + this.sword_defense);
                stream.writeLine('sword_defense_cavalry = ' + this.sword_defense_cavalry);
                stream.writeLine('sword_defense_archer = ' + this.sword_defense_archer);
                stream.writeLine('sword_carry = ' + this.sword_carry);
                stream.writeLine('sword_build_time = ' + this.sword_build_time);

                stream.writeLine('axe_wood = ' + this.axe_wood);
                stream.writeLine('axe_stone = ' + this.axe_stone);
                stream.writeLine('axe_iron = ' + this.axe_iron);
                stream.writeLine('axe_pop = ' + this.axe_pop);
                stream.writeLine('axe_speed = ' + this.axe_speed);
                stream.writeLine('axe_attack = ' + this.axe_attack);
                stream.writeLine('axe_defense = ' + this.axe_defense);
                stream.writeLine('axe_defense_cavalry = ' + this.axe_defense_cavalry);
                stream.writeLine('axe_defense_archer = ' + this.axe_defense_archer);
                stream.writeLine('axe_carry = ' + this.axe_carry);
                stream.writeLine('axe_build_time = ' + this.axe_build_time);

                stream.writeLine('archer_wood = ' + this.archer_wood);
                stream.writeLine('archer_stone = ' + this.archer_stone);
                stream.writeLine('archer_iron = ' + this.archer_iron);
                stream.writeLine('archer_pop = ' + this.archer_pop);
                stream.writeLine('archer_speed = ' + this.archer_speed);
                stream.writeLine('archer_attack = ' + this.archer_attack);
                stream.writeLine('archer_defense = ' + this.archer_defense);
                stream.writeLine('archer_defense_cavalry = ' + this.archer_defense_cavalry);
                stream.writeLine('archer_defense_archer = ' + this.archer_defense_archer);
                stream.writeLine('archer_carry = ' + this.archer_carry);
                stream.writeLine('archer_build_time = ' + this.archer_build_time);

                stream.writeLine('spy_wood = ' + this.spy_wood);
                stream.writeLine('spy_stone = ' + this.spy_stone);
                stream.writeLine('spy_iron = ' + this.spy_iron);
                stream.writeLine('spy_pop = ' + this.spy_pop);
                stream.writeLine('spy_speed = ' + this.spy_speed);
                stream.writeLine('spy_attack = ' + this.spy_attack);
                stream.writeLine('spy_defense = ' + this.spy_defense);
                stream.writeLine('spy_defense_cavalry = ' + this.spy_defense_cavalry);
                stream.writeLine('spy_defense_archer = ' + this.spy_defense_archer);
                stream.writeLine('spy_carry = ' + this.spy_carry);
                stream.writeLine('spy_build_time = ' + this.spy_build_time);

                stream.writeLine('light_wood = ' + this.light_wood);
                stream.writeLine('light_stone = ' + this.light_stone);
                stream.writeLine('light_iron = ' + this.light_iron);
                stream.writeLine('light_pop = ' + this.light_pop);
                stream.writeLine('light_speed = ' + this.light_speed);
                stream.writeLine('light_attack = ' + this.light_attack);
                stream.writeLine('light_defense = ' + this.light_defense);
                stream.writeLine('light_defense_cavalry = ' + this.light_defense_cavalry);
                stream.writeLine('light_defense_archer = ' + this.light_defense_archer);
                stream.writeLine('light_carry = ' + this.light_carry);
                stream.writeLine('light_build_time = ' + this.light_build_time);

                stream.writeLine('marcher_wood = ' + this.marcher_wood);
                stream.writeLine('marcher_stone = ' + this.marcher_stone);
                stream.writeLine('marcher_iron = ' + this.marcher_iron);
                stream.writeLine('marcher_pop = ' + this.marcher_pop);
                stream.writeLine('marcher_speed = ' + this.marcher_speed);
                stream.writeLine('marcher_attack = ' + this.marcher_attack);
                stream.writeLine('marcher_defense = ' + this.marcher_defense);
                stream.writeLine('marcher_defense_cavalry = ' + this.marcher_defense_cavalry);
                stream.writeLine('marcher_defense_archer = ' + this.marcher_defense_archer);
                stream.writeLine('marcher_carry = ' + this.marcher_carry);
                stream.writeLine('marcher_build_time = ' + this.marcher_build_time);

                stream.writeLine('heavy_wood = ' + this.heavy_wood);
                stream.writeLine('heavy_stone = ' + this.heavy_stone);
                stream.writeLine('heavy_iron = ' + this.heavy_iron);
                stream.writeLine('heavy_pop = ' + this.heavy_pop);
                stream.writeLine('heavy_speed = ' + this.heavy_speed);
                stream.writeLine('heavy_attack = ' + this.heavy_attack);
                stream.writeLine('heavy_defense = ' + this.heavy_defense);
                stream.writeLine('heavy_defense_cavalry = ' + this.heavy_defense_cavalry);
                stream.writeLine('heavy_defense_archer = ' + this.heavy_defense_archer);
                stream.writeLine('heavy_carry = ' + this.heavy_carry);
                stream.writeLine('heavy_build_time = ' + this.heavy_build_time);

                stream.writeLine('ram_wood = ' + this.ram_wood);
                stream.writeLine('ram_stone = ' + this.ram_stone);
                stream.writeLine('ram_iron = ' + this.ram_iron);
                stream.writeLine('ram_pop = ' + this.ram_pop);
                stream.writeLine('ram_speed = ' + this.ram_speed);
                stream.writeLine('ram_attack = ' + this.ram_attack);
                stream.writeLine('ram_defense = ' + this.ram_defense);
                stream.writeLine('ram_defense_cavalry = ' + this.ram_defense_cavalry);
                stream.writeLine('ram_defense_archer = ' + this.ram_defense_archer);
                stream.writeLine('ram_carry = ' + this.ram_carry);
                stream.writeLine('ram_build_time = ' + this.ram_build_time);

                stream.writeLine('catapult_wood = ' + this.catapult_wood);
                stream.writeLine('catapult_stone = ' + this.catapult_stone);
                stream.writeLine('catapult_iron = ' + this.catapult_iron);
                stream.writeLine('catapult_pop = ' + this.catapult_pop);
                stream.writeLine('catapult_speed = ' + this.catapult_speed);
                stream.writeLine('catapult_attack = ' + this.catapult_attack);
                stream.writeLine('catapult_defense = ' + this.catapult_defense);
                stream.writeLine('catapult_defense_cavalry = ' + this.catapult_defense_cavalry);
                stream.writeLine('catapult_defense_archer = ' + this.catapult_defense_archer);
                stream.writeLine('catapult_carry = ' + this.catapult_carry);
                stream.writeLine('catapult_build_time = ' + this.catapult_build_time);

                stream.writeLine('knight_wood = ' + this.knight_wood);
                stream.writeLine('knight_stone = ' + this.knight_stone);
                stream.writeLine('knight_iron = ' + this.knight_iron);
                stream.writeLine('knight_pop = ' + this.knight_pop);
                stream.writeLine('knight_speed = ' + this.knight_speed);
                stream.writeLine('knight_attack = ' + this.knight_attack);
                stream.writeLine('knight_defense = ' + this.knight_defense);
                stream.writeLine('knight_defense_cavalry = ' + this.knight_defense_cavalry);
                stream.writeLine('knight_defense_archer = ' + this.knight_defense_archer);
                stream.writeLine('knight_carry = ' + this.knight_carry);
                stream.writeLine('knight_build_time = ' + this.knight_build_time);

                stream.writeLine('snob_wood = ' + this.snob_wood);
                stream.writeLine('snob_stone = ' + this.snob_stone);
                stream.writeLine('snob_iron = ' + this.snob_iron);
                stream.writeLine('snob_pop = ' + this.snob_pop);
                stream.writeLine('snob_speed = ' + this.snob_speed);
                stream.writeLine('snob_attack = ' + this.snob_attack);
                stream.writeLine('snob_defense = ' + this.snob_defense);
                stream.writeLine('snob_defense_cavalry = ' + this.snob_defense_cavalry);
                stream.writeLine('snob_defense_archer = ' + this.snob_defense_archer);
                stream.writeLine('snob_carry = ' + this.snob_carry);
                stream.writeLine('snob_build_time = ' + this.snob_build_time);

                stream.close();
            } catch (err) {
                Logger.log(Logger.LogLevel.WARNING, err.name + "->" + err.message, "writeToFile()", "database/UnitInfo.js");
            }
        }
    };