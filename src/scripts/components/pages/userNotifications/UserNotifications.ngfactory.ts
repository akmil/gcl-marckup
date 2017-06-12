/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
 /* tslint:disable */

import * as import0 from '@angular/core/src/render/api';
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/linker/element';
import * as import3 from './UserNotifications';
import * as import4 from '@angular/core/src/linker/view_utils';
import * as import5 from '@angular/core/src/di/injector';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/change_detection';
import * as import8 from '../../../services/LocalizationService';
import * as import9 from '../../../services/UserInformationService';
import * as import10 from '../../../services/UserNotificationsService';
import * as import11 from '../../../services/UserFriendsService';
import * as import12 from '../../../services/TeamService';
import * as import13 from 'ng2-toastr/src/toast-manager';
import * as import14 from '@angular/core/src/metadata/view';
import * as import15 from '@angular/core/src/linker/component_factory';
import * as import16 from '@angular/common/src/directives/ng_for';
import * as import17 from '@angular/common/src/pipes/date_pipe';
import * as import18 from '@angular/core/src/linker/template_ref';
import * as import19 from '@angular/core/src/change_detection/differs/iterable_differs';
import * as import20 from '@angular/core/src/i18n/tokens';
import * as import21 from '@angular/common/src/directives/ng_if';
import * as import22 from '@angular/core/src/security';
var renderType_UserNotifications_Host:import0.RenderComponentType = (null as any);
class _View_UserNotifications_Host0 extends import1.AppView<any> {
  _el_0:any;
  /*private*/ _appEl_0:import2.AppElement;
  _UserNotifications_0_4:import3.UserNotifications;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_UserNotifications_Host0,renderType_UserNotifications_Host,import6.ViewType.HOST,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    this._el_0 = this.selectOrCreateHostElement('user-notifications',rootSelector,(null as any));
    this._appEl_0 = new import2.AppElement(0,(null as any),this,this._el_0);
    var compView_0:any = viewFactory_UserNotifications0(this.viewUtils,this.injector(0),this._appEl_0);
    this._UserNotifications_0_4 = new import3.UserNotifications(this.parentInjector.get(import8.LocalizationService),this.parentInjector.get(import9.UserInformationService),this.parentInjector.get(import10.UserNotificationsService),this.parentInjector.get(import11.UserFriendsService),this.parentInjector.get(import12.TeamService),this.parentInjector.get(import13.ToastsManager));
    this._appEl_0.initComponent(this._UserNotifications_0_4,[],compView_0);
    compView_0.create(this._UserNotifications_0_4,this.projectableNodes,(null as any));
    this.init([].concat([this._el_0]),[this._el_0],[],[]);
    return this._appEl_0;
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import3.UserNotifications) && (0 === requestNodeIndex))) { return this._UserNotifications_0_4; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    if (((this.numberOfChecks === 0) && !throwOnChange)) { this._UserNotifications_0_4.ngOnInit(); }
    this.detectContentChildrenChanges(throwOnChange);
    this.detectViewChildrenChanges(throwOnChange);
  }
}
function viewFactory_UserNotifications_Host0(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<any> {
  if ((renderType_UserNotifications_Host === (null as any))) { (renderType_UserNotifications_Host = viewUtils.createRenderComponentType('',0,import14.ViewEncapsulation.None,[],{})); }
  return new _View_UserNotifications_Host0(viewUtils,parentInjector,declarationEl);
}
export const UserNotificationsNgFactory:import15.ComponentFactory<import3.UserNotifications> = new import15.ComponentFactory<import3.UserNotifications>('user-notifications',viewFactory_UserNotifications_Host0,import3.UserNotifications);
const styles_UserNotifications:any[] = [];
var renderType_UserNotifications:import0.RenderComponentType = (null as any);
class _View_UserNotifications0 extends import1.AppView<import3.UserNotifications> {
  _el_0:any;
  _text_1:any;
  _el_2:any;
  _text_3:any;
  _text_4:any;
  _anchor_5:any;
  /*private*/ _appEl_5:import2.AppElement;
  _TemplateRef_5_5:any;
  _NgFor_5_6:import16.NgFor;
  _text_6:any;
  _text_7:any;
  /*private*/ _expr_0:any;
  /*private*/ _expr_1:any;
  _pipe_date_0:import17.DatePipe;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_UserNotifications0,renderType_UserNotifications,import6.ViewType.COMPONENT,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    const parentRenderNode:any = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
    this._el_0 = this.renderer.createElement(parentRenderNode,'div',(null as any));
    this._text_1 = this.renderer.createText(this._el_0,'\n  ',(null as any));
    this._el_2 = this.renderer.createElement(this._el_0,'h2',(null as any));
    this._text_3 = this.renderer.createText(this._el_2,'',(null as any));
    this._text_4 = this.renderer.createText(this._el_0,'\n  ',(null as any));
    this._anchor_5 = this.renderer.createTemplateAnchor(this._el_0,(null as any));
    this._appEl_5 = new import2.AppElement(5,0,this,this._anchor_5);
    this._TemplateRef_5_5 = new import18.TemplateRef_(this._appEl_5,viewFactory_UserNotifications1);
    this._NgFor_5_6 = new import16.NgFor(this._appEl_5.vcRef,this._TemplateRef_5_5,this.parentInjector.get(import19.IterableDiffers),this.ref);
    this._text_6 = this.renderer.createText(this._el_0,'\n',(null as any));
    this._text_7 = this.renderer.createText(parentRenderNode,'\n',(null as any));
    this._expr_0 = import7.UNINITIALIZED;
    this._expr_1 = import7.UNINITIALIZED;
    this._pipe_date_0 = new import17.DatePipe(this.parentInjector.get(import20.LOCALE_ID));
    this.init([],[
      this._el_0,
      this._text_1,
      this._el_2,
      this._text_3,
      this._text_4,
      this._anchor_5,
      this._text_6,
      this._text_7
    ]
    ,[],[]);
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import18.TemplateRef) && (5 === requestNodeIndex))) { return this._TemplateRef_5_5; }
    if (((token === import16.NgFor) && (5 === requestNodeIndex))) { return this._NgFor_5_6; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    var changes:{[key: string]:import7.SimpleChange} = (null as any);
    changes = (null as any);
    const currVal_1:any = this.context.userNotificationsService.notifications;
    if (import4.checkBinding(throwOnChange,this._expr_1,currVal_1)) {
      this._NgFor_5_6.ngForOf = currVal_1;
      if ((changes === (null as any))) { (changes = {}); }
      changes['ngForOf'] = new import7.SimpleChange(this._expr_1,currVal_1);
      this._expr_1 = currVal_1;
    }
    if ((changes !== (null as any))) { this._NgFor_5_6.ngOnChanges(changes); }
    if (!throwOnChange) { this._NgFor_5_6.ngDoCheck(); }
    this.detectContentChildrenChanges(throwOnChange);
    const currVal_0:any = import4.interpolate(1,'',((this.context.lS.userLocalization == (null as any))? (null as any): this.context.lS.userLocalization.pages.notifications.title),'');
    if (import4.checkBinding(throwOnChange,this._expr_0,currVal_0)) {
      this.renderer.setText(this._text_3,currVal_0);
      this._expr_0 = currVal_0;
    }
    this.detectViewChildrenChanges(throwOnChange);
  }
}
export function viewFactory_UserNotifications0(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<import3.UserNotifications> {
  if ((renderType_UserNotifications === (null as any))) { (renderType_UserNotifications = viewUtils.createRenderComponentType('',0,import14.ViewEncapsulation.None,styles_UserNotifications,{})); }
  return new _View_UserNotifications0(viewUtils,parentInjector,declarationEl);
}
class _View_UserNotifications1 extends import1.AppView<any> {
  _el_0:any;
  _text_1:any;
  _el_2:any;
  _text_3:any;
  _el_4:any;
  _text_5:any;
  _anchor_6:any;
  /*private*/ _appEl_6:import2.AppElement;
  _TemplateRef_6_5:any;
  _NgIf_6_6:import21.NgIf;
  _text_7:any;
  _el_8:any;
  _text_9:any;
  _el_10:any;
  _text_11:any;
  _text_12:any;
  _el_13:any;
  _text_14:any;
  _text_15:any;
  _el_16:any;
  _text_17:any;
  _text_18:any;
  _text_19:any;
  _text_20:any;
  _anchor_21:any;
  /*private*/ _appEl_21:import2.AppElement;
  _TemplateRef_21_5:any;
  _NgIf_21_6:import21.NgIf;
  _text_22:any;
  _anchor_23:any;
  /*private*/ _appEl_23:import2.AppElement;
  _TemplateRef_23_5:any;
  _NgIf_23_6:import21.NgIf;
  _text_24:any;
  _text_25:any;
  /*private*/ _expr_0:any;
  /*private*/ _expr_1:any;
  _pipe_date_0_0:any;
  /*private*/ _expr_2:any;
  /*private*/ _expr_3:any;
  /*private*/ _expr_4:any;
  /*private*/ _expr_5:any;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_UserNotifications1,renderType_UserNotifications,import6.ViewType.EMBEDDED,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    this._el_0 = this.renderer.createElement((null as any),'div',(null as any));
    this.renderer.setElementAttribute(this._el_0,'class','card');
    this._text_1 = this.renderer.createText(this._el_0,'\n    ',(null as any));
    this._el_2 = this.renderer.createElement(this._el_0,'div',(null as any));
    this.renderer.setElementAttribute(this._el_2,'class','card-block');
    this._text_3 = this.renderer.createText(this._el_2,'\n      ',(null as any));
    this._el_4 = this.renderer.createElement(this._el_2,'div',(null as any));
    this.renderer.setElementAttribute(this._el_4,'class','row');
    this._text_5 = this.renderer.createText(this._el_4,'\n        ',(null as any));
    this._anchor_6 = this.renderer.createTemplateAnchor(this._el_4,(null as any));
    this._appEl_6 = new import2.AppElement(6,4,this,this._anchor_6);
    this._TemplateRef_6_5 = new import18.TemplateRef_(this._appEl_6,viewFactory_UserNotifications2);
    this._NgIf_6_6 = new import21.NgIf(this._appEl_6.vcRef,this._TemplateRef_6_5);
    this._text_7 = this.renderer.createText(this._el_4,'\n        ',(null as any));
    this._el_8 = this.renderer.createElement(this._el_4,'div',(null as any));
    this.renderer.setElementAttribute(this._el_8,'class','col-md-9');
    this._text_9 = this.renderer.createText(this._el_8,'\n          ',(null as any));
    this._el_10 = this.renderer.createElement(this._el_8,'h4',(null as any));
    this.renderer.setElementAttribute(this._el_10,'class','card-title');
    this._text_11 = this.renderer.createText(this._el_10,'',(null as any));
    this._text_12 = this.renderer.createText(this._el_8,'\n          ',(null as any));
    this._el_13 = this.renderer.createElement(this._el_8,'h6',(null as any));
    this.renderer.setElementAttribute(this._el_13,'class','card-subtitle mb-2 text-muted');
    this._text_14 = this.renderer.createText(this._el_13,'',(null as any));
    this._text_15 = this.renderer.createText(this._el_8,'\n          ',(null as any));
    this._el_16 = this.renderer.createElement(this._el_8,'p',(null as any));
    this._text_17 = this.renderer.createText(this._el_16,'',(null as any));
    this._text_18 = this.renderer.createText(this._el_8,'\n        ',(null as any));
    this._text_19 = this.renderer.createText(this._el_4,'\n      ',(null as any));
    this._text_20 = this.renderer.createText(this._el_2,'\n      ',(null as any));
    this._anchor_21 = this.renderer.createTemplateAnchor(this._el_2,(null as any));
    this._appEl_21 = new import2.AppElement(21,2,this,this._anchor_21);
    this._TemplateRef_21_5 = new import18.TemplateRef_(this._appEl_21,viewFactory_UserNotifications3);
    this._NgIf_21_6 = new import21.NgIf(this._appEl_21.vcRef,this._TemplateRef_21_5);
    this._text_22 = this.renderer.createText(this._el_2,'\n      ',(null as any));
    this._anchor_23 = this.renderer.createTemplateAnchor(this._el_2,(null as any));
    this._appEl_23 = new import2.AppElement(23,2,this,this._anchor_23);
    this._TemplateRef_23_5 = new import18.TemplateRef_(this._appEl_23,viewFactory_UserNotifications4);
    this._NgIf_23_6 = new import21.NgIf(this._appEl_23.vcRef,this._TemplateRef_23_5);
    this._text_24 = this.renderer.createText(this._el_2,'\n    ',(null as any));
    this._text_25 = this.renderer.createText(this._el_0,'\n  ',(null as any));
    this._expr_0 = import7.UNINITIALIZED;
    this._expr_1 = import7.UNINITIALIZED;
    this._pipe_date_0_0 = import4.pureProxy2((<_View_UserNotifications0>this.parent)._pipe_date_0.transform.bind((<_View_UserNotifications0>this.parent)._pipe_date_0));
    this._expr_2 = import7.UNINITIALIZED;
    this._expr_3 = import7.UNINITIALIZED;
    this._expr_4 = import7.UNINITIALIZED;
    this._expr_5 = import7.UNINITIALIZED;
    this.init([].concat([this._el_0]),[
      this._el_0,
      this._text_1,
      this._el_2,
      this._text_3,
      this._el_4,
      this._text_5,
      this._anchor_6,
      this._text_7,
      this._el_8,
      this._text_9,
      this._el_10,
      this._text_11,
      this._text_12,
      this._el_13,
      this._text_14,
      this._text_15,
      this._el_16,
      this._text_17,
      this._text_18,
      this._text_19,
      this._text_20,
      this._anchor_21,
      this._text_22,
      this._anchor_23,
      this._text_24,
      this._text_25
    ]
    ,[],[]);
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import18.TemplateRef) && (6 === requestNodeIndex))) { return this._TemplateRef_6_5; }
    if (((token === import21.NgIf) && (6 === requestNodeIndex))) { return this._NgIf_6_6; }
    if (((token === import18.TemplateRef) && (21 === requestNodeIndex))) { return this._TemplateRef_21_5; }
    if (((token === import21.NgIf) && (21 === requestNodeIndex))) { return this._NgIf_21_6; }
    if (((token === import18.TemplateRef) && (23 === requestNodeIndex))) { return this._TemplateRef_23_5; }
    if (((token === import21.NgIf) && (23 === requestNodeIndex))) { return this._NgIf_23_6; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const valUnwrapper:any = new import7.ValueUnwrapper();
    const currVal_0:any = this.context.$implicit.author;
    if (import4.checkBinding(throwOnChange,this._expr_0,currVal_0)) {
      this._NgIf_6_6.ngIf = currVal_0;
      this._expr_0 = currVal_0;
    }
    const currVal_4:any = (this.context.$implicit.friendInvite && !this.context.$implicit.friendInvite.confirmed);
    if (import4.checkBinding(throwOnChange,this._expr_4,currVal_4)) {
      this._NgIf_21_6.ngIf = currVal_4;
      this._expr_4 = currVal_4;
    }
    const currVal_5:any = (this.context.$implicit.teamInvite && !this.context.$implicit.teamInvite.confirmed);
    if (import4.checkBinding(throwOnChange,this._expr_5,currVal_5)) {
      this._NgIf_23_6.ngIf = currVal_5;
      this._expr_5 = currVal_5;
    }
    this.detectContentChildrenChanges(throwOnChange);
    const currVal_1:any = import4.interpolate(1,'',this.context.$implicit.title,'');
    if (import4.checkBinding(throwOnChange,this._expr_1,currVal_1)) {
      this.renderer.setText(this._text_11,currVal_1);
      this._expr_1 = currVal_1;
    }
    valUnwrapper.reset();
    const currVal_2:any = import4.interpolate(1,'',valUnwrapper.unwrap(import4.castByValue(this._pipe_date_0_0,(<_View_UserNotifications0>this.parent)._pipe_date_0.transform)(this.context.$implicit.created_at,'dd/MM/yyyy HH:mm')),'');
    if ((valUnwrapper.hasWrappedValue || import4.checkBinding(throwOnChange,this._expr_2,currVal_2))) {
      this.renderer.setText(this._text_14,currVal_2);
      this._expr_2 = currVal_2;
    }
    const currVal_3:any = import4.interpolate(1,'',this.context.$implicit.message,'');
    if (import4.checkBinding(throwOnChange,this._expr_3,currVal_3)) {
      this.renderer.setText(this._text_17,currVal_3);
      this._expr_3 = currVal_3;
    }
    this.detectViewChildrenChanges(throwOnChange);
  }
}
function viewFactory_UserNotifications1(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<any> {
  return new _View_UserNotifications1(viewUtils,parentInjector,declarationEl);
}
class _View_UserNotifications2 extends import1.AppView<any> {
  _el_0:any;
  _text_1:any;
  _el_2:any;
  _text_3:any;
  /*private*/ _expr_0:any;
  /*private*/ _expr_1:any;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_UserNotifications2,renderType_UserNotifications,import6.ViewType.EMBEDDED,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    this._el_0 = this.renderer.createElement((null as any),'div',(null as any));
    this.renderer.setElementAttribute(this._el_0,'class','col-md-3');
    this._text_1 = this.renderer.createText(this._el_0,'\n          ',(null as any));
    this._el_2 = this.renderer.createElement(this._el_0,'img',(null as any));
    this.renderer.setElementAttribute(this._el_2,'class','rounded mx-auto d-block');
    this._text_3 = this.renderer.createText(this._el_0,'\n        ',(null as any));
    this._expr_0 = import7.UNINITIALIZED;
    this._expr_1 = import7.UNINITIALIZED;
    this.init([].concat([this._el_0]),[
      this._el_0,
      this._text_1,
      this._el_2,
      this._text_3
    ]
    ,[],[]);
    return (null as any);
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this.detectContentChildrenChanges(throwOnChange);
    const currVal_0:any = this.parent.context.$implicit.author.avatar;
    if (import4.checkBinding(throwOnChange,this._expr_0,currVal_0)) {
      this.renderer.setElementProperty(this._el_2,'src',this.viewUtils.sanitizer.sanitize(import22.SecurityContext.URL,currVal_0));
      this._expr_0 = currVal_0;
    }
    const currVal_1:any = this.parent.context.$implicit.author.name;
    if (import4.checkBinding(throwOnChange,this._expr_1,currVal_1)) {
      this.renderer.setElementProperty(this._el_2,'alt',currVal_1);
      this._expr_1 = currVal_1;
    }
    this.detectViewChildrenChanges(throwOnChange);
  }
}
function viewFactory_UserNotifications2(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<any> {
  return new _View_UserNotifications2(viewUtils,parentInjector,declarationEl);
}
class _View_UserNotifications3 extends import1.AppView<any> {
  _el_0:any;
  _text_1:any;
  _el_2:any;
  _text_3:any;
  _text_4:any;
  /*private*/ _expr_1:any;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_UserNotifications3,renderType_UserNotifications,import6.ViewType.EMBEDDED,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    this._el_0 = this.renderer.createElement((null as any),'div',(null as any));
    this.renderer.setElementAttribute(this._el_0,'class','mt-3');
    this._text_1 = this.renderer.createText(this._el_0,'\n        ',(null as any));
    this._el_2 = this.renderer.createElement(this._el_0,'button',(null as any));
    this.renderer.setElementAttribute(this._el_2,'class','btn btn-success');
    this.renderer.setElementAttribute(this._el_2,'type','submit');
    this._text_3 = this.renderer.createText(this._el_2,'',(null as any));
    this._text_4 = this.renderer.createText(this._el_0,'\n      ',(null as any));
    var disposable_0:Function = this.renderer.listen(this._el_2,'click',this.eventHandler(this._handle_click_2_0.bind(this)));
    this._expr_1 = import7.UNINITIALIZED;
    this.init([].concat([this._el_0]),[
      this._el_0,
      this._text_1,
      this._el_2,
      this._text_3,
      this._text_4
    ]
    ,[disposable_0],[]);
    return (null as any);
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this.detectContentChildrenChanges(throwOnChange);
    const currVal_1:any = import4.interpolate(1,'',((this.parent.parent.context.lS.userLocalization == (null as any))? (null as any): this.parent.parent.context.lS.userLocalization.actions.accept),'');
    if (import4.checkBinding(throwOnChange,this._expr_1,currVal_1)) {
      this.renderer.setText(this._text_3,currVal_1);
      this._expr_1 = currVal_1;
    }
    this.detectViewChildrenChanges(throwOnChange);
  }
  private _handle_click_2_0($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>this.parent.parent.context.acceptRequest(this.parent.context.$implicit.id)) !== false);
    return (true && pd_0);
  }
}
function viewFactory_UserNotifications3(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<any> {
  return new _View_UserNotifications3(viewUtils,parentInjector,declarationEl);
}
class _View_UserNotifications4 extends import1.AppView<any> {
  _el_0:any;
  _text_1:any;
  _el_2:any;
  _text_3:any;
  _text_4:any;
  /*private*/ _expr_1:any;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_UserNotifications4,renderType_UserNotifications,import6.ViewType.EMBEDDED,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    this._el_0 = this.renderer.createElement((null as any),'div',(null as any));
    this.renderer.setElementAttribute(this._el_0,'class','mt-3');
    this._text_1 = this.renderer.createText(this._el_0,'\n        ',(null as any));
    this._el_2 = this.renderer.createElement(this._el_0,'button',(null as any));
    this.renderer.setElementAttribute(this._el_2,'class','btn btn-success');
    this.renderer.setElementAttribute(this._el_2,'type','submit');
    this._text_3 = this.renderer.createText(this._el_2,'',(null as any));
    this._text_4 = this.renderer.createText(this._el_0,'\n      ',(null as any));
    var disposable_0:Function = this.renderer.listen(this._el_2,'click',this.eventHandler(this._handle_click_2_0.bind(this)));
    this._expr_1 = import7.UNINITIALIZED;
    this.init([].concat([this._el_0]),[
      this._el_0,
      this._text_1,
      this._el_2,
      this._text_3,
      this._text_4
    ]
    ,[disposable_0],[]);
    return (null as any);
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this.detectContentChildrenChanges(throwOnChange);
    const currVal_1:any = import4.interpolate(1,'',((this.parent.parent.context.lS.userLocalization == (null as any))? (null as any): this.parent.parent.context.lS.userLocalization.actions.accept),'');
    if (import4.checkBinding(throwOnChange,this._expr_1,currVal_1)) {
      this.renderer.setText(this._text_3,currVal_1);
      this._expr_1 = currVal_1;
    }
    this.detectViewChildrenChanges(throwOnChange);
  }
  private _handle_click_2_0($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>this.parent.parent.context.acceptRequest(this.parent.context.$implicit.id)) !== false);
    return (true && pd_0);
  }
}
function viewFactory_UserNotifications4(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<any> {
  return new _View_UserNotifications4(viewUtils,parentInjector,declarationEl);
}