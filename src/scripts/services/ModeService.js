"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
(function (Mode) {
    Mode[Mode["DOTA"] = 0] = "DOTA";
    Mode[Mode["CSGO"] = 1] = "CSGO";
})(exports.Mode || (exports.Mode = {}));
var Mode = exports.Mode;
var ModeService = (function () {
    function ModeService() {
        this._state = {
            mode: Mode.DOTA
        };
    }
    ModeService.prototype.getMode = function () {
        return this._state.mode;
    };
    ModeService.prototype.setMode = function (nextMode) {
        var prevMode = this._state.mode;
        this._state.mode = nextMode;
        return prevMode;
    };
    ModeService = __decorate([
        core_1.Injectable()
    ], ModeService);
    return ModeService;
}());
exports.ModeService = ModeService;
//# sourceMappingURL=ModeService.js.map