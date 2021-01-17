Logger.log(Logger.LogLevel.DEBUG, "Loading database/PlayerVillage.js", "()", "database/PlayerVillage.js");

PlayerVillage = function ($id, $x, $y) {
    //<editor-fold desc="Private variables">
    
    //</editor-fold>

    //<editor-fold desc="Public variables">
    this.id = $id;
    this.x = $x;
    this.y = $y;
    this.name = '';
    this.points = 0;
    this.bonus_wood = 0;
    this.bonus_stone = 0;
    this.bonus_iron = 0;
    this.bonus_resources = 0;
    this.bonus_storage = 0;
    this.bonus_farm = 0;
    this.bonus_barracks = 0;
    this.bonus_stable = 0;
    this.bonus_garage = 0;
    this.flag_resources = 1;
    this.flag_recruitment_speed = 1;
    this.flag_farm = 1;

    this.res_wood = 0;
    this.res_stone = 0;
    this.res_iron = 0;
    this.res_pop = 0;
    this.res_updateDate = 0;
    this.buildqueue_count = 0;

    this.main_level = BuildingInfo.main_min_level;
    this.barracks_level = BuildingInfo.barracks_min_level;
    this.stable_level = BuildingInfo.stable_min_level;
    this.garage_level = BuildingInfo.garage_min_level;
    this.church_level = BuildingInfo.church_min_level;
    this.church_f_level = BuildingInfo.church_f_min_level;
    this.snob_level = BuildingInfo.snob_min_level;
    this.smith_level = BuildingInfo.smith_min_level;
    this.place_level = BuildingInfo.place_min_level;
    this.statue_level = BuildingInfo.statue_min_level;
    this.market_level = BuildingInfo.market_min_level;
    this.wood_level = BuildingInfo.wood_min_level;
    this.stone_level = BuildingInfo.stone_min_level;
    this.iron_level = BuildingInfo.iron_min_level;
    this.farm_level = BuildingInfo.farm_min_level;
    this.storage_level = BuildingInfo.storage_min_level;
    this.hide_level = BuildingInfo.hide_min_level;
    this.wall_level = BuildingInfo.wall_min_level;

    this.spear_village = 0;
    this.spear_all = 0;
    this.sword_village = 0;
    this.sword_all = 0;
    this.axe_village = 0;
    this.axe_all = 0;
    this.archer_village = 0;
    this.archer_all = 0;
    this.spy_village = 0;
    this.spy_all = 0;
    this.light_village = 0;
    this.light_all = 0;
    this.marcher_village = 0;
    this.marcher_all = 0;
    this.heavy_village = 0;
    this.heavy_all = 0;
    this.ram_village = 0;
    this.ram_all = 0;
    this.catapult_village = 0;
    this.catapult_all = 0;
    this.snob_village = 0;
    this.snob_all = 0;
    this.knight_village = 0;
    this.knight_all = 0;
    this.militia_village = 0;
    //</editor-fold>

    //<editor-fold desc="Private Methods">


    //</editor-fold>

    //<editor-fold desc="Public Methods">

    //</editor-fold>
};

var playerVillages = [];

PlayerVillage.getVillage = function($id) {
    for (var i = 0; i < playerVillages.length; i++) {
        if (playerVillages[i].id == $id)
            return playerVillages[i];
    }
    return -1;
};

PlayerVillage.getIndex = function($id) {
    for (var i = 0; i < playerVillages.length; i++) {
        if (playerVillages[i].id == $id)
            return i;
    }
    return -1;
};

PlayerVillage.removeVillage = function($id) {
    var index = this.getIndex($id);
    if (index != -1)
        playerVillages.splice(index, 1);
};