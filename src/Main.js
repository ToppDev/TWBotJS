console.log('Program started!');

var fs = require('fs');
var filepath = fs.absolute(".") + '/out/';
var dsWorld;

try {
    //<editor-fold desc="Script injects">
    console.log('Injecting Scripts...');
    phantom.injectJs('Logger.js');
    phantom.injectJs('LoginManager.js');
    phantom.injectJs('TWHelper.js');
    phantom.injectJs('TWClient.js');
    phantom.injectJs('screen/ScreenInfoManager.js');
    phantom.injectJs('database/DatabaseManager.js');
    //</editor-fold>

    //<editor-fold desc="Custom Functions">
    String.prototype.contains = function(it) { return this.indexOf(it) != -1; };
    Array.prototype.contains = function(obj) {
        for (var i = 0; i < this.length; i++)
            if (this[i] === obj)
                return true;
        return false;
    };
    phantom.waitFor = function(callback) {
        do {
            // Clear the event queue while waiting.
            // This can be accomplished using page.sendEvent()
            this.page.sendEvent('mousemove');
        } while (!callback(arguments[1], arguments[2], arguments[3], arguments[4], arguments[5], arguments[6]) || loadInProgress);
    };
    //</editor-fold>

    //<editor-fold desc="Settings">
    Logger.log(Logger.LogLevel.DEBUG, "Configuring PhantomJS and page settings...", "()", "Main.js");
    phantom.cookiesEnabled = true;
    phantom.javascriptEnabled = true;

    var loadInProgress = false;
    var page = require('webpage').create();
    page.settings.javascriptEnabled = true;
    page.viewportSize = {
        width: 1080,
        height: 1920
    };
    //page.settings.loadImages = false;
    //</editor-fold>

    //<editor-fold desc="Listeners">
    Logger.log(Logger.LogLevel.DEBUG, "Adding page Listeners...", "()", "Main.js");
    page.onLoadStarted = function() {
        loadInProgress = true;
        Logger.log(Logger.LogLevel.DEBUG_PAGE_LOAD_EVENTS, 'Loading started', "onLoadStarted()", "page");
    };
    page.onLoadFinished = function() {
        loadInProgress = false;
        Logger.log(Logger.LogLevel.DEBUG_PAGE_LOAD_EVENTS, 'Loading finished', "onLoadFinished()", "page");
    };
    page.onConsoleMessage = function(msg) {
        Logger.log(Logger.LogLevel.DEBUG_PAGE_CONSOLE_MSG, msg, "onConsoleMessage()", "page");
    };
    //</editor-fold>
    
    dsWorld = 'de126';

    var loginManager = new LoginManager();
    var twClient = new TWClient();
    DatabaseManager.init(dsWorld);

    loginManager.loginIfNeeded('Topasios', 'D!3$t@mm3', dsWorld);
    twClient.init();

    Logger.log(Logger.LogLevel.INFO, "Initialization finished.", "()", "Main.js");

    //TWSReport.readNewReports();

    //page.open('https://de126.die-staemme.de/map/village.txt'); // die-staemme.de/map/player.txt
    //phantom.waitFor(function() {return !page.loading;});
}
catch (err) {
    Logger.log(Logger.LogLevel.CRITICAL, err.name + "->" + err.message, "()", "Main.js");
}

DatabaseManager.close(dsWorld);

page.render(filepath + 'finish.png');
console.log('Program finished!');
phantom.exit();

//var system = require('system');
//system.stdout.write('CaptchaCode: ');
//var line = system.stdin.readLine();
//console.log(line);