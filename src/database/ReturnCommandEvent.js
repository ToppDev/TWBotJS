Logger.log(Logger.LogLevel.DEBUG, "Loading database/ReturnCommandEvent.js", "()", "database/ReturnCommandEvent.js");

ReturnCommandEvent = function ($villageId, $triggerTime) {
    //<editor-fold desc="Private variables">

    //</editor-fold>

    //<editor-fold desc="Public variables">
    this.villageId = $villageId;
    this.triggerTime = $triggerTime;
    
    this.wood = 0;
    this.stone = 0;
    this.iron = 0;

    this.spear = 0;
    this.sword = 0;
    this.axe = 0;
    this.archer = 0;
    this.spy = 0;
    this.light = 0;
    this.marcher = 0;
    this.heavy = 0;

    this.ram = 0;
    this.catapult = 0;

    this.snob = 0;
    this.knight = 0;

    //</editor-fold>

    //<editor-fold desc="Private Methods">


    //</editor-fold>

    //<editor-fold desc="Public Methods">

    //</editor-fold>
};

var returnCommandEvents = [];

ReturnCommandEvent.sortByTriggerTime = function() {
    returnCommandEvents.sort(function (a , b) {
        return a.triggerTime - b.triggerTime;
    });
};

ReturnCommandEvent.removeEvent = function($index) {
    if ($index != -1)
        returnCommandEvents.splice($index, 1);
};