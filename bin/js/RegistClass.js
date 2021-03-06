define(["require", "exports", "./mbase/data/Player", "./mbase/data/Accounts", "./mbase/data/CityScene", "./mbase/data/HoldemAgent", "./mbase/data/HoldemDeck"], function (require, exports, Player_1, Accounts_1, CityScene_1, HoldemAgent_1, HoldemDeck_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var RegistClass = /** @class */ (function () {
        function RegistClass() {
            // this.registClass("ModelHandle","../../mbase/base/ModelHandle");
            // this.registClass("Account","../../mbase/data/Accounts");
            // this.registClass("CityScene","../../mbase/data/CityScene");
            // this.registClass("HoldemAgent","../../mbase/data/HoldemAgent");
            // this.registClass("HoldemDeck","../../mbase/data/HoldemDeck");
            this.registClass("ModelHandle", ModelHandle);
            this.registClass("Player", Player_1.Player);
            this.registClass("Account", Accounts_1.Accounts);
            this.registClass("CityScene", CityScene_1.CityScene);
            this.registClass("HoldemAgent", HoldemAgent_1.HoldemAgent);
            this.registClass("HoldemDeck", HoldemDeck_1.HoldemDeck);
            // //显示对象
            this.registClass("SCENE_HallVM", "./module/hall/HallVM"); //"js/../../module/hall/HallVM.js"
            this.registClass("SCENE_DZPKSceneVM", "./module/dzpk/scene/DZPKSceneVM");
            this.registClass("SCENE_scene_620", "./module/dzpk/DZPKRoomsVM");
            this.registClass("avaterChose", "./module/avaterChose/AvaterChoseVM");
            this.registClass("setting", "./module/setting/SettingVM");
            this.registClass("DZPKHelpVM", "./module/dzpk/help/DZPKHelpVM");
            this.registClass("DZPKRecordVM", "./module/dzpk/record/DZPKRecordVM");
            this.registClass("DZPKTakeVM", "./module/dzpk/take/DZPKTakeVM");
            this.registClass("PiPeiVM", "./module/dzpk/pipei/PiPeiVM");
            this.registClass("MenuVM", "./module/dzpk/menu/MenuVM");
            this.registClass("CardTypeVM", "./module/dzpk/cardtype/CardTypeVM");
        }
        RegistClass.prototype.registClass = function (cname, cclass) {
            laya.utils.ClassUtils.regClass(cname, cclass);
        };
        return RegistClass;
    }());
    exports.RegistClass = RegistClass;
    Date.prototype["format"] = function (format) {
        var o = {
            "M+": this.getMonth() + 1,
            "d+": this.getDate(),
            "h+": this.getHours(),
            "m+": this.getMinutes(),
            "s+": this.getSeconds(),
            "q+": Math.floor((this.getMonth() + 3) / 3),
            "S": this.getMilliseconds() //millisecond
        };
        if (/(y+)/.test(format))
            format = format.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
        for (var k in o)
            if (new RegExp("(" + k + ")").test(format))
                format = format.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] :
                    ("00" + o[k]).substr(("" + o[k]).length));
        return format;
    };
});
//# sourceMappingURL=RegistClass.js.map