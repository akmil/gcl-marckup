/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
 /* tslint:disable */

import * as import0 from '@angular/core/src/render/api';
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/linker/element';
import * as import3 from './ConfirmEmailModal';
import * as import4 from '@angular/core/src/linker/view_utils';
import * as import5 from '@angular/core/src/di/injector';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/change_detection';
import * as import8 from '@angular/http/src/http';
import * as import9 from '../../../services/ModalService';
import * as import10 from '../../../services/LocalizationService';
import * as import11 from '../../../services/UserInformationService';
import * as import12 from '@angular/core/src/metadata/view';
import * as import13 from '@angular/core/src/linker/component_factory';
import * as import14 from '@angular/common/src/directives/ng_if';
import * as import15 from '@angular/core/src/linker/template_ref';
import * as import16 from '@angular/forms/src/directives/ng_form';
import * as import17 from '@angular/forms/src/directives/ng_control_status';
import * as import18 from '@angular/forms/src/directives/default_value_accessor';
import * as import19 from '@angular/forms/src/directives/validators';
import * as import20 from '@angular/forms/src/directives/ng_model';
import * as import21 from '@angular/core/src/linker/element_ref';
import * as import22 from '@angular/forms/src/validators';
import * as import23 from '@angular/forms/src/directives/control_value_accessor';
import * as import24 from '@angular/forms/src/directives/ng_control';
import * as import25 from '@angular/forms/src/directives/control_container';
var renderType_ConfirmEmailModal_Host:import0.RenderComponentType = (null as any);
class _View_ConfirmEmailModal_Host0 extends import1.AppView<any> {
  _el_0:any;
  /*private*/ _appEl_0:import2.AppElement;
  _ConfirmEmailModal_0_4:import3.ConfirmEmailModal;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_ConfirmEmailModal_Host0,renderType_ConfirmEmailModal_Host,import6.ViewType.HOST,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    this._el_0 = this.selectOrCreateHostElement('confirm-email-modal',rootSelector,(null as any));
    this._appEl_0 = new import2.AppElement(0,(null as any),this,this._el_0);
    var compView_0:any = viewFactory_ConfirmEmailModal0(this.viewUtils,this.injector(0),this._appEl_0);
    this._ConfirmEmailModal_0_4 = new import3.ConfirmEmailModal(this.parentInjector.get(import8.Http),this.parentInjector.get(import9.ModalService),this.parentInjector.get(import10.LocalizationService),this.parentInjector.get(import11.UserInformationService));
    this._appEl_0.initComponent(this._ConfirmEmailModal_0_4,[],compView_0);
    compView_0.create(this._ConfirmEmailModal_0_4,this.projectableNodes,(null as any));
    this.init([].concat([this._el_0]),[this._el_0],[],[]);
    return this._appEl_0;
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import3.ConfirmEmailModal) && (0 === requestNodeIndex))) { return this._ConfirmEmailModal_0_4; }
    return notFoundResult;
  }
}
function viewFactory_ConfirmEmailModal_Host0(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<any> {
  if ((renderType_ConfirmEmailModal_Host === (null as any))) { (renderType_ConfirmEmailModal_Host = viewUtils.createRenderComponentType('',0,import12.ViewEncapsulation.None,[],{})); }
  return new _View_ConfirmEmailModal_Host0(viewUtils,parentInjector,declarationEl);
}
export const ConfirmEmailModalNgFactory:import13.ComponentFactory<import3.ConfirmEmailModal> = new import13.ComponentFactory<import3.ConfirmEmailModal>('confirm-email-modal',viewFactory_ConfirmEmailModal_Host0,import3.ConfirmEmailModal);
const styles_ConfirmEmailModal:any[] = [];
var renderType_ConfirmEmailModal:import0.RenderComponentType = (null as any);
class _View_ConfirmEmailModal0 extends import1.AppView<import3.ConfirmEmailModal> {
  _el_0:any;
  _text_1:any;
  _el_2:any;
  _text_3:any;
  _el_4:any;
  _text_5:any;
  _el_6:any;
  _text_7:any;
  _el_8:any;
  _text_9:any;
  _el_10:any;
  _text_11:any;
  _text_12:any;
  _text_13:any;
  _el_14:any;
  _text_15:any;
  _text_16:any;
  _text_17:any;
  _anchor_18:any;
  /*private*/ _appEl_18:import2.AppElement;
  _TemplateRef_18_5:any;
  _NgIf_18_6:import14.NgIf;
  _text_19:any;
  _anchor_20:any;
  /*private*/ _appEl_20:import2.AppElement;
  _TemplateRef_20_5:any;
  _NgIf_20_6:import14.NgIf;
  _text_21:any;
  _text_22:any;
  _text_23:any;
  _text_24:any;
  /*private*/ _expr_1:any;
  /*private*/ _expr_2:any;
  /*private*/ _expr_3:any;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_ConfirmEmailModal0,renderType_ConfirmEmailModal,import6.ViewType.COMPONENT,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    const parentRenderNode:any = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
    this._el_0 = this.renderer.createElement(parentRenderNode,'div',(null as any));
    this.renderer.setElementAttribute(this._el_0,'aria-labelledby','exampleModalLabel');
    this.renderer.setElementAttribute(this._el_0,'class','modal');
    this.renderer.setElementAttribute(this._el_0,'id','exampleModal');
    this.renderer.setElementAttribute(this._el_0,'role','dialog');
    this.renderer.setElementAttribute(this._el_0,'tabindex','-1');
    this._text_1 = this.renderer.createText(this._el_0,'\n  ',(null as any));
    this._el_2 = this.renderer.createElement(this._el_0,'div',(null as any));
    this.renderer.setElementAttribute(this._el_2,'class','modal-dialog');
    this.renderer.setElementAttribute(this._el_2,'role','document');
    this._text_3 = this.renderer.createText(this._el_2,'\n    ',(null as any));
    this._el_4 = this.renderer.createElement(this._el_2,'div',(null as any));
    this.renderer.setElementAttribute(this._el_4,'class','modal-content');
    this._text_5 = this.renderer.createText(this._el_4,'\n      ',(null as any));
    this._el_6 = this.renderer.createElement(this._el_4,'div',(null as any));
    this.renderer.setElementAttribute(this._el_6,'class','modal-header');
    this._text_7 = this.renderer.createText(this._el_6,'\n        ',(null as any));
    this._el_8 = this.renderer.createElement(this._el_6,'button',(null as any));
    this.renderer.setElementAttribute(this._el_8,'aria-label','Close');
    this.renderer.setElementAttribute(this._el_8,'class','close');
    this.renderer.setElementAttribute(this._el_8,'type','button');
    this._text_9 = this.renderer.createText(this._el_8,'\n          ',(null as any));
    this._el_10 = this.renderer.createElement(this._el_8,'span',(null as any));
    this.renderer.setElementAttribute(this._el_10,'aria-hidden','true');
    this._text_11 = this.renderer.createText(this._el_10,'×',(null as any));
    this._text_12 = this.renderer.createText(this._el_8,'\n        ',(null as any));
    this._text_13 = this.renderer.createText(this._el_6,'\n        ',(null as any));
    this._el_14 = this.renderer.createElement(this._el_6,'h4',(null as any));
    this.renderer.setElementAttribute(this._el_14,'class','modal-title');
    this.renderer.setElementAttribute(this._el_14,'id','exampleModalLabel');
    this._text_15 = this.renderer.createText(this._el_14,'',(null as any));
    this._text_16 = this.renderer.createText(this._el_6,'\n      ',(null as any));
    this._text_17 = this.renderer.createText(this._el_4,'\n      ',(null as any));
    this._anchor_18 = this.renderer.createTemplateAnchor(this._el_4,(null as any));
    this._appEl_18 = new import2.AppElement(18,4,this,this._anchor_18);
    this._TemplateRef_18_5 = new import15.TemplateRef_(this._appEl_18,viewFactory_ConfirmEmailModal1);
    this._NgIf_18_6 = new import14.NgIf(this._appEl_18.vcRef,this._TemplateRef_18_5);
    this._text_19 = this.renderer.createText(this._el_4,'\n      ',(null as any));
    this._anchor_20 = this.renderer.createTemplateAnchor(this._el_4,(null as any));
    this._appEl_20 = new import2.AppElement(20,4,this,this._anchor_20);
    this._TemplateRef_20_5 = new import15.TemplateRef_(this._appEl_20,viewFactory_ConfirmEmailModal2);
    this._NgIf_20_6 = new import14.NgIf(this._appEl_20.vcRef,this._TemplateRef_20_5);
    this._text_21 = this.renderer.createText(this._el_4,'\n    ',(null as any));
    this._text_22 = this.renderer.createText(this._el_2,'\n  ',(null as any));
    this._text_23 = this.renderer.createText(this._el_0,'\n',(null as any));
    this._text_24 = this.renderer.createText(parentRenderNode,'\n',(null as any));
    var disposable_0:Function = this.renderer.listen(this._el_8,'click',this.eventHandler(this._handle_click_8_0.bind(this)));
    this._expr_1 = import7.UNINITIALIZED;
    this._expr_2 = import7.UNINITIALIZED;
    this._expr_3 = import7.UNINITIALIZED;
    this.init([],[
      this._el_0,
      this._text_1,
      this._el_2,
      this._text_3,
      this._el_4,
      this._text_5,
      this._el_6,
      this._text_7,
      this._el_8,
      this._text_9,
      this._el_10,
      this._text_11,
      this._text_12,
      this._text_13,
      this._el_14,
      this._text_15,
      this._text_16,
      this._text_17,
      this._anchor_18,
      this._text_19,
      this._anchor_20,
      this._text_21,
      this._text_22,
      this._text_23,
      this._text_24
    ]
    ,[disposable_0],[]);
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import15.TemplateRef) && (18 === requestNodeIndex))) { return this._TemplateRef_18_5; }
    if (((token === import14.NgIf) && (18 === requestNodeIndex))) { return this._NgIf_18_6; }
    if (((token === import15.TemplateRef) && (20 === requestNodeIndex))) { return this._TemplateRef_20_5; }
    if (((token === import14.NgIf) && (20 === requestNodeIndex))) { return this._NgIf_20_6; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_2:any = this.context.userInformation.userInformation.email;
    if (import4.checkBinding(throwOnChange,this._expr_2,currVal_2)) {
      this._NgIf_18_6.ngIf = currVal_2;
      this._expr_2 = currVal_2;
    }
    const currVal_3:boolean = !this.context.userInformation.userInformation.email;
    if (import4.checkBinding(throwOnChange,this._expr_3,currVal_3)) {
      this._NgIf_20_6.ngIf = currVal_3;
      this._expr_3 = currVal_3;
    }
    this.detectContentChildrenChanges(throwOnChange);
    const currVal_1:any = import4.interpolate(1,'',(this.context.userInformation.userInformation.email? ((this.context.lS.userLocalization == (null as any))? (null as any): this.context.lS.userLocalization.modal.send_confirmation): ((this.context.lS.userLocalization == (null as any))? (null as any): this.context.lS.userLocalization.modal.set_email)),'');
    if (import4.checkBinding(throwOnChange,this._expr_1,currVal_1)) {
      this.renderer.setText(this._text_15,currVal_1);
      this._expr_1 = currVal_1;
    }
    this.detectViewChildrenChanges(throwOnChange);
  }
  private _handle_click_8_0($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>this.context.hideConfirmEmailModal()) !== false);
    return (true && pd_0);
  }
}
export function viewFactory_ConfirmEmailModal0(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<import3.ConfirmEmailModal> {
  if ((renderType_ConfirmEmailModal === (null as any))) { (renderType_ConfirmEmailModal = viewUtils.createRenderComponentType('',0,import12.ViewEncapsulation.None,styles_ConfirmEmailModal,{})); }
  return new _View_ConfirmEmailModal0(viewUtils,parentInjector,declarationEl);
}
class _View_ConfirmEmailModal1 extends import1.AppView<any> {
  _el_0:any;
  _text_1:any;
  _el_2:any;
  _text_3:any;
  _el_4:any;
  _text_5:any;
  _text_6:any;
  _text_7:any;
  _el_8:any;
  _text_9:any;
  _el_10:any;
  _text_11:any;
  _text_12:any;
  _text_13:any;
  /*private*/ _expr_0:any;
  /*private*/ _expr_1:any;
  /*private*/ _expr_3:any;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_ConfirmEmailModal1,renderType_ConfirmEmailModal,import6.ViewType.EMBEDDED,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    this._el_0 = this.renderer.createElement((null as any),'div',(null as any));
    this._text_1 = this.renderer.createText(this._el_0,'\n        ',(null as any));
    this._el_2 = this.renderer.createElement(this._el_0,'div',(null as any));
    this.renderer.setElementAttribute(this._el_2,'class','modal-body');
    this._text_3 = this.renderer.createText(this._el_2,'',(null as any));
    this._el_4 = this.renderer.createElement(this._el_2,'a',(null as any));
    this.renderer.setElementAttribute(this._el_4,'href','#');
    this._text_5 = this.renderer.createText(this._el_4,'',(null as any));
    this._text_6 = this.renderer.createText(this._el_2,'\n        ',(null as any));
    this._text_7 = this.renderer.createText(this._el_0,'\n        ',(null as any));
    this._el_8 = this.renderer.createElement(this._el_0,'div',(null as any));
    this.renderer.setElementAttribute(this._el_8,'class','modal-footer text-xs-left');
    this._text_9 = this.renderer.createText(this._el_8,'\n          ',(null as any));
    this._el_10 = this.renderer.createElement(this._el_8,'button',(null as any));
    this.renderer.setElementAttribute(this._el_10,'class','btn btn-primary');
    this.renderer.setElementAttribute(this._el_10,'type','button');
    this._text_11 = this.renderer.createText(this._el_10,'',(null as any));
    this._text_12 = this.renderer.createText(this._el_8,'\n        ',(null as any));
    this._text_13 = this.renderer.createText(this._el_0,'\n      ',(null as any));
    this._expr_0 = import7.UNINITIALIZED;
    this._expr_1 = import7.UNINITIALIZED;
    var disposable_0:Function = this.renderer.listen(this._el_10,'click',this.eventHandler(this._handle_click_10_0.bind(this)));
    this._expr_3 = import7.UNINITIALIZED;
    this.init([].concat([this._el_0]),[
      this._el_0,
      this._text_1,
      this._el_2,
      this._text_3,
      this._el_4,
      this._text_5,
      this._text_6,
      this._text_7,
      this._el_8,
      this._text_9,
      this._el_10,
      this._text_11,
      this._text_12,
      this._text_13
    ]
    ,[disposable_0],[]);
    return (null as any);
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this.detectContentChildrenChanges(throwOnChange);
    const currVal_0:any = import4.interpolate(1,'\n          ',((this.parent.context.lS.userLocalization == (null as any))? (null as any): this.parent.context.lS.userLocalization.modal.message),' ');
    if (import4.checkBinding(throwOnChange,this._expr_0,currVal_0)) {
      this.renderer.setText(this._text_3,currVal_0);
      this._expr_0 = currVal_0;
    }
    const currVal_1:any = import4.interpolate(1,'',((this.parent.context.lS.userLocalization == (null as any))? (null as any): this.parent.context.lS.userLocalization.modal.settings),'');
    if (import4.checkBinding(throwOnChange,this._expr_1,currVal_1)) {
      this.renderer.setText(this._text_5,currVal_1);
      this._expr_1 = currVal_1;
    }
    const currVal_3:any = import4.interpolate(1,'',((this.parent.context.lS.userLocalization == (null as any))? (null as any): this.parent.context.lS.userLocalization.modal.send_again),'');
    if (import4.checkBinding(throwOnChange,this._expr_3,currVal_3)) {
      this.renderer.setText(this._text_11,currVal_3);
      this._expr_3 = currVal_3;
    }
    this.detectViewChildrenChanges(throwOnChange);
  }
  private _handle_click_10_0($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>this.parent.context.onSubmit()) !== false);
    return (true && pd_0);
  }
}
function viewFactory_ConfirmEmailModal1(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<any> {
  return new _View_ConfirmEmailModal1(viewUtils,parentInjector,declarationEl);
}
class _View_ConfirmEmailModal2 extends import1.AppView<any> {
  _el_0:any;
  _text_1:any;
  _el_2:any;
  _NgForm_2_3:import16.NgForm;
  _ControlContainer_2_4:any;
  _NgControlStatusGroup_2_5:import17.NgControlStatusGroup;
  _text_3:any;
  _el_4:any;
  _text_5:any;
  _el_6:any;
  _text_7:any;
  _el_8:any;
  _DefaultValueAccessor_8_3:import18.DefaultValueAccessor;
  _RequiredValidator_8_4:import19.RequiredValidator;
  _NG_VALIDATORS_8_5:any[];
  _NG_VALUE_ACCESSOR_8_6:any[];
  _NgModel_8_7:import20.NgModel;
  _NgControl_8_8:any;
  _NgControlStatus_8_9:import17.NgControlStatus;
  _text_9:any;
  _text_10:any;
  _el_11:any;
  _text_12:any;
  _el_13:any;
  _DefaultValueAccessor_13_3:import18.DefaultValueAccessor;
  _RequiredValidator_13_4:import19.RequiredValidator;
  _NG_VALIDATORS_13_5:any[];
  _NG_VALUE_ACCESSOR_13_6:any[];
  _NgModel_13_7:import20.NgModel;
  _NgControl_13_8:any;
  _NgControlStatus_13_9:import17.NgControlStatus;
  _text_14:any;
  _text_15:any;
  _text_16:any;
  _el_17:any;
  _text_18:any;
  _el_19:any;
  _text_20:any;
  _text_21:any;
  _text_22:any;
  _text_23:any;
  /*private*/ _expr_3:any;
  /*private*/ _expr_4:any;
  /*private*/ _expr_5:any;
  /*private*/ _expr_6:any;
  /*private*/ _expr_7:any;
  /*private*/ _expr_8:any;
  /*private*/ _expr_11:any;
  /*private*/ _expr_12:any;
  /*private*/ _expr_13:any;
  /*private*/ _expr_14:any;
  /*private*/ _expr_15:any;
  /*private*/ _expr_16:any;
  /*private*/ _expr_17:any;
  /*private*/ _expr_18:any;
  /*private*/ _expr_19:any;
  /*private*/ _expr_20:any;
  /*private*/ _expr_21:any;
  /*private*/ _expr_24:any;
  /*private*/ _expr_25:any;
  /*private*/ _expr_26:any;
  /*private*/ _expr_27:any;
  /*private*/ _expr_28:any;
  /*private*/ _expr_29:any;
  /*private*/ _expr_30:any;
  /*private*/ _expr_31:any;
  /*private*/ _expr_32:any;
  /*private*/ _expr_33:any;
  /*private*/ _expr_34:any;
  /*private*/ _expr_35:any;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_ConfirmEmailModal2,renderType_ConfirmEmailModal,import6.ViewType.EMBEDDED,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    this._el_0 = this.renderer.createElement((null as any),'div',(null as any));
    this._text_1 = this.renderer.createText(this._el_0,'\n        ',(null as any));
    this._el_2 = this.renderer.createElement(this._el_0,'form',(null as any));
    this.renderer.setElementAttribute(this._el_2,'class','form-horizontal clearfix');
    this._NgForm_2_3 = new import16.NgForm((null as any),(null as any));
    this._ControlContainer_2_4 = this._NgForm_2_3;
    this._NgControlStatusGroup_2_5 = new import17.NgControlStatusGroup(this._ControlContainer_2_4);
    this._text_3 = this.renderer.createText(this._el_2,'\n          ',(null as any));
    this._el_4 = this.renderer.createElement(this._el_2,'div',(null as any));
    this.renderer.setElementAttribute(this._el_4,'class','modal-body');
    this._text_5 = this.renderer.createText(this._el_4,'\n            ',(null as any));
    this._el_6 = this.renderer.createElement(this._el_4,'div',(null as any));
    this.renderer.setElementAttribute(this._el_6,'class','form-group');
    this._text_7 = this.renderer.createText(this._el_6,'\n              ',(null as any));
    this._el_8 = this.renderer.createElement(this._el_6,'input',(null as any));
    this.renderer.setElementAttribute(this._el_8,'class','form-control');
    this.renderer.setElementAttribute(this._el_8,'name','email');
    this.renderer.setElementAttribute(this._el_8,'ngModel','');
    this.renderer.setElementAttribute(this._el_8,'required','');
    this.renderer.setElementAttribute(this._el_8,'type','email');
    this._DefaultValueAccessor_8_3 = new import18.DefaultValueAccessor(this.renderer,new import21.ElementRef(this._el_8));
    this._RequiredValidator_8_4 = new import19.RequiredValidator();
    this._NG_VALIDATORS_8_5 = [this._RequiredValidator_8_4];
    this._NG_VALUE_ACCESSOR_8_6 = [this._DefaultValueAccessor_8_3];
    this._NgModel_8_7 = new import20.NgModel(this._ControlContainer_2_4,this._NG_VALIDATORS_8_5,(null as any),this._NG_VALUE_ACCESSOR_8_6);
    this._NgControl_8_8 = this._NgModel_8_7;
    this._NgControlStatus_8_9 = new import17.NgControlStatus(this._NgControl_8_8);
    this._text_9 = this.renderer.createText(this._el_6,'\n            ',(null as any));
    this._text_10 = this.renderer.createText(this._el_4,'\n            ',(null as any));
    this._el_11 = this.renderer.createElement(this._el_4,'div',(null as any));
    this.renderer.setElementAttribute(this._el_11,'class','form-group');
    this._text_12 = this.renderer.createText(this._el_11,'\n              ',(null as any));
    this._el_13 = this.renderer.createElement(this._el_11,'input',(null as any));
    this.renderer.setElementAttribute(this._el_13,'class','form-control');
    this.renderer.setElementAttribute(this._el_13,'name','password');
    this.renderer.setElementAttribute(this._el_13,'ngModel','');
    this.renderer.setElementAttribute(this._el_13,'required','');
    this.renderer.setElementAttribute(this._el_13,'type','password');
    this._DefaultValueAccessor_13_3 = new import18.DefaultValueAccessor(this.renderer,new import21.ElementRef(this._el_13));
    this._RequiredValidator_13_4 = new import19.RequiredValidator();
    this._NG_VALIDATORS_13_5 = [this._RequiredValidator_13_4];
    this._NG_VALUE_ACCESSOR_13_6 = [this._DefaultValueAccessor_13_3];
    this._NgModel_13_7 = new import20.NgModel(this._ControlContainer_2_4,this._NG_VALIDATORS_13_5,(null as any),this._NG_VALUE_ACCESSOR_13_6);
    this._NgControl_13_8 = this._NgModel_13_7;
    this._NgControlStatus_13_9 = new import17.NgControlStatus(this._NgControl_13_8);
    this._text_14 = this.renderer.createText(this._el_11,'\n            ',(null as any));
    this._text_15 = this.renderer.createText(this._el_4,'\n          ',(null as any));
    this._text_16 = this.renderer.createText(this._el_2,'\n          ',(null as any));
    this._el_17 = this.renderer.createElement(this._el_2,'div',(null as any));
    this.renderer.setElementAttribute(this._el_17,'class','modal-footer text-xs-left');
    this._text_18 = this.renderer.createText(this._el_17,'\n            ',(null as any));
    this._el_19 = this.renderer.createElement(this._el_17,'button',(null as any));
    this.renderer.setElementAttribute(this._el_19,'class','btn btn-primary');
    this.renderer.setElementAttribute(this._el_19,'type','submit');
    this._text_20 = this.renderer.createText(this._el_19,'',(null as any));
    this._text_21 = this.renderer.createText(this._el_17,'\n          ',(null as any));
    this._text_22 = this.renderer.createText(this._el_2,'\n        ',(null as any));
    this._text_23 = this.renderer.createText(this._el_0,'\n      ',(null as any));
    var disposable_0:Function = this.renderer.listen(this._el_2,'ngSubmit',this.eventHandler(this._handle_ngSubmit_2_0.bind(this)));
    var disposable_1:Function = this.renderer.listen(this._el_2,'submit',this.eventHandler(this._handle_submit_2_1.bind(this)));
    var disposable_2:Function = this.renderer.listen(this._el_2,'reset',this.eventHandler(this._handle_reset_2_2.bind(this)));
    const subscription_0:any = this._NgForm_2_3.ngSubmit.subscribe(this.eventHandler(this._handle_ngSubmit_2_0.bind(this)));
    this._expr_3 = import7.UNINITIALIZED;
    this._expr_4 = import7.UNINITIALIZED;
    this._expr_5 = import7.UNINITIALIZED;
    this._expr_6 = import7.UNINITIALIZED;
    this._expr_7 = import7.UNINITIALIZED;
    this._expr_8 = import7.UNINITIALIZED;
    this._expr_11 = import7.UNINITIALIZED;
    var disposable_3:Function = this.renderer.listen(this._el_8,'input',this.eventHandler(this._handle_input_8_0.bind(this)));
    var disposable_4:Function = this.renderer.listen(this._el_8,'blur',this.eventHandler(this._handle_blur_8_1.bind(this)));
    this._expr_12 = import7.UNINITIALIZED;
    this._expr_13 = import7.UNINITIALIZED;
    this._expr_14 = import7.UNINITIALIZED;
    this._expr_15 = import7.UNINITIALIZED;
    this._expr_16 = import7.UNINITIALIZED;
    this._expr_17 = import7.UNINITIALIZED;
    this._expr_18 = import7.UNINITIALIZED;
    this._expr_19 = import7.UNINITIALIZED;
    this._expr_20 = import7.UNINITIALIZED;
    this._expr_21 = import7.UNINITIALIZED;
    this._expr_24 = import7.UNINITIALIZED;
    var disposable_5:Function = this.renderer.listen(this._el_13,'input',this.eventHandler(this._handle_input_13_0.bind(this)));
    var disposable_6:Function = this.renderer.listen(this._el_13,'blur',this.eventHandler(this._handle_blur_13_1.bind(this)));
    this._expr_25 = import7.UNINITIALIZED;
    this._expr_26 = import7.UNINITIALIZED;
    this._expr_27 = import7.UNINITIALIZED;
    this._expr_28 = import7.UNINITIALIZED;
    this._expr_29 = import7.UNINITIALIZED;
    this._expr_30 = import7.UNINITIALIZED;
    this._expr_31 = import7.UNINITIALIZED;
    this._expr_32 = import7.UNINITIALIZED;
    this._expr_33 = import7.UNINITIALIZED;
    this._expr_34 = import7.UNINITIALIZED;
    this._expr_35 = import7.UNINITIALIZED;
    this.init([].concat([this._el_0]),[
      this._el_0,
      this._text_1,
      this._el_2,
      this._text_3,
      this._el_4,
      this._text_5,
      this._el_6,
      this._text_7,
      this._el_8,
      this._text_9,
      this._text_10,
      this._el_11,
      this._text_12,
      this._el_13,
      this._text_14,
      this._text_15,
      this._text_16,
      this._el_17,
      this._text_18,
      this._el_19,
      this._text_20,
      this._text_21,
      this._text_22,
      this._text_23
    ]
    ,[
      disposable_0,
      disposable_1,
      disposable_2,
      disposable_3,
      disposable_4,
      disposable_5,
      disposable_6
    ]
    ,[subscription_0]);
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import18.DefaultValueAccessor) && (8 === requestNodeIndex))) { return this._DefaultValueAccessor_8_3; }
    if (((token === import19.RequiredValidator) && (8 === requestNodeIndex))) { return this._RequiredValidator_8_4; }
    if (((token === import22.NG_VALIDATORS) && (8 === requestNodeIndex))) { return this._NG_VALIDATORS_8_5; }
    if (((token === import23.NG_VALUE_ACCESSOR) && (8 === requestNodeIndex))) { return this._NG_VALUE_ACCESSOR_8_6; }
    if (((token === import20.NgModel) && (8 === requestNodeIndex))) { return this._NgModel_8_7; }
    if (((token === import24.NgControl) && (8 === requestNodeIndex))) { return this._NgControl_8_8; }
    if (((token === import17.NgControlStatus) && (8 === requestNodeIndex))) { return this._NgControlStatus_8_9; }
    if (((token === import18.DefaultValueAccessor) && (13 === requestNodeIndex))) { return this._DefaultValueAccessor_13_3; }
    if (((token === import19.RequiredValidator) && (13 === requestNodeIndex))) { return this._RequiredValidator_13_4; }
    if (((token === import22.NG_VALIDATORS) && (13 === requestNodeIndex))) { return this._NG_VALIDATORS_13_5; }
    if (((token === import23.NG_VALUE_ACCESSOR) && (13 === requestNodeIndex))) { return this._NG_VALUE_ACCESSOR_13_6; }
    if (((token === import20.NgModel) && (13 === requestNodeIndex))) { return this._NgModel_13_7; }
    if (((token === import24.NgControl) && (13 === requestNodeIndex))) { return this._NgControl_13_8; }
    if (((token === import17.NgControlStatus) && (13 === requestNodeIndex))) { return this._NgControlStatus_13_9; }
    if (((token === import16.NgForm) && ((2 <= requestNodeIndex) && (requestNodeIndex <= 22)))) { return this._NgForm_2_3; }
    if (((token === import25.ControlContainer) && ((2 <= requestNodeIndex) && (requestNodeIndex <= 22)))) { return this._ControlContainer_2_4; }
    if (((token === import17.NgControlStatusGroup) && ((2 <= requestNodeIndex) && (requestNodeIndex <= 22)))) { return this._NgControlStatusGroup_2_5; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    var changes:{[key: string]:import7.SimpleChange} = (null as any);
    const currVal_12:any = '';
    if (import4.checkBinding(throwOnChange,this._expr_12,currVal_12)) {
      this._RequiredValidator_8_4.required = currVal_12;
      this._expr_12 = currVal_12;
    }
    changes = (null as any);
    const currVal_14:any = 'email';
    if (import4.checkBinding(throwOnChange,this._expr_14,currVal_14)) {
      this._NgModel_8_7.name = currVal_14;
      if ((changes === (null as any))) { (changes = {}); }
      changes['name'] = new import7.SimpleChange(this._expr_14,currVal_14);
      this._expr_14 = currVal_14;
    }
    const currVal_15:any = '';
    if (import4.checkBinding(throwOnChange,this._expr_15,currVal_15)) {
      this._NgModel_8_7.model = currVal_15;
      if ((changes === (null as any))) { (changes = {}); }
      changes['model'] = new import7.SimpleChange(this._expr_15,currVal_15);
      this._expr_15 = currVal_15;
    }
    if ((changes !== (null as any))) { this._NgModel_8_7.ngOnChanges(changes); }
    const currVal_25:any = '';
    if (import4.checkBinding(throwOnChange,this._expr_25,currVal_25)) {
      this._RequiredValidator_13_4.required = currVal_25;
      this._expr_25 = currVal_25;
    }
    changes = (null as any);
    const currVal_27:any = 'password';
    if (import4.checkBinding(throwOnChange,this._expr_27,currVal_27)) {
      this._NgModel_13_7.name = currVal_27;
      if ((changes === (null as any))) { (changes = {}); }
      changes['name'] = new import7.SimpleChange(this._expr_27,currVal_27);
      this._expr_27 = currVal_27;
    }
    const currVal_28:any = '';
    if (import4.checkBinding(throwOnChange,this._expr_28,currVal_28)) {
      this._NgModel_13_7.model = currVal_28;
      if ((changes === (null as any))) { (changes = {}); }
      changes['model'] = new import7.SimpleChange(this._expr_28,currVal_28);
      this._expr_28 = currVal_28;
    }
    if ((changes !== (null as any))) { this._NgModel_13_7.ngOnChanges(changes); }
    this.detectContentChildrenChanges(throwOnChange);
    const currVal_3:any = this._NgControlStatusGroup_2_5.ngClassUntouched;
    if (import4.checkBinding(throwOnChange,this._expr_3,currVal_3)) {
      this.renderer.setElementClass(this._el_2,'ng-untouched',currVal_3);
      this._expr_3 = currVal_3;
    }
    const currVal_4:any = this._NgControlStatusGroup_2_5.ngClassTouched;
    if (import4.checkBinding(throwOnChange,this._expr_4,currVal_4)) {
      this.renderer.setElementClass(this._el_2,'ng-touched',currVal_4);
      this._expr_4 = currVal_4;
    }
    const currVal_5:any = this._NgControlStatusGroup_2_5.ngClassPristine;
    if (import4.checkBinding(throwOnChange,this._expr_5,currVal_5)) {
      this.renderer.setElementClass(this._el_2,'ng-pristine',currVal_5);
      this._expr_5 = currVal_5;
    }
    const currVal_6:any = this._NgControlStatusGroup_2_5.ngClassDirty;
    if (import4.checkBinding(throwOnChange,this._expr_6,currVal_6)) {
      this.renderer.setElementClass(this._el_2,'ng-dirty',currVal_6);
      this._expr_6 = currVal_6;
    }
    const currVal_7:any = this._NgControlStatusGroup_2_5.ngClassValid;
    if (import4.checkBinding(throwOnChange,this._expr_7,currVal_7)) {
      this.renderer.setElementClass(this._el_2,'ng-valid',currVal_7);
      this._expr_7 = currVal_7;
    }
    const currVal_8:any = this._NgControlStatusGroup_2_5.ngClassInvalid;
    if (import4.checkBinding(throwOnChange,this._expr_8,currVal_8)) {
      this.renderer.setElementClass(this._el_2,'ng-invalid',currVal_8);
      this._expr_8 = currVal_8;
    }
    const currVal_11:any = import4.interpolate(1,'',((this.parent.context.lS.userLocalization == (null as any))? (null as any): this.parent.context.lS.userLocalization.modal.email),'');
    if (import4.checkBinding(throwOnChange,this._expr_11,currVal_11)) {
      this.renderer.setElementProperty(this._el_8,'placeholder',currVal_11);
      this._expr_11 = currVal_11;
    }
    const currVal_13:any = (this._RequiredValidator_8_4.required? '': (null as any));
    if (import4.checkBinding(throwOnChange,this._expr_13,currVal_13)) {
      this.renderer.setElementAttribute(this._el_8,'required',((currVal_13 == (null as any))? (null as any): currVal_13.toString()));
      this._expr_13 = currVal_13;
    }
    const currVal_16:any = this._NgControlStatus_8_9.ngClassUntouched;
    if (import4.checkBinding(throwOnChange,this._expr_16,currVal_16)) {
      this.renderer.setElementClass(this._el_8,'ng-untouched',currVal_16);
      this._expr_16 = currVal_16;
    }
    const currVal_17:any = this._NgControlStatus_8_9.ngClassTouched;
    if (import4.checkBinding(throwOnChange,this._expr_17,currVal_17)) {
      this.renderer.setElementClass(this._el_8,'ng-touched',currVal_17);
      this._expr_17 = currVal_17;
    }
    const currVal_18:any = this._NgControlStatus_8_9.ngClassPristine;
    if (import4.checkBinding(throwOnChange,this._expr_18,currVal_18)) {
      this.renderer.setElementClass(this._el_8,'ng-pristine',currVal_18);
      this._expr_18 = currVal_18;
    }
    const currVal_19:any = this._NgControlStatus_8_9.ngClassDirty;
    if (import4.checkBinding(throwOnChange,this._expr_19,currVal_19)) {
      this.renderer.setElementClass(this._el_8,'ng-dirty',currVal_19);
      this._expr_19 = currVal_19;
    }
    const currVal_20:any = this._NgControlStatus_8_9.ngClassValid;
    if (import4.checkBinding(throwOnChange,this._expr_20,currVal_20)) {
      this.renderer.setElementClass(this._el_8,'ng-valid',currVal_20);
      this._expr_20 = currVal_20;
    }
    const currVal_21:any = this._NgControlStatus_8_9.ngClassInvalid;
    if (import4.checkBinding(throwOnChange,this._expr_21,currVal_21)) {
      this.renderer.setElementClass(this._el_8,'ng-invalid',currVal_21);
      this._expr_21 = currVal_21;
    }
    const currVal_24:any = import4.interpolate(1,'',((this.parent.context.lS.userLocalization == (null as any))? (null as any): this.parent.context.lS.userLocalization.modal.password),'');
    if (import4.checkBinding(throwOnChange,this._expr_24,currVal_24)) {
      this.renderer.setElementProperty(this._el_13,'placeholder',currVal_24);
      this._expr_24 = currVal_24;
    }
    const currVal_26:any = (this._RequiredValidator_13_4.required? '': (null as any));
    if (import4.checkBinding(throwOnChange,this._expr_26,currVal_26)) {
      this.renderer.setElementAttribute(this._el_13,'required',((currVal_26 == (null as any))? (null as any): currVal_26.toString()));
      this._expr_26 = currVal_26;
    }
    const currVal_29:any = this._NgControlStatus_13_9.ngClassUntouched;
    if (import4.checkBinding(throwOnChange,this._expr_29,currVal_29)) {
      this.renderer.setElementClass(this._el_13,'ng-untouched',currVal_29);
      this._expr_29 = currVal_29;
    }
    const currVal_30:any = this._NgControlStatus_13_9.ngClassTouched;
    if (import4.checkBinding(throwOnChange,this._expr_30,currVal_30)) {
      this.renderer.setElementClass(this._el_13,'ng-touched',currVal_30);
      this._expr_30 = currVal_30;
    }
    const currVal_31:any = this._NgControlStatus_13_9.ngClassPristine;
    if (import4.checkBinding(throwOnChange,this._expr_31,currVal_31)) {
      this.renderer.setElementClass(this._el_13,'ng-pristine',currVal_31);
      this._expr_31 = currVal_31;
    }
    const currVal_32:any = this._NgControlStatus_13_9.ngClassDirty;
    if (import4.checkBinding(throwOnChange,this._expr_32,currVal_32)) {
      this.renderer.setElementClass(this._el_13,'ng-dirty',currVal_32);
      this._expr_32 = currVal_32;
    }
    const currVal_33:any = this._NgControlStatus_13_9.ngClassValid;
    if (import4.checkBinding(throwOnChange,this._expr_33,currVal_33)) {
      this.renderer.setElementClass(this._el_13,'ng-valid',currVal_33);
      this._expr_33 = currVal_33;
    }
    const currVal_34:any = this._NgControlStatus_13_9.ngClassInvalid;
    if (import4.checkBinding(throwOnChange,this._expr_34,currVal_34)) {
      this.renderer.setElementClass(this._el_13,'ng-invalid',currVal_34);
      this._expr_34 = currVal_34;
    }
    const currVal_35:any = import4.interpolate(1,'',((this.parent.context.lS.userLocalization == (null as any))? (null as any): this.parent.context.lS.userLocalization.modal.save_email),'');
    if (import4.checkBinding(throwOnChange,this._expr_35,currVal_35)) {
      this.renderer.setText(this._text_20,currVal_35);
      this._expr_35 = currVal_35;
    }
    this.detectViewChildrenChanges(throwOnChange);
  }
  destroyInternal():void {
    this._NgModel_8_7.ngOnDestroy();
    this._NgModel_13_7.ngOnDestroy();
  }
  private _handle_ngSubmit_2_0($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>this.parent.context.setEmail(this._NgForm_2_3)) !== false);
    return (true && pd_0);
  }
  private _handle_submit_2_1($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>this._NgForm_2_3.onSubmit()) !== false);
    return (true && pd_0);
  }
  private _handle_reset_2_2($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>this._NgForm_2_3.onReset()) !== false);
    return (true && pd_0);
  }
  private _handle_input_8_0($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>this._DefaultValueAccessor_8_3.onChange($event.target.value)) !== false);
    return (true && pd_0);
  }
  private _handle_blur_8_1($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>this._DefaultValueAccessor_8_3.onTouched()) !== false);
    return (true && pd_0);
  }
  private _handle_input_13_0($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>this._DefaultValueAccessor_13_3.onChange($event.target.value)) !== false);
    return (true && pd_0);
  }
  private _handle_blur_13_1($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>this._DefaultValueAccessor_13_3.onTouched()) !== false);
    return (true && pd_0);
  }
}
function viewFactory_ConfirmEmailModal2(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<any> {
  return new _View_ConfirmEmailModal2(viewUtils,parentInjector,declarationEl);
}