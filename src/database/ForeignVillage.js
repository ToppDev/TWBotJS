Logger.log(Logger.LogLevel.DEBUG, "Loading database/ForeignVillage.js", "()", "database/ForeignVillage.js");

ForeignVillage = function ($id, $x, $y) {
    //<editor-fold desc="Private variables">

    //</editor-fold>

    //<editor-fold desc="Public variables">
    this.id = $id;
    this.x = $x;
    this.y = $y;
    this.name = '';
    this.player = 0;
    this.points = 0;
    this.bonus_wood = 0;
    this.bonus_stone = 0;
    this.bonus_iron = 0;
    this.bonus_resources = 0;
    this.bonus_storage = 0;

    this.res_wood = 0;
    this.res_stone = 0;
    this.res_iron = 0;
    this.res_updateDate = 0;

    this.main_level = BuildingInfo.main_min_level;
    this.barracks_level = BuildingInfo.barracks_min_level;
    this.stable_level = BuildingInfo.stable_min_level;
    this.garage_level = BuildingInfo.garage_min_level;
    this.church_level = BuildingInfo.church_min_level;
    this.church_f_level = BuildingInfo.church_f_min_level;
    this.snob_level = BuildingInfo.snob_min_level;
    this.smith_level = BuildingInfo.smith_min_level;
    this.place_level = BuildingInfo.place_min_level;
    this.statue_level = BuildingInfo.statue_min_level;
    this.market_level = BuildingInfo.market_min_level;
    this.wood_level = BuildingInfo.wood_min_level;
    this.stone_level = BuildingInfo.stone_min_level;
    this.iron_level = BuildingInfo.iron_min_level;
    this.farm_level = BuildingInfo.farm_min_level;
    this.storage_level = BuildingInfo.storage_min_level;
    this.hide_level = BuildingInfo.hide_min_level;
    this.wall_level = BuildingInfo.wall_min_level;

    this.farmTroopsArrivingTime = 0;

    this.farmFlagType = TWHelper.FarmFlagType.NONE;
    this.farmFlagValue = 0;
    //</editor-fold>

    //<editor-fold desc="Private Methods">


    //</editor-fold>

    //<editor-fold desc="Public Methods">

    //</editor-fold>
};

var foreignVillages = [];

ForeignVillage.getVillage = function($id) {
    for (var i = 0; i < foreignVillages.length; i++) {
        if (foreignVillages[i].id == $id)
            return foreignVillages[i];
    }
    return -1;
};

ForeignVillage.getIndex = function($id) {
    for (var i = 0; i < foreignVillages.length; i++) {
        if (foreignVillages[i].id == $id)
            return i;
    }
    return -1;
};

ForeignVillage.removeVillage = function($id) {
    var index = this.getIndex($id);
    if (index != -1)
        foreignVillages.splice(index, 1);
};

