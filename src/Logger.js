// global namespace
var Logger = Logger || {
        LogLevel : {
            CRITICAL : 0,
            WARNING  : 1,
            INFO     : 2,
            DEBUG    : 3,
            DEBUG_PAGE_LOAD_EVENTS : 4,
            DEBUG_PAGE_CONSOLE_MSG : 5
        },

        LOG_LEVEL : 3,

        log : function($loggingLevel, $debugInfo, $functionName, $className) {
            if ($loggingLevel == this.LogLevel.INFO && this.LOG_LEVEL >= $loggingLevel) {
                if (this.LOG_LEVEL >= this.LogLevel.DEBUG)
                    console.log("INFO: " + $className + "->" + $functionName + ": " + $debugInfo);
                else
                    console.log($debugInfo);
            }
            else if ($loggingLevel == this.LogLevel.WARNING && this.LOG_LEVEL >= $loggingLevel) {
                console.log("WARNING: " + $className + "->" + $functionName + ": " + $debugInfo);
            }
            else if ($loggingLevel == this.LogLevel.CRITICAL && this.LOG_LEVEL >= $loggingLevel) {
                console.log("CRITICAL: " + $className + "->" + $functionName + ": " + $debugInfo);
                page.render(filepath + 'critical.png');
                console.log("Saving database as critical files. Replace nominal files if you want.");
                DatabaseManager.close(dsWorld + "_critical");
                console.log("Exiting now!");
                phantom.exit(0);
            } else if (this.LOG_LEVEL >= $loggingLevel) {
                console.log("DEBUG: " + $className + "->" + $functionName + ": " + $debugInfo);
            }
        }
    };

Logger.log(Logger.LogLevel.DEBUG, "Loading Logger.js", "()", "Logger.js");