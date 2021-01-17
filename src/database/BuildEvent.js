Logger.log(Logger.LogLevel.DEBUG, "Loading database/BuildEvent.js", "()", "database/BuildEvent.js");

BuildEvent = function ($villageId, $triggerTime, $buildingType) {
    //<editor-fold desc="Private variables">

    //</editor-fold>

    //<editor-fold desc="Public variables">
    this.villageId = $villageId;
    this.triggerTime = $triggerTime;

    this.buildingType = $buildingType;
    
    //</editor-fold>

    //<editor-fold desc="Private Methods">


    //</editor-fold>

    //<editor-fold desc="Public Methods">

    //</editor-fold>
};

var buildEvents = [];

BuildEvent.sortByTriggerTime = function() {
    buildEvents.sort(function (a , b) {
        return a.triggerTime - b.triggerTime;
    });
};

BuildEvent.getIndex = function($villageId, $triggerTime, $buildingType) {
    for (var i = 0; i < buildEvents.length; i++) {
        if (buildEvents[i].villageId == $villageId
            && buildEvents[i].triggerTime == $triggerTime
            && buildEvents[i].buildingType == $buildingType)
            return i;
    }
    return -1;
};

BuildEvent.removeEvent = function($villageId, $triggerTime, $buildingType) {
    var index = this.getIndex($villageId, $triggerTime, $buildingType);
    if (index != -1)
        buildEvents.splice(index, 1);
};