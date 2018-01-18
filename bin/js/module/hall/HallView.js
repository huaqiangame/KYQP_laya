define(["require", "exports", "../../ui/layaUI.max.all", "../../core/CFun"], function (require, exports, layaUI_max_all_1, CFun_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class HallView extends layaUI_max_all_1.ui.game_hall.GameHallUI {
        constructor(vm) {
            super();
            this._vm = vm;
        }
        onChoseGame(e) {
            this.vm.gotoScene(e);
        }
        onShowWindow() {
            this.vm.showAvaterChose();
        }
        onShowSetting() {
            this.vm.showSetting();
        }
        onFullScreen() {
            this.vm.setFullScreen();
        }
        //继承的
        comInit() {
            this.btn_header.on(Laya.Event.CLICK, this, this.onShowWindow);
            this.btn_setting.on(Laya.Event.CLICK, this, this.onShowSetting);
            this.btn_full.on(Laya.Event.CLICK, this, this.onFullScreen);
            this.btn_620.on(Laya.Event.CLICK, this, this.onChoseGame, [this.btn_620.name]);
        }
        //继承的
        viewInit(recv) {
            this.txt_name.text = recv["name"];
            this.txt_gold.text = CFun_1.CFun.formatCurrency(recv["gold"]);
            this.btn_header.skin = this.getHeadImage((recv["sex"]), (recv["icon"] || 0));
        }
        getHeadImage(sex, index) {
            let icon = "";
            if (sex == 1) {
                icon = "gamehall/avater/man" + index + ".png";
            }
            else {
                icon = "gamehall/avater/women" + index + ".png";
            }
            return icon;
        }
    }
    exports.HallView = HallView;
});
//# sourceMappingURL=HallView.js.map