ForeignVillage.downloadFromWeb = function($dsWorld) {
    Logger.log(Logger.LogLevel.INFO, "Downloading Village List...", "downloadFromWeb()", "database/ForeignVillage.js");
    page.open('https://' + $dsWorld + '.die-staemme.de/map/village.txt');
    phantom.waitFor(function() {return !page.loading;});
    var content = page.plainText;

    // $id, $name, $x, $y, $player, $points, $rank
    while (content.contains(',')) {
        var id = content.substr(0, content.indexOf(','));
        content = content.substr(content.indexOf(',') + 1);
        var name = content.substr(0, content.indexOf(','));
        content = content.substr(content.indexOf(',') + 1);
        var x = content.substr(0, content.indexOf(','));
        content = content.substr(content.indexOf(',') + 1);
        var y = content.substr(0, content.indexOf(','));
        content = content.substr(content.indexOf(',') + 1);
        var player = content.substr(0, content.indexOf(','));
        content = content.substr(content.indexOf(',') + 1);
        var points = content.substr(0, content.indexOf(','));
        if (content.contains('\n'))
            content = content.substr(content.indexOf('\n') + 1);
        else
            content = content.substr(content.indexOf(',') + 1);

        name = name.replace("+", " ")
            .replace("%C2%AB", "«")
            .replace("%C2%BB", "»")
            .replace("%C2%B2", "²")
            .replace("%C2%B3", "³")
            .replace("%C3%B6", "ö")
            .replace("%C3%BC", "ü")
            .replace("%C3%9F", "ß")
            .replace("%C3%84", "Ä")
            .replace("%C3%96", "Ö")
            .replace("%C3%9C", "Ü")
            .replace("%C3%A4", "ä")
            .replace("%21", "!")
            .replace("%23", "#")
            .replace("%24", "$")
            .replace("%28", "(")
            .replace("%29", ")")
            .replace("%2A", "*")
            .replace("%2B", "+")
            .replace("%2C", ",")
            .replace("%2F", "/")
            .replace("%3A", ":")
            .replace("%3B", ";")
            .replace("%3D", "=")
            .replace("%3F", "?")
            .replace("%40", "@")
            .replace("%5B", "[")
            .replace("%5D", "]")
            .replace("%7B", "{")
            .replace("%7C", "|")
            .replace("%7D", "}")
            .replace("%7E", "~")
            .replace("%25", "%");

        if (this.getIndex(id) == -1) {
            foreignVillages.push(new ForeignVillage(id, x, y));
            foreignVillages[foreignVillages.length - 1].name = name;
            foreignVillages[foreignVillages.length - 1].player = player;
            foreignVillages[foreignVillages.length - 1].points = points;

            if (player == 0 && points < 100)
                foreignVillages[foreignVillages.length - 1].farmFlagType = TWHelper.FarmFlagType.FARMABLE;
            else if (player == 0)
                foreignVillages[foreignVillages.length - 1].farmFlagType = TWHelper.FarmFlagType.SPY_FIRST;
        } else {
            if (foreignVillages[foreignVillages.length - 1].farmFlagType == TWHelper.FarmFlagType.NONE) {
                if (player == 0 || foreignVillages[foreignVillages.length - 1].points == points) {
                    if (player == 0 && points < 100)
                        foreignVillages[foreignVillages.length - 1].farmFlagType = TWHelper.FarmFlagType.FARMABLE;
                    else if (player == 0)
                        foreignVillages[foreignVillages.length - 1].farmFlagType = TWHelper.FarmFlagType.SPY_FIRST;
                    else if (points < 80)
                        foreignVillages[foreignVillages.length - 1].farmFlagType = TWHelper.FarmFlagType.FARMABLE;
                    else if (points < 600 && points + 100 < twClient.points)
                        foreignVillages[foreignVillages.length - 1].farmFlagType = TWHelper.FarmFlagType.SPY_FIRST;
                } else
                    foreignVillages[foreignVillages.length - 1].farmFlagType = TWHelper.FarmFlagType.NONE;
            }

            foreignVillages[foreignVillages.length - 1].name = name;
            foreignVillages[foreignVillages.length - 1].player = player;
            foreignVillages[foreignVillages.length - 1].points = points;
        }
    }
};

ForeignVillage.sortByDistanceTo = function($x, $y) {
    foreignVillages.sort(function (a , b) {
        return Math.pow(Math.pow($x - a.x, 2) + Math.pow($y - a.y, 2), 0.5)
            - Math.pow(Math.pow($x - b.x, 2) + Math.pow($y - b.y, 2), 0.5);
    });
};

