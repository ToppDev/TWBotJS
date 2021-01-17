Logger.log(Logger.LogLevel.DEBUG, "Loading database/Task.js", "()", "database/Task.js");

Task = function ($villageId, $taskType, $task, $value) {
    //<editor-fold desc="Private variables">

    //</editor-fold>

    //<editor-fold desc="Public variables">
    this.villageId = $villageId;
    this.type = $taskType;
    this.task = $task;
    this.value = $value;
    //</editor-fold>

    //<editor-fold desc="Private Methods">


    //</editor-fold>

    //<editor-fold desc="Public Methods">

    //</editor-fold>
};

var tasks = [];

Task.getIndexByCount = function($villageId, $count) {
    for (var i = 0, j = 0; i < tasks.length; i++) {
        if (tasks[i].villageId == $villageId && j++ >= $count)
            return i;
    }
    return -1;
};

Task.swapTasks = function($index1, $index2) {
    var tmp = tasks[$index1];
    tasks[$index1] = tasks[$index2];
    tasks[$index2] = tmp;
};

Task.removeTask = function($index) {
    if ($index != -1)
        tasks.splice($index, 1);
};

Task.readFromFile = function ($path) {
    Logger.log(Logger.LogLevel.INFO, "Reading Task List from file...", "readFromFile()", "database/Task.js");
    try {
        var fs = require('fs');
        var stream  = fs.open($path, 'r');

        while(!stream.atEnd()) {
            var line = stream.readLine();
            var villageId = line.substr(0, line.indexOf(';#_#;'));
            line = line.substr(line.indexOf(';#_#;') + 5);
            var type = line.substr(0, line.indexOf(';#_#;'));
            line = line.substr(line.indexOf(';#_#;') + 5);
            var task = line.substr(0, line.indexOf(';#_#;'));
            line = line.substr(line.indexOf(';#_#;') + 5);
            var value = line.substr(0, line.indexOf(';#_#;'));

            tasks.push(new ForeignVillage(id, x, y));
            tasks[tasks.length - 1].villageId = villageId;
            tasks[tasks.length - 1].type = type;
            tasks[tasks.length - 1].task = task;
            tasks[tasks.length - 1].value = value;
        }

        stream.close();
    } catch (err) {
        Logger.log(Logger.LogLevel.WARNING, err.name + "->" + err.message, "readFromFile()", "database/Task.js");
    }
};

Task.writeToFile = function ($path) {
    Logger.log(Logger.LogLevel.INFO, "Writing Task List to file...", "writeToFile()", "database/Task.js");
    try {
        var fs = require('fs');
        var stream = fs.open($path, 'w');

        for (var i = 0; i < tasks.length; i++) {
            stream.writeLine(tasks[i].villageId
                + ';#_#;' + tasks[i].type
                + ';#_#;' + tasks[i].task
                + ';#_#;' + tasks[i].value);
        }

        stream.close();
    } catch (err) {
        Logger.log(Logger.LogLevel.WARNING, err.name + "->" + err.message, "writeToFile()", "database/Task.js");
    }
};