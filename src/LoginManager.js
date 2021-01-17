Logger.log(Logger.LogLevel.DEBUG, "Loading LoginManager.js", "()", "LoginManager.js");

LoginManager = function () {
    //<editor-fold desc="Private variables">
    var username = "";
    var password = "";
    var dsWorld = "";
    //</editor-fold>

    //<editor-fold desc="Public variables">

    //</editor-fold>

    //<editor-fold desc="Private Methods">

    function loginToAccount($username, $password) {
        var availableWorlds = [];

        // Fill user text
        var userInput = page.evaluate(function() {
            return document.getElementById('user').getBoundingClientRect();
        });
        page.sendEvent('click', userInput.left + (userInput.right - userInput.left) / 2,
            userInput.top + (userInput.bottom - userInput.top) / 2, 'left');
        page.sendEvent('keypress', $username, null, null, 0);

        // Fill password text
        var passwordInput = page.evaluate(function() {
            return document.getElementById('password').getBoundingClientRect();
        });
        page.sendEvent('click', passwordInput.left + (passwordInput.right - passwordInput.left) / 2,
            passwordInput.top + (passwordInput.bottom - passwordInput.top) / 2, 'left');
        page.sendEvent('keypress', $password, null, null, 0);

        // Click on Login Button
        var loginButton = page.evaluate(function() {
            return document.getElementById('js_login_button').getBoundingClientRect();
        });
        page.sendEvent('click', loginButton.left + (loginButton.right - loginButton.left) / 2,
            loginButton.top + (loginButton.bottom - loginButton.top) / 2, 'left');

        phantom.waitFor(function() {
            return page.evaluate(function() {
                return (document.contains(document.getElementById("error"))
                || document.contains(document.getElementById("server_select_list")));
            });
        });

        // Check if an error was returned
        var error = page.evaluate(function() {
            if (document.getElementById('error')) {
                return document.getElementById('error').innerText;
            } else return 0;
        });
        if (error != 0) {
            Logger.log(Logger.LogLevel.CRITICAL, error, "loginToAccount()", "LoginManager.js");
        } else {
            // Save username and password
            username = $username;
            password = $password;

            var content = page.content;

            // Getting available worlds
            while (content.contains("world_button_active")) {
                content = content.substr(content.indexOf("world_button_active") + 21);
                if(content.substr(0, content.indexOf("<")).contains("Welt")) {
                    availableWorlds.push(content.substr(0, content.indexOf("<")));
                    Logger.log(Logger.LogLevel.DEBUG, "AvailableWorld: " + content.substr(0, content.indexOf("<")), "loginToAccount()", "LoginManager.js");
                }
            }

            if (availableWorlds.length == 0)
                Logger.log(Logger.LogLevel.CRITICAL, "You don't play on any world. Please start a new one manually.", "loginToAccount()", "LoginManager.js");
        }

        return availableWorlds;
    }

    function loginToWorld($dsWorld) {
        // Check if login button for world exists
        var worldLoginButton = page.evaluate(function(dsWorld) {
            if (document.querySelector('[onclick="return Index.submit_login(\'server_' + dsWorld + '\');"]') != null)
                return document.querySelector('[onclick="return Index.submit_login(\'server_' + dsWorld + '\');"]').children[0].getBoundingClientRect();
            else return 0;
        }, $dsWorld);
        if (worldLoginButton == 0)
            Logger.log(Logger.LogLevel.CRITICAL, "Could't find login button for world " + $dsWorld, "loginToWorld()", "LoginManager.js");

        // Click on world login button
        page.sendEvent('click', worldLoginButton.left + (worldLoginButton.right - worldLoginButton.left) / 2,
            worldLoginButton.top + (worldLoginButton.bottom - worldLoginButton.top) / 2, 'left');
        phantom.waitFor(function() {
            return page.evaluate(function() {
                return document.contains(document.getElementById("ds_body"));
            });
        });

        // Save world
        dsWorld = $dsWorld;
    }

    //</editor-fold>

    //<editor-fold desc="Public Methods">

    this.loginIfNeeded = function($username, $password, $dsWorld) {
        if(typeof $username === "undefined") $username = username;
        if(typeof $password === "undefined") $password = password;
        if(typeof $dsWorld === "undefined") $dsWorld = dsWorld;

        if (!page.content.contains("ds_body") || page.content.contains("Session abgelaufen")) {
            page.open('https://www.die-staemme.de/');
            phantom.waitFor(function() {return !page.loading;});

            var state = page.evaluate(function(dsWorld) {
                if (document.getElementById('user') != null) return 0;
                else if(document.querySelector('[onclick="return Index.submit_login(\'server_' + dsWorld + '\');"]') != null) return 1;
            }, $dsWorld);

            if (state == 0) {
                Logger.log(Logger.LogLevel.INFO, "Login started...", "loginIfNeeded()", "LoginManager.js");
                var availableWorlds = loginToAccount($username, $password);
                if (availableWorlds.contains(TWHelper.convertTWWorldToWorld($dsWorld))) { // "de126" -> "Welt 126"
                    loginToWorld($dsWorld);
                } else {
                    Logger.log(Logger.LogLevel.CRITICAL, "The world " + $dsWorld + " is not available.", "loginIfNeeded()", "LoginManager.js");
                }
            } else if (state == 1) {
                Logger.log(Logger.LogLevel.INFO, "Session expired. Login started...", "loginIfNeeded()", "LoginManager.js");
                page.open('https://www.die-staemme.de/index.php?server_list=1');
                phantom.waitFor(function() {return !page.loading;});
                loginToWorld($dsWorld);
            }
            return true;
        } else return false;
    };

    this.getWorld = function() {
        return dsWorld;
    };

    //</editor-fold>
};