Logger.log(Logger.LogLevel.DEBUG, "Loading screen/TWSPlace.js", "()", "screen/TWSPlace.js");

var TWSPlace = TWSPlace || {
        getScreenInformation : function() {
            try {

            } catch (err) {
                Logger.log(Logger.LogLevel.CRITICAL, err.name + "->" + err.message, "getScreenInformation()", "screen/TWSPlace.js");
            }
        },
        sendTroops : function ($sourceVillageId, $destX, $destY, $spear, $sword, $axe, $archer, $spy, $light, $marcher, $heavy, $ram, $catapult, $snob, $knight, $support) {
            Logger.log(Logger.LogLevel.INFO, "Sending Troops from " + $sourceVillageId + " to " + $destX + "|" + $destY, "sendTroops()", "screen/TWSPlace.js");
            try {
                twClient.navigate(TWHelper.ScreenType.PLACE, $sourceVillageId);

                var txtBox;
                if ($spear != 0) {
                    txtBox = page.evaluate(function () {
                        return document.getElementById('unit_input_spear').getBoundingClientRect();
                    });
                    page.sendEvent('click', txtBox.left + (txtBox.right - txtBox.left) / 2,
                        txtBox.top + (txtBox.bottom - txtBox.top) / 2, 'left');
                    page.sendEvent('keypress', $spear.toString(), null, null, 0);
                }
                if ($sword != 0) {
                    txtBox = page.evaluate(function () {
                        return document.getElementById('unit_input_sword').getBoundingClientRect();
                    });
                    page.sendEvent('click', txtBox.left + (txtBox.right - txtBox.left) / 2,
                        txtBox.top + (txtBox.bottom - txtBox.top) / 2, 'left');
                    page.sendEvent('keypress', $sword.toString(), null, null, 0);
                }
                if ($axe != 0) {
                    txtBox = page.evaluate(function () {
                        return document.getElementById('unit_input_axe').getBoundingClientRect();
                    });
                    page.sendEvent('click', txtBox.left + (txtBox.right - txtBox.left) / 2,
                        txtBox.top + (txtBox.bottom - txtBox.top) / 2, 'left');
                    page.sendEvent('keypress', $axe.toString(), null, null, 0);
                }
                if ($archer != 0) {
                    txtBox = page.evaluate(function () {
                        return document.getElementById('unit_input_archer').getBoundingClientRect();
                    });
                    page.sendEvent('click', txtBox.left + (txtBox.right - txtBox.left) / 2,
                        txtBox.top + (txtBox.bottom - txtBox.top) / 2, 'left');
                    page.sendEvent('keypress', $archer.toString(), null, null, 0);
                }
                if ($spy != 0) {
                    txtBox = page.evaluate(function () {
                        return document.getElementById('unit_input_spy').getBoundingClientRect();
                    });
                    page.sendEvent('click', txtBox.left + (txtBox.right - txtBox.left) / 2,
                        txtBox.top + (txtBox.bottom - txtBox.top) / 2, 'left');
                    page.sendEvent('keypress', $spy.toString(), null, null, 0);
                }
                if ($light != 0) {
                    txtBox = page.evaluate(function () {
                        return document.getElementById('unit_input_light').getBoundingClientRect();
                    });
                    page.sendEvent('click', txtBox.left + (txtBox.right - txtBox.left) / 2,
                        txtBox.top + (txtBox.bottom - txtBox.top) / 2, 'left');
                    page.sendEvent('keypress', $light.toString(), null, null, 0);
                }
                if ($marcher != 0) {
                    txtBox = page.evaluate(function () {
                        return document.getElementById('unit_input_marcher').getBoundingClientRect();
                    });
                    page.sendEvent('click', txtBox.left + (txtBox.right - txtBox.left) / 2,
                        txtBox.top + (txtBox.bottom - txtBox.top) / 2, 'left');
                    page.sendEvent('keypress', $marcher.toString(), null, null, 0);
                }
                if ($heavy != 0) {
                    txtBox = page.evaluate(function () {
                        return document.getElementById('unit_input_heavy').getBoundingClientRect();
                    });
                    page.sendEvent('click', txtBox.left + (txtBox.right - txtBox.left) / 2,
                        txtBox.top + (txtBox.bottom - txtBox.top) / 2, 'left');
                    page.sendEvent('keypress', $heavy.toString(), null, null, 0);
                }
                if ($ram != 0) {
                    txtBox = page.evaluate(function () {
                        return document.getElementById('unit_input_ram').getBoundingClientRect();
                    });
                    page.sendEvent('click', txtBox.left + (txtBox.right - txtBox.left) / 2,
                        txtBox.top + (txtBox.bottom - txtBox.top) / 2, 'left');
                    page.sendEvent('keypress', $ram.toString(), null, null, 0);
                }
                if ($catapult != 0) {
                    txtBox = page.evaluate(function () {
                        return document.getElementById('unit_input_catapult').getBoundingClientRect();
                    });
                    page.sendEvent('click', txtBox.left + (txtBox.right - txtBox.left) / 2,
                        txtBox.top + (txtBox.bottom - txtBox.top) / 2, 'left');
                    page.sendEvent('keypress', $catapult.toString(), null, null, 0);
                }
                if ($snob != 0) {
                    txtBox = page.evaluate(function () {
                        return document.getElementById('unit_input_snob').getBoundingClientRect();
                    });
                    page.sendEvent('click', txtBox.left + (txtBox.right - txtBox.left) / 2,
                        txtBox.top + (txtBox.bottom - txtBox.top) / 2, 'left');
                    page.sendEvent('keypress', $snob.toString(), null, null, 0);
                }
                if ($knight != 0) {
                    txtBox = page.evaluate(function () {
                        return document.getElementById('unit_input_knight').getBoundingClientRect();
                    });
                    page.sendEvent('click', txtBox.left + (txtBox.right - txtBox.left) / 2,
                        txtBox.top + (txtBox.bottom - txtBox.top) / 2, 'left');
                    page.sendEvent('keypress', $knight.toString(), null, null, 0);
                }

                txtBox = page.evaluate(function () {
                    return document.getElementById('place_target').getBoundingClientRect();
                });
                page.sendEvent('click', txtBox.left + (txtBox.right - txtBox.left) / 2,
                    txtBox.top + (txtBox.bottom - txtBox.top) / 2, 'left');
                page.sendEvent('keypress', $destX.toString(), null, null, 0);
                page.sendEvent('keypress', $destY.toString(), null, null, 0);

                if ($support == 1) {
                    txtBox = page.evaluate(function () {
                        return document.getElementById('target_support').getBoundingClientRect();
                    });
                } else {
                    txtBox = page.evaluate(function () {
                        return document.getElementById('target_attack').getBoundingClientRect();
                    });
                }
                page.sendEvent('click', txtBox.left + (txtBox.right - txtBox.left) / 2,
                    txtBox.top + (txtBox.bottom - txtBox.top) / 2, 'left');
                phantom.waitFor(function() {
                    return page.evaluate(function() {
                        if (document.body.textContent.indexOf('Ziel nicht vorhanden') != -1
                            || document.body.textContent.indexOf('Nicht genügend Einheiten vorhanden') != -1)
                            return true;
                        else
                            return document.contains(document.getElementById("troop_confirm_go"));
                    });
                });
                if (page.content.contains('Ziel nicht vorhanden')) {
                    Logger.log(Logger.LogLevel.WARNING, "Target (" + $destX + "|" + $destY + ") not found.", "sendTroops()", "screen/TWSPlace.js");
                    return 0;
                }
                if (page.content.contains('Nicht genügend Einheiten vorhanden')) {
                    Logger.log(Logger.LogLevel.WARNING, "Not enough units.", "sendTroops()", "screen/TWSPlace.js");
                    return 0;
                }

                txtBox = page.evaluate(function () {
                    return document.getElementById('troop_confirm_go').getBoundingClientRect();
                });
                page.sendEvent('click', txtBox.left + (txtBox.right - txtBox.left) / 2,
                    txtBox.top + (txtBox.bottom - txtBox.top) / 2, 'left');
                phantom.waitFor(function() {
                    return page.evaluate(function() {
                        return document.contains(document.getElementById("place_target"));
                    });
                });

                var i = PlayerVillage.getIndex($sourceVillageId);
                playerVillages[i].spear_village -= $spear;
                playerVillages[i].sword_village -= $sword;
                playerVillages[i].axe_village -= $axe;
                playerVillages[i].archer_village -= $archer;
                playerVillages[i].spy_village -= $spy;
                playerVillages[i].light_village -= $light;
                playerVillages[i].marcher_village -= $marcher;
                playerVillages[i].heavy_village -= $heavy;
                playerVillages[i].ram_village -= $ram;
                playerVillages[i].catapult_village -= $catapult;
                playerVillages[i].snob_village -= $snob;
                playerVillages[i].knight_village -= $knight;

                return 1;
            } catch (err) {
                Logger.log(Logger.LogLevel.CRITICAL, "Could send Troops: " + err.name + "->" + err.message, "sendTroops()", "screen/TWSPlace.js");
            }
        }
    };