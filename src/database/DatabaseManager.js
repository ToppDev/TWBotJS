Logger.log(Logger.LogLevel.DEBUG, "Loading database/DatabaseManager.js", "()", "database/DatabaseManager.js");

var DatabaseManager = DatabaseManager || {
        init : function ($dsWorld) {
            var fs = require('fs');
            if (fs.exists(fs.absolute(".") + "/worldFiles/" + $dsWorld + "_worldConfig.txt"))
                WorldConfig.readFromFile(fs.absolute(".") + "/worldFiles/" + $dsWorld + "_worldConfig.txt");
            else
                WorldConfig.downloadFromWeb($dsWorld);

            if (fs.exists(fs.absolute(".") + "/worldFiles/" + $dsWorld + "_buildingInfo.txt"))
                BuildingInfo.readFromFile(fs.absolute(".") + "/worldFiles/" + $dsWorld + "_buildingInfo.txt");
            else
                BuildingInfo.downloadFromWeb($dsWorld);

            if (fs.exists(fs.absolute(".") + "/worldFiles/" + $dsWorld + "_unitInfo.txt"))
                UnitInfo.readFromFile(fs.absolute(".") + "/worldFiles/" + $dsWorld + "_unitInfo.txt");
            else
                UnitInfo.downloadFromWeb($dsWorld);
            
            if (fs.exists(fs.absolute(".") + "/worldFiles/" + $dsWorld + "_foreignPlayers.txt"))
                ForeignPlayer.readFromFile(fs.absolute(".") + "/worldFiles/" + $dsWorld + "_foreignPlayers.txt");

            if (fs.exists(fs.absolute(".") + "/worldFiles/" + $dsWorld + "_foreignVillages.txt"))
                ForeignVillage.readFromFile(fs.absolute(".") + "/worldFiles/" + $dsWorld + "_foreignVillages.txt");

            if (fs.exists(fs.absolute(".") + "/worldFiles/" + $dsWorld + "_tasks.txt"))
                Task.readFromFile(fs.absolute(".") + "/worldFiles/" + $dsWorld + "_tasks.txt");

            this.update($dsWorld);
        },
        update : function($dsWorld) {
            if (new Date().getTime() >= WorldConfig.lastDatabaseUpdateDate + WorldConfig.databaseUpdateInterval) {
                ForeignPlayer.downloadFromWeb($dsWorld);
                ForeignVillage.downloadFromWeb($dsWorld);
                WorldConfig.lastDatabaseUpdateDate = new Date().getTime();
            }
        },
        close : function($dsWorld) {
            var fs = require('fs');

            if (!fs.exists(fs.absolute(".") + "/worldFiles"))
                fs.makeDirectory(fs.absolute(".") + "/worldFiles");

            WorldConfig.writeToFile(fs.absolute(".") + "/worldFiles/" + $dsWorld + "_worldConfig.txt");
            BuildingInfo.writeToFile(fs.absolute(".") + "/worldFiles/" + $dsWorld + "_buildingInfo.txt");
            UnitInfo.writeToFile(fs.absolute(".") + "/worldFiles/" + $dsWorld + "_unitInfo.txt");
            ForeignPlayer.writeToFile(fs.absolute(".") + "/worldFiles/" + $dsWorld + "_foreignPlayers.txt");
            ForeignVillage.writeToFile(fs.absolute(".") + "/worldFiles/" + $dsWorld + "_foreignVillages.txt");
            Task.writeToFile(fs.absolute(".") + "/worldFiles/" + $dsWorld + "_tasks.txt");
        }
    };

phantom.injectJs('database/WorldConfig.js');
phantom.injectJs('database/BuildingInfo.js');
phantom.injectJs('database/UnitInfo.js');
phantom.injectJs('database/PlayerVillage.js');
phantom.injectJs('database/ForeignPlayer.js');
phantom.injectJs('database/ForeignVillage.js');
phantom.injectJs('database/BuildEvent.js');
phantom.injectJs('database/RecruitEvent.js');
phantom.injectJs('database/ReturnCommandEvent.js');
phantom.injectJs('database/Task.js');