ForeignVillage.readFromFile = function ($path) {
    Logger.log(Logger.LogLevel.INFO, "Reading Foreign Village List from file...", "readFromFile()", "database/ForeignVillage.js");
    try {
        var fs = require('fs');
        var stream  = fs.open($path, 'r');

        while(!stream.atEnd()) {
            var line = stream.readLine();
            var id = line.substr(0, line.indexOf(';#_#;'));
            line = line.substr(line.indexOf(';#_#;') + 5);
            var x = line.substr(0, line.indexOf(';#_#;'));
            line = line.substr(line.indexOf(';#_#;') + 5);
            var y = line.substr(0, line.indexOf(';#_#;'));
            line = line.substr(line.indexOf(';#_#;') + 5);
            var name = line.substr(0, line.indexOf(';#_#;'));
            line = line.substr(line.indexOf(';#_#;') + 5);
            var player = line.substr(0, line.indexOf(';#_#;'));
            line = line.substr(line.indexOf(';#_#;') + 5);
            var points = line.substr(0, line.indexOf(';#_#;'));
            line = line.substr(line.indexOf(';#_#;') + 5);
            var bonus_wood = line.substr(0, line.indexOf(';#_#;'));
            line = line.substr(line.indexOf(';#_#;') + 5);
            var bonus_stone = line.substr(0, line.indexOf(';#_#;'));
            line = line.substr(line.indexOf(';#_#;') + 5);
            var bonus_iron = line.substr(0, line.indexOf(';#_#;'));
            line = line.substr(line.indexOf(';#_#;') + 5);
            var bonus_resources = line.substr(0, line.indexOf(';#_#;'));
            line = line.substr(line.indexOf(';#_#;') + 5);
            var bonus_storage = line.substr(0, line.indexOf(';#_#;'));
            line = line.substr(line.indexOf(';#_#;') + 5);
            var res_wood = line.substr(0, line.indexOf(';#_#;'));
            line = line.substr(line.indexOf(';#_#;') + 5);
            var res_stone = line.substr(0, line.indexOf(';#_#;'));
            line = line.substr(line.indexOf(';#_#;') + 5);
            var res_iron = line.substr(0, line.indexOf(';#_#;'));
            line = line.substr(line.indexOf(';#_#;') + 5);
            var res_updateDate = line.substr(0, line.indexOf(';#_#;'));
            line = line.substr(line.indexOf(';#_#;') + 5);
            var main_level = line.substr(0, line.indexOf(';#_#;'));
            line = line.substr(line.indexOf(';#_#;') + 5);
            var barracks_level = line.substr(0, line.indexOf(';#_#;'));
            line = line.substr(line.indexOf(';#_#;') + 5);
            var stable_level = line.substr(0, line.indexOf(';#_#;'));
            line = line.substr(line.indexOf(';#_#;') + 5);
            var garage_level = line.substr(0, line.indexOf(';#_#;'));
            line = line.substr(line.indexOf(';#_#;') + 5);
            var church_level = line.substr(0, line.indexOf(';#_#;'));
            line = line.substr(line.indexOf(';#_#;') + 5);
            var church_f_level = line.substr(0, line.indexOf(';#_#;'));
            line = line.substr(line.indexOf(';#_#;') + 5);
            var snob_level = line.substr(0, line.indexOf(';#_#;'));
            line = line.substr(line.indexOf(';#_#;') + 5);
            var smith_level = line.substr(0, line.indexOf(';#_#;'));
            line = line.substr(line.indexOf(';#_#;') + 5);
            var place_level = line.substr(0, line.indexOf(';#_#;'));
            line = line.substr(line.indexOf(';#_#;') + 5);
            var statue_level = line.substr(0, line.indexOf(';#_#;'));
            line = line.substr(line.indexOf(';#_#;') + 5);
            var market_level = line.substr(0, line.indexOf(';#_#;'));
            line = line.substr(line.indexOf(';#_#;') + 5);
            var wood_level = line.substr(0, line.indexOf(';#_#;'));
            line = line.substr(line.indexOf(';#_#;') + 5);
            var stone_level = line.substr(0, line.indexOf(';#_#;'));
            line = line.substr(line.indexOf(';#_#;') + 5);
            var iron_level = line.substr(0, line.indexOf(';#_#;'));
            line = line.substr(line.indexOf(';#_#;') + 5);
            var farm_level = line.substr(0, line.indexOf(';#_#;'));
            line = line.substr(line.indexOf(';#_#;') + 5);
            var storage_level = line.substr(0, line.indexOf(';#_#;'));
            line = line.substr(line.indexOf(';#_#;') + 5);
            var hide_level = line.substr(0, line.indexOf(';#_#;'));
            line = line.substr(line.indexOf(';#_#;') + 5);
            var wall_level = line.substr(0, line.indexOf(';#_#;'));
            line = line.substr(line.indexOf(';#_#;') + 5);
            var farmTroopsArrivingTime = line.substr(0, line.indexOf(';#_#;'));
            line = line.substr(line.indexOf(';#_#;') + 5);
            var farmFlagType = line.substr(0, line.indexOf(';#_#;'));
            line = line.substr(line.indexOf(';#_#;') + 5);
            var farmFlagValue = line.substr(0, line.indexOf(';#_#;'));

            foreignVillages.push(new ForeignVillage(id, x, y));
            foreignVillages[foreignVillages.length - 1].name = name;
            foreignVillages[foreignVillages.length - 1].player = player;
            foreignVillages[foreignVillages.length - 1].points = points;
            foreignVillages[foreignVillages.length - 1].bonus_wood = bonus_wood;
            foreignVillages[foreignVillages.length - 1].bonus_stone = bonus_stone;
            foreignVillages[foreignVillages.length - 1].bonus_iron = bonus_iron;
            foreignVillages[foreignVillages.length - 1].bonus_resources = bonus_resources;
            foreignVillages[foreignVillages.length - 1].bonus_storage = bonus_storage;
            foreignVillages[foreignVillages.length - 1].res_wood = res_wood;
            foreignVillages[foreignVillages.length - 1].res_stone = res_stone;
            foreignVillages[foreignVillages.length - 1].res_iron = res_iron;
            foreignVillages[foreignVillages.length - 1].res_updateDate = res_updateDate;
            foreignVillages[foreignVillages.length - 1].main_level = main_level;
            foreignVillages[foreignVillages.length - 1].barracks_level = barracks_level;
            foreignVillages[foreignVillages.length - 1].stable_level = stable_level;
            foreignVillages[foreignVillages.length - 1].garage_level = garage_level;
            foreignVillages[foreignVillages.length - 1].church_level = church_level;
            foreignVillages[foreignVillages.length - 1].church_f_level = church_f_level;
            foreignVillages[foreignVillages.length - 1].snob_level = snob_level;
            foreignVillages[foreignVillages.length - 1].smith_level = smith_level;
            foreignVillages[foreignVillages.length - 1].place_level = place_level;
            foreignVillages[foreignVillages.length - 1].statue_level = statue_level;
            foreignVillages[foreignVillages.length - 1].market_level = market_level;
            foreignVillages[foreignVillages.length - 1].wood_level = wood_level;
            foreignVillages[foreignVillages.length - 1].stone_level = stone_level;
            foreignVillages[foreignVillages.length - 1].iron_level = iron_level;
            foreignVillages[foreignVillages.length - 1].farm_level = farm_level;
            foreignVillages[foreignVillages.length - 1].storage_level = storage_level;
            foreignVillages[foreignVillages.length - 1].hide_level = hide_level;
            foreignVillages[foreignVillages.length - 1].wall_level = wall_level;
            foreignVillages[foreignVillages.length - 1].farmTroopsArrivingTime = farmTroopsArrivingTime;
            foreignVillages[foreignVillages.length - 1].farmFlagType = farmFlagType;
            foreignVillages[foreignVillages.length - 1].farmFlagValue = farmFlagValue;
        }

        stream.close();
    } catch (err) {
        Logger.log(Logger.LogLevel.WARNING, err.name + "->" + err.message, "readFromFile()", "database/ForeignVillage.js");
    }
};

