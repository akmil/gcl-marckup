import { Component } from '@angular/core';
import { ActivatedRoute, Params, Router, NavigationEnd } from '@angular/router';
import { ModalService } from '../services/ModalService';
import { Modals } from '../enums/Modals';
import { AuthService } from '../services/AuthService';
import { LocalizationService } from '../services/LocalizationService';
import { LocalStorageService } from '../services/LocalStorageService';
import { Localization } from '../enums/Localization';
import { UserInformationService } from '../services/UserInformationService';
import { NavigatorService } from '../services/NavigatorService';

export enum MatchesWidgets {
  FUTURE,
  CURRENT
}

@Component({
  selector: 'application',
  templateUrl: './template-about-player.html'
})
export class Application {
  public Localization: any = Localization;
  public activeMatchesWidget: MatchesWidgets = MatchesWidgets.FUTURE;

  constructor(private _modalService: ModalService,
              public authService: AuthService,
              public userInformationService: UserInformationService,
              public lS: LocalizationService,
              public localStorageService: LocalStorageService,
              public navigatorService: NavigatorService,
              public activeRouter: ActivatedRoute,
              private router: Router
  ) {
    this.router.events.subscribe((val) => {
      if(val instanceof NavigationEnd) {
        this.userInformationService.dropDown = false;
      }
    });
    this.activeRouter.queryParams.subscribe((params: Params): void => {
      const { ref } = params;
      if (ref) {
        localStorageService.setLocalStorageByKey('ref', ref);
      }
    });
  }

  public handleSetActiveFutureWidgetHandle(): void {
    if (this.activeMatchesWidget !== MatchesWidgets.FUTURE) {
      this.activeMatchesWidget = MatchesWidgets.FUTURE;
    }
  }

  public isActiveFutureWidget(): boolean {
    return this.activeMatchesWidget === MatchesWidgets.FUTURE;
  }

  public isActiveCurrentWidget(): boolean {
    return this.activeMatchesWidget === MatchesWidgets.CURRENT;
  }

  public handleSetActiveCurrentWidgetHandle(): void {
    if (this.activeMatchesWidget !== MatchesWidgets.CURRENT) {
      this.activeMatchesWidget = MatchesWidgets.CURRENT;
    }
  }

  public showRegistrationModal(): void {
    if (this.authService.isAuth) {
      this.authService.logout();
      this.lS.userLocalizationRequest();
      return;
    }
    this._modalService.activeModal = Modals.REGISTRATION;
  }

  public navigateToSettings(): void {
    this.navigatorService.navigateTo('/user/settings');
  }

  public navigateToHome(): void {
    this.navigatorService.navigateTo('/');
  }

  public navigateToProfile(): void {
    this.navigatorService.navigateTo('/user/' + this.userInformationService.userInformation.id);
  }

  public navigateToNotifications(): void {
    this.navigatorService.navigateTo('/user/notifications');
  }

  public logOut(): void {
    if (this.authService.isAuth)
      this.authService.logout();
  }

  public showLoginModal(): void {
    this._modalService.activeModal = Modals.LOGIN;
  }

  public toggleDropDown():void {
    this.userInformationService.dropDown = !this.userInformationService.dropDown;
  }

  public setLanguage(languageKey: Localization): void {
    this.localStorageService.setLocalStorageByKey('localization', languageKey);
    this.lS.userLocalizationRequest(languageKey);
  }
}
