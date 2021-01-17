Logger.log(Logger.LogLevel.DEBUG, "Loading database/ForeignPlayer.js", "()", "database/ForeignPlayer.js");

ForeignPlayer = function ($id) {
    //<editor-fold desc="Private variables">

    //</editor-fold>

    //<editor-fold desc="Public variables">

    this.id = $id;
    this.name = '';
    this.ally = 0;
    this.villageCount = 0;
    this.points = 0;
    this.old_points = 0;
    
    //</editor-fold>

    //<editor-fold desc="Private Methods">


    //</editor-fold>

    //<editor-fold desc="Public Methods">

    //</editor-fold>
};

var foreignPlayers = [];

ForeignPlayer.getPlayer = function($id) {
    for (var i = 0; i < foreignPlayers.length; i++) {
        if (foreignPlayers[i].id == $id)
            return foreignPlayers[i];
    }
    return -1;
};

ForeignPlayer.getIndex = function($id) {
    for (var i = 0; i < foreignPlayers.length; i++) {
        if (foreignPlayers[i].id == $id)
            return i;
    }
    return -1;
};

ForeignPlayer.removeVillage = function($id) {
    var index = this.getIndex($id);
    if (index != -1)
        foreignPlayers.splice(index, 1);
};

ForeignPlayer.downloadFromWeb = function($dsWorld) {
    Logger.log(Logger.LogLevel.INFO, "Downloading Player List...", "downloadFromWeb()", "database/ForeignPlayer.js");
    page.open('https://' + $dsWorld + '.die-staemme.de/map/player.txt');
    phantom.waitFor(function() {return !page.loading;});
    var content = page.plainText;

    // $id, $name, $ally, $villages, $points, $rank
    while (content.contains(',')) {
        var id = content.substr(0, content.indexOf(','));
        content = content.substr(content.indexOf(',') + 1);
        var name = content.substr(0, content.indexOf(','));
        content = content.substr(content.indexOf(',') + 1);
        var ally = content.substr(0, content.indexOf(','));
        content = content.substr(content.indexOf(',') + 1);
        var villages = content.substr(0, content.indexOf(','));
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
            foreignPlayers.push(new ForeignPlayer(id));
            foreignPlayers[foreignPlayers.length - 1].name = name;
            foreignPlayers[foreignPlayers.length - 1].ally = ally;
            foreignPlayers[foreignPlayers.length - 1].villageCount = villages;
            foreignPlayers[foreignPlayers.length - 1].points = points;
        } else {
            foreignPlayers[foreignPlayers.length - 1].name = name;
            foreignPlayers[foreignPlayers.length - 1].ally = ally;
            foreignPlayers[foreignPlayers.length - 1].villageCount = villages;
            foreignPlayers[foreignPlayers.length - 1].old_points = foreignPlayers[foreignPlayers.length - 1].points;
            foreignPlayers[foreignPlayers.length - 1].points = points;
        }
    }
};

ForeignPlayer.readFromFile = function ($path) {
    Logger.log(Logger.LogLevel.INFO, "Reading Player List from file...", "readFromFile()", "database/ForeignPlayer.js");
    try {
        var fs = require('fs');
        var stream  = fs.open($path, 'r');

        while(!stream.atEnd()) {
            var line = stream.readLine();
            var id = line.substr(0, line.indexOf(';#_#;'));
            line = line.substr(line.indexOf(';#_#;') + 5);
            var name = line.substr(0, line.indexOf(';#_#;'));
            line = line.substr(line.indexOf(';#_#;') + 5);
            var ally = line.substr(0, line.indexOf(';#_#;'));
            line = line.substr(line.indexOf(';#_#;') + 5);
            var villages = line.substr(0, line.indexOf(';#_#;'));
            line = line.substr(line.indexOf(';#_#;') + 5);
            var points = line.substr(0, line.indexOf(';#_#;'));
            line = line.substr(line.indexOf(';#_#;') + 5);
            
            foreignPlayers.push(new ForeignPlayer(id));
            foreignPlayers[foreignPlayers.length - 1].name = name;
            foreignPlayers[foreignPlayers.length - 1].ally = ally;
            foreignPlayers[foreignPlayers.length - 1].villageCount = villages;
            foreignPlayers[foreignPlayers.length - 1].points = points;
            foreignPlayers[foreignPlayers.length - 1].old_points = line;
        }
        
        stream.close();
    } catch (err) {
        Logger.log(Logger.LogLevel.WARNING, err.name + "->" + err.message, "readFromFile()", "database/ForeignPlayer.js");
    }
};

ForeignPlayer.writeToFile = function ($path) {
    Logger.log(Logger.LogLevel.INFO, "Writing Player List to file...", "writeToFile()", "database/ForeignPlayer.js");
    try {
        var fs = require('fs');
        var stream = fs.open($path, 'w');

        for (var i = 0; i < foreignPlayers.length; i++) {
            stream.writeLine(foreignPlayers[i].id + ';#_#;' + foreignPlayers[i].name + ';#_#;' + foreignPlayers[i].ally
                + ';#_#;' + foreignPlayers[i].villageCount + ';#_#;' + foreignPlayers[i].points
                + ';#_#;' + foreignPlayers[i].old_points);
        }

        stream.close();
    } catch (err) {
        Logger.log(Logger.LogLevel.WARNING, err.name + "->" + err.message, "writeToFile()", "database/ForeignPlayer.js");
    }
};