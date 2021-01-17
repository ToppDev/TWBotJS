Logger.log(Logger.LogLevel.DEBUG, "Loading screen/TWSStatue.js", "()", "screen/TWSStatue.js");

var TWSStatue = TWSStatue || {
        getScreenInformation : function() {
            try {
                var response = page.content;

                var knight_village = 0, knight_all = 0;
                if (response.contains("hierher umstationieren."))
                {
                    knight_all = 0;
                    knight_village = 0;
                }
                else if (response.contains("Paladin greift") || response.contains("Paladin unterstützt") || response.contains("Paladin kehrt zurück."))
                {
                    knight_village = 0;
                    knight_all = 1;
                }
                else if (response.contains("befindet sich in diesem Dorf."))
                {
                    knight_village = 1;
                    knight_all = 1;
                }

                var index = PlayerVillage.getIndex(twClient.actVillageId);
                playerVillages[index].knight_village = knight_village;
                playerVillages[index].knight_all = knight_all;
            } catch (err) {
                Logger.log(Logger.LogLevel.CRITICAL, err.name + "->" + err.message, "getScreenInformation()", "screen/TWSStatue.js");
            }
        }
    };