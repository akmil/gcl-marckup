"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var HtmlEditor = (function () {
    function HtmlEditor() {
        this.handleChangeEvent = new core_1.EventEmitter();
    }
    HtmlEditor.prototype.ngAfterViewInit = function () {
        tinymce.init({
            selector: '#' + this.elementId,
            skin_url: 'static/css/skins/lightgray',
            plugins: [
                'advlist autolink lists link image charmap print preview hr anchor pagebreak',
                'searchreplace wordcount visualblocks visualchars code fullscreen',
                'insertdatetime media nonbreaking save table contextmenu directionality',
                'emoticons template paste textcolor colorpicker textpattern imagetools codesample toc'
            ],
            setup: this.setup.bind(this)
        });
    };
    HtmlEditor.prototype.ngOnDestroy = function () {
        tinymce.remove(this.editor);
    };
    HtmlEditor.prototype.setup = function (editor) {
        var _this = this;
        this.editor = editor;
        editor.on('change', function () { return _this.handleChangeEvent.emit(editor.getContent()); });
    };
    __decorate([
        core_1.Input()
    ], HtmlEditor.prototype, "elementId");
    __decorate([
        core_1.Output()
    ], HtmlEditor.prototype, "handleChangeEvent");
    HtmlEditor = __decorate([
        core_1.Component({
            selector: 'html-editor',
            template: "<textarea id=\"{{elementId}}\"></textarea>"
        })
    ], HtmlEditor);
    return HtmlEditor;
}());
exports.HtmlEditor = HtmlEditor;
//# sourceMappingURL=HtmlEditor.js.map