Logger.log(Logger.LogLevel.DEBUG, "Loading database/RecruitEvent.js", "()", "database/RecruitEvent.js");

RecruitEvent = function ($villageId, $triggerTime, $unitType) {
    //<editor-fold desc="Private variables">

    //</editor-fold>

    //<editor-fold desc="Public variables">
    this.villageId = $villageId;
    this.triggerTime = $triggerTime;

    this.unitType = $unitType;
    //</editor-fold>

    //<editor-fold desc="Private Methods">


    //</editor-fold>

    //<editor-fold desc="Public Methods">

    //</editor-fold>
};

var recruitEvents = [];

RecruitEvent.sortByTriggerTime = function() {
    recruitEvents.sort(function (a , b) {
        return a.triggerTime - b.triggerTime;
    });
};

RecruitEvent.getIndex = function($villageId, $triggerTime, $unitType) {
    for (var i = 0; i < recruitEvents.length; i++) {
        if (recruitEvents[i].villageId == $villageId 
            && recruitEvents[i].triggerTime == $triggerTime
            && recruitEvents[i].unitType == $unitType)
            return i;
    }
    return -1;
};

RecruitEvent.removeEvent = function($villageId, $triggerTime, $unitType) {
    var index = this.getIndex($villageId, $triggerTime, $unitType);
    if (index != -1)
        recruitEvents.splice(index, 1);
};