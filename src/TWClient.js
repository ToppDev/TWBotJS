Logger.log(Logger.LogLevel.DEBUG, "Loading TWClient.js", "()", "TWClient.js");

TWClient = function () {
    //<editor-fold desc="Private variables">
    //</editor-fold>

    //<editor-fold desc="Public variables">
    this.actVillageId = 0;
    this.actScreen = 0;
    this.serverTimeDifference = 0;
    this.userId = 0;
    this.points = 0;
    
    this.newReport = 0;
    this.newMail = 0;
    this.newForumThread = 0;
    this.newIncomingAttacks = 0;
    this.incomingAttacksCount = 0;
    //</editor-fold>

    //<editor-fold desc="Private Methods">

    //</editor-fold>

    //<editor-fold desc="Public Methods">

    this.init = function() {
        this.navigate(TWHelper.ScreenType.OVERVIEW_VILLAGES);

        // ToDo: disable graphical user interface

        for (var i = 0; i < playerVillages.length; i ++)
        {
            Logger.log(Logger.LogLevel.INFO, "Reading " + playerVillages[i].name + "...", "init()", "TWClient.js");

            this.navigate(TWHelper.ScreenType.OVERVIEW, playerVillages[i].id);
            TWSOverview.getReturningTroops();
            this.navigate(TWHelper.ScreenType.MAIN, playerVillages[i].id);
            this.navigate(TWHelper.ScreenType.TRAIN, playerVillages[i].id);
            if (playerVillages[i].statue_level != 0)
                this.navigate(TWHelper.ScreenType.STATUE, playerVillages[i].id);
        }
    };

    this.navigate = function ($screenType, $villageId, $urlAddition) {
        if (typeof $urlAddition === "undefined")
            $urlAddition = '';

        var villageIdUrl;
        if (typeof $villageId === "undefined")
            villageIdUrl = '';
        else
            villageIdUrl = "village=" + $villageId + "&";

        Logger.log(Logger.LogLevel.INFO, "Navigating to " + $villageId + "-" + TWHelper.getNameFromScreenType($screenType) + " coming from " + this.actVillageId + "-" + TWHelper.getNameFromScreenType(this.actScreen)
                            + ' --> https://' + loginManager.getWorld() + '.die-staemme.de/game.php?' + villageIdUrl + 'screen=' + TWHelper.getTWUrlFromScreenType($screenType) + $urlAddition, "navigate()", "TWClient.js");
        page.open('https://' + loginManager.getWorld() + '.die-staemme.de/game.php?' + villageIdUrl + 'screen=' + TWHelper.getTWUrlFromScreenType($screenType) + $urlAddition);
        phantom.waitFor(function() {return !page.loading;});
        this.actScreen = $screenType;
        this.actVillageId = $villageId;

        ScreenInfoManager.getScreenInformation(this.actScreen);
    };

    //</editor-fold>
};