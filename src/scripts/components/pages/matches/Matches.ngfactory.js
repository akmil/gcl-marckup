/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
/* tslint:disable */
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var import1 = require('@angular/core/src/linker/view');
var import2 = require('@angular/core/src/linker/element');
var import3 = require('./Matches');
var import4 = require('@angular/core/src/linker/view_utils');
var import6 = require('@angular/core/src/linker/view_type');
var import7 = require('@angular/core/src/change_detection/change_detection');
var import8 = require('@angular/http/src/http');
var import9 = require('@angular/core/src/metadata/view');
var import10 = require('@angular/core/src/linker/component_factory');
var import11 = require('@angular/common/src/directives/ng_for');
var import12 = require('@angular/core/src/linker/template_ref');
var import13 = require('@angular/core/src/change_detection/differs/iterable_differs');
var import14 = require('@angular/core/src/security');
var renderType_Matches_Host = null;
var _View_Matches_Host0 = (function (_super) {
    __extends(_View_Matches_Host0, _super);
    function _View_Matches_Host0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_Matches_Host0, renderType_Matches_Host, import6.ViewType.HOST, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_Matches_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = this.selectOrCreateHostElement('matches', rootSelector, null);
        this._appEl_0 = new import2.AppElement(0, null, this, this._el_0);
        var compView_0 = viewFactory_Matches0(this.viewUtils, this.injector(0), this._appEl_0);
        this._Matches_0_4 = new import3.Matches(this.parentInjector.get(import8.Http));
        this._appEl_0.initComponent(this._Matches_0_4, [], compView_0);
        compView_0.create(this._Matches_0_4, this.projectableNodes, null);
        this.init([].concat([this._el_0]), [this._el_0], [], []);
        return this._appEl_0;
    };
    _View_Matches_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import3.Matches) && (0 === requestNodeIndex))) {
            return this._Matches_0_4;
        }
        return notFoundResult;
    };
    return _View_Matches_Host0;
}(import1.AppView));
function viewFactory_Matches_Host0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_Matches_Host === null)) {
        (renderType_Matches_Host = viewUtils.createRenderComponentType('', 0, import9.ViewEncapsulation.None, [], {}));
    }
    return new _View_Matches_Host0(viewUtils, parentInjector, declarationEl);
}
exports.MatchesNgFactory = new import10.ComponentFactory('matches', viewFactory_Matches_Host0, import3.Matches);
var styles_Matches = [];
var renderType_Matches = null;
var _View_Matches0 = (function (_super) {
    __extends(_View_Matches0, _super);
    function _View_Matches0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_Matches0, renderType_Matches, import6.ViewType.COMPONENT, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_Matches0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
        this._text_0 = this.renderer.createText(parentRenderNode, '\n  ', null);
        this._text_1 = this.renderer.createText(parentRenderNode, '\n    ', null);
        this._text_2 = this.renderer.createText(parentRenderNode, '\n  ', null);
        this._text_3 = this.renderer.createText(parentRenderNode, '\n  ', null);
        this._text_4 = this.renderer.createText(parentRenderNode, '\n    ', null);
        this._text_5 = this.renderer.createText(parentRenderNode, '\n    ', null);
        this._text_6 = this.renderer.createText(parentRenderNode, '\n    ', null);
        this._text_7 = this.renderer.createText(parentRenderNode, '\n    ', null);
        this._text_8 = this.renderer.createText(parentRenderNode, '\n    ', null);
        this._text_9 = this.renderer.createText(parentRenderNode, '\n  ', null);
        this._text_10 = this.renderer.createText(parentRenderNode, '\n  ', null);
        this._text_11 = this.renderer.createText(parentRenderNode, '\n', null);
        this._text_12 = this.renderer.createText(parentRenderNode, '\n', null);
        this._text_13 = this.renderer.createText(parentRenderNode, '\n', null);
        this._el_14 = this.renderer.createElement(parentRenderNode, 'ul', null);
        this.renderer.setElementAttribute(this._el_14, 'class', 'list-group');
        this._text_15 = this.renderer.createText(this._el_14, '\n  ', null);
        this._anchor_16 = this.renderer.createTemplateAnchor(this._el_14, null);
        this._appEl_16 = new import2.AppElement(16, 14, this, this._anchor_16);
        this._TemplateRef_16_5 = new import12.TemplateRef_(this._appEl_16, viewFactory_Matches1);
        this._NgFor_16_6 = new import11.NgFor(this._appEl_16.vcRef, this._TemplateRef_16_5, this.parentInjector.get(import13.IterableDiffers), this.ref);
        this._text_17 = this.renderer.createText(this._el_14, '\n', null);
        this._text_18 = this.renderer.createText(parentRenderNode, '\n', null);
        this._el_19 = this.renderer.createElement(parentRenderNode, 'div', null);
        this.renderer.setElementAttribute(this._el_19, 'class', 'widget-footer');
        this._text_20 = this.renderer.createText(this._el_19, '\n  ', null);
        this._el_21 = this.renderer.createElement(this._el_19, 'span', null);
        this.renderer.setElementAttribute(this._el_21, 'class', 'icon icon-info');
        this._text_22 = this.renderer.createText(this._el_19, '\n  ', null);
        this._el_23 = this.renderer.createElement(this._el_19, 'p', null);
        this.renderer.setElementAttribute(this._el_23, 'class', 'see-all blue');
        this._el_24 = this.renderer.createElement(this._el_23, 'a', null);
        this.renderer.setElementAttribute(this._el_24, 'href', '#');
        this._text_25 = this.renderer.createText(this._el_24, 'Полный список команд', null);
        this._text_26 = this.renderer.createText(this._el_19, '\n', null);
        this._text_27 = this.renderer.createText(parentRenderNode, '\n\n\n\n', null);
        this._text_28 = this.renderer.createText(parentRenderNode, '\n  ', null);
        this._text_29 = this.renderer.createText(parentRenderNode, '\n  ', null);
        this._text_30 = this.renderer.createText(parentRenderNode, '\n  ', null);
        this._text_31 = this.renderer.createText(parentRenderNode, '\n  ', null);
        this._text_32 = this.renderer.createText(parentRenderNode, '\n    ', null);
        this._text_33 = this.renderer.createText(parentRenderNode, '\n    ', null);
        this._text_34 = this.renderer.createText(parentRenderNode, '\n  ', null);
        this._text_35 = this.renderer.createText(parentRenderNode, '\n', null);
        this._expr_0 = import7.UNINITIALIZED;
        this.init([], [
            this._text_0,
            this._text_1,
            this._text_2,
            this._text_3,
            this._text_4,
            this._text_5,
            this._text_6,
            this._text_7,
            this._text_8,
            this._text_9,
            this._text_10,
            this._text_11,
            this._text_12,
            this._text_13,
            this._el_14,
            this._text_15,
            this._anchor_16,
            this._text_17,
            this._text_18,
            this._el_19,
            this._text_20,
            this._el_21,
            this._text_22,
            this._el_23,
            this._el_24,
            this._text_25,
            this._text_26,
            this._text_27,
            this._text_28,
            this._text_29,
            this._text_30,
            this._text_31,
            this._text_32,
            this._text_33,
            this._text_34,
            this._text_35
        ], [], []);
        return null;
    };
    _View_Matches0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import12.TemplateRef) && (16 === requestNodeIndex))) {
            return this._TemplateRef_16_5;
        }
        if (((token === import11.NgFor) && (16 === requestNodeIndex))) {
            return this._NgFor_16_6;
        }
        return notFoundResult;
    };
    _View_Matches0.prototype.detectChangesInternal = function (throwOnChange) {
        var changes = null;
        changes = null;
        var currVal_0 = this.context.matches;
        if (import4.checkBinding(throwOnChange, this._expr_0, currVal_0)) {
            this._NgFor_16_6.ngForOf = currVal_0;
            if ((changes === null)) {
                (changes = {});
            }
            changes['ngForOf'] = new import7.SimpleChange(this._expr_0, currVal_0);
            this._expr_0 = currVal_0;
        }
        if ((changes !== null)) {
            this._NgFor_16_6.ngOnChanges(changes);
        }
        if (!throwOnChange) {
            this._NgFor_16_6.ngDoCheck();
        }
        this.detectContentChildrenChanges(throwOnChange);
        this.detectViewChildrenChanges(throwOnChange);
    };
    return _View_Matches0;
}(import1.AppView));
function viewFactory_Matches0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_Matches === null)) {
        (renderType_Matches = viewUtils.createRenderComponentType('', 0, import9.ViewEncapsulation.None, styles_Matches, {}));
    }
    return new _View_Matches0(viewUtils, parentInjector, declarationEl);
}
exports.viewFactory_Matches0 = viewFactory_Matches0;
var _View_Matches1 = (function (_super) {
    __extends(_View_Matches1, _super);
    function _View_Matches1(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_Matches1, renderType_Matches, import6.ViewType.EMBEDDED, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_Matches1.prototype.createInternal = function (rootSelector) {
        this._el_0 = this.renderer.createElement(null, 'li', null);
        this.renderer.setElementAttribute(this._el_0, 'class', 'list-group-item');
        this._text_1 = this.renderer.createText(this._el_0, '\n    ', null);
        this._el_2 = this.renderer.createElement(this._el_0, 'div', null);
        this.renderer.setElementAttribute(this._el_2, 'class', 'col-md-10 nopadding text-xl-center');
        this._text_3 = this.renderer.createText(this._el_2, '\n      ', null);
        this._el_4 = this.renderer.createElement(this._el_2, 'div', null);
        this.renderer.setElementAttribute(this._el_4, 'class', 'col-sm-12');
        this._text_5 = this.renderer.createText(this._el_4, '', null);
        this._text_6 = this.renderer.createText(this._el_2, '\n      ', null);
        this._el_7 = this.renderer.createElement(this._el_2, 'span', null);
        this.renderer.setElementAttribute(this._el_7, 'class', 'user-name blue');
        this._text_8 = this.renderer.createText(this._el_7, '', null);
        this._text_9 = this.renderer.createText(this._el_2, '\n      ', null);
        this._el_10 = this.renderer.createElement(this._el_2, 'img', null);
        this.renderer.setElementAttribute(this._el_10, 'class', 'img-thumbnail');
        this._text_11 = this.renderer.createText(this._el_2, '\n      ', null);
        this._el_12 = this.renderer.createElement(this._el_2, 'span', null);
        this.renderer.setElementAttribute(this._el_12, 'class', 'puny puny-vs');
        this._text_13 = this.renderer.createText(this._el_12, '', null);
        this._text_14 = this.renderer.createText(this._el_2, '\n      ', null);
        this._el_15 = this.renderer.createElement(this._el_2, 'img', null);
        this.renderer.setElementAttribute(this._el_15, 'class', 'img-thumbnail');
        this._text_16 = this.renderer.createText(this._el_2, '\n      ', null);
        this._el_17 = this.renderer.createElement(this._el_2, 'span', null);
        this.renderer.setElementAttribute(this._el_17, 'class', 'user-name blue');
        this._text_18 = this.renderer.createText(this._el_17, '', null);
        this._text_19 = this.renderer.createText(this._el_2, '\n    ', null);
        this._text_20 = this.renderer.createText(this._el_0, '\n    ', null);
        this._el_21 = this.renderer.createElement(this._el_0, 'div', null);
        this.renderer.setElementAttribute(this._el_21, 'class', 'col-md-2 nopadding text-xl-center');
        this._text_22 = this.renderer.createText(this._el_21, '\n      ', null);
        this._el_23 = this.renderer.createElement(this._el_21, 'p', null);
        this.renderer.setElementAttribute(this._el_23, 'class', 'date puny');
        this._text_24 = this.renderer.createText(this._el_23, '', null);
        this._text_25 = this.renderer.createText(this._el_21, '\n      ', null);
        this._text_26 = this.renderer.createText(this._el_21, '\n      ', null);
        this._text_27 = this.renderer.createText(this._el_21, '\n    ', null);
        this._text_28 = this.renderer.createText(this._el_0, '\n\n    ', null);
        this._el_29 = this.renderer.createElement(this._el_0, 'div', null);
        this.renderer.setElementAttribute(this._el_29, 'class', 'clearfix');
        this._text_30 = this.renderer.createText(this._el_0, '\n  ', null);
        this._expr_0 = import7.UNINITIALIZED;
        this._expr_1 = import7.UNINITIALIZED;
        this._expr_2 = import7.UNINITIALIZED;
        this._expr_3 = import7.UNINITIALIZED;
        this._expr_4 = import7.UNINITIALIZED;
        this._expr_5 = import7.UNINITIALIZED;
        this._expr_6 = import7.UNINITIALIZED;
        this._expr_7 = import7.UNINITIALIZED;
        this._expr_8 = import7.UNINITIALIZED;
        this.init([].concat([this._el_0]), [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._el_4,
            this._text_5,
            this._text_6,
            this._el_7,
            this._text_8,
            this._text_9,
            this._el_10,
            this._text_11,
            this._el_12,
            this._text_13,
            this._text_14,
            this._el_15,
            this._text_16,
            this._el_17,
            this._text_18,
            this._text_19,
            this._text_20,
            this._el_21,
            this._text_22,
            this._el_23,
            this._text_24,
            this._text_25,
            this._text_26,
            this._text_27,
            this._text_28,
            this._el_29,
            this._text_30
        ], [], []);
        return null;
    };
    _View_Matches1.prototype.detectChangesInternal = function (throwOnChange) {
        this.detectContentChildrenChanges(throwOnChange);
        var currVal_0 = import4.interpolate(1, '', this.context.$implicit.title, '');
        if (import4.checkBinding(throwOnChange, this._expr_0, currVal_0)) {
            this.renderer.setText(this._text_5, currVal_0);
            this._expr_0 = currVal_0;
        }
        var currVal_1 = import4.interpolate(1, '', this.context.$implicit.compA_name, '');
        if (import4.checkBinding(throwOnChange, this._expr_1, currVal_1)) {
            this.renderer.setText(this._text_8, currVal_1);
            this._expr_1 = currVal_1;
        }
        var currVal_2 = this.context.$implicit.compA_flag;
        if (import4.checkBinding(throwOnChange, this._expr_2, currVal_2)) {
            this.renderer.setElementProperty(this._el_10, 'src', this.viewUtils.sanitizer.sanitize(import14.SecurityContext.URL, currVal_2));
            this._expr_2 = currVal_2;
        }
        var currVal_3 = this.context.$implicit.compA_name;
        if (import4.checkBinding(throwOnChange, this._expr_3, currVal_3)) {
            this.renderer.setElementAttribute(this._el_10, 'alt', ((currVal_3 == null) ? null : currVal_3.toString()));
            this._expr_3 = currVal_3;
        }
        var currVal_4 = import4.interpolate(2, '', this.context.$implicit.scoreA, ' vs ', this.context.$implicit.scoreB, '');
        if (import4.checkBinding(throwOnChange, this._expr_4, currVal_4)) {
            this.renderer.setText(this._text_13, currVal_4);
            this._expr_4 = currVal_4;
        }
        var currVal_5 = this.context.$implicit.compB_flag;
        if (import4.checkBinding(throwOnChange, this._expr_5, currVal_5)) {
            this.renderer.setElementProperty(this._el_15, 'src', this.viewUtils.sanitizer.sanitize(import14.SecurityContext.URL, currVal_5));
            this._expr_5 = currVal_5;
        }
        var currVal_6 = this.context.$implicit.compB_name;
        if (import4.checkBinding(throwOnChange, this._expr_6, currVal_6)) {
            this.renderer.setElementAttribute(this._el_15, 'alt', ((currVal_6 == null) ? null : currVal_6.toString()));
            this._expr_6 = currVal_6;
        }
        var currVal_7 = import4.interpolate(1, '', this.context.$implicit.compB_name, '');
        if (import4.checkBinding(throwOnChange, this._expr_7, currVal_7)) {
            this.renderer.setText(this._text_18, currVal_7);
            this._expr_7 = currVal_7;
        }
        var currVal_8 = import4.interpolate(1, '', this.parent.context.getTime((this.context.$implicit.start || this.context.$implicit.end)), '');
        if (import4.checkBinding(throwOnChange, this._expr_8, currVal_8)) {
            this.renderer.setText(this._text_24, currVal_8);
            this._expr_8 = currVal_8;
        }
        this.detectViewChildrenChanges(throwOnChange);
    };
    return _View_Matches1;
}(import1.AppView));
function viewFactory_Matches1(viewUtils, parentInjector, declarationEl) {
    return new _View_Matches1(viewUtils, parentInjector, declarationEl);
}
//# sourceMappingURL=Matches.ngfactory.js.map