ForeignVillage.writeToFile = function ($path) {
    Logger.log(Logger.LogLevel.INFO, "Writing Foreign Village List to file...", "writeToFile()", "database/ForeignVillage.js");
    try {
        var fs = require('fs');
        var stream = fs.open($path, 'w');

        for (var i = 0; i < foreignVillages.length; i++) {
            stream.writeLine(foreignVillages[i].id
                + ';#_#;' + foreignVillages[i].x
                + ';#_#;' + foreignVillages[i].y
                + ';#_#;' + foreignVillages[i].name
                + ';#_#;' + foreignVillages[i].player
                + ';#_#;' + foreignVillages[i].points
                + ';#_#;' + foreignVillages[i].bonus_wood
                + ';#_#;' + foreignVillages[i].bonus_stone
                + ';#_#;' + foreignVillages[i].bonus_iron
                + ';#_#;' + foreignVillages[i].bonus_resources
                + ';#_#;' + foreignVillages[i].bonus_storage
                + ';#_#;' + foreignVillages[i].res_wood
                + ';#_#;' + foreignVillages[i].res_stone
                + ';#_#;' + foreignVillages[i].res_iron
                + ';#_#;' + foreignVillages[i].res_updateDate
                + ';#_#;' + foreignVillages[i].main_level
                + ';#_#;' + foreignVillages[i].barracks_level
                + ';#_#;' + foreignVillages[i].stable_level
                + ';#_#;' + foreignVillages[i].garage_level
                + ';#_#;' + foreignVillages[i].church_level
                + ';#_#;' + foreignVillages[i].church_f_level
                + ';#_#;' + foreignVillages[i].snob_level
                + ';#_#;' + foreignVillages[i].smith_level
                + ';#_#;' + foreignVillages[i].place_level
                + ';#_#;' + foreignVillages[i].statue_level
                + ';#_#;' + foreignVillages[i].market_level
                + ';#_#;' + foreignVillages[i].wood_level
                + ';#_#;' + foreignVillages[i].stone_level
                + ';#_#;' + foreignVillages[i].iron_level
                + ';#_#;' + foreignVillages[i].farm_level
                + ';#_#;' + foreignVillages[i].storage_level
                + ';#_#;' + foreignVillages[i].hide_level
                + ';#_#;' + foreignVillages[i].wall_level
                + ';#_#;' + foreignVillages[i].farmTroopsArrivingTime
                + ';#_#;' + foreignVillages[i].farmFlagType
                + ';#_#;' + foreignVillages[i].farmFlagValue);
        }

        stream.close();
    } catch (err) {
        Logger.log(Logger.LogLevel.WARNING, err.name + "->" + err.message, "writeToFile()", "database/ForeignVillage.js");
    }
};