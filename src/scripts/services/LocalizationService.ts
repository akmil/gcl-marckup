import * as _ from 'lodash';
import { Injectable } from '@angular/core';
import { Http, RequestOptionsArgs, RequestMethod, ResponseContentType, Headers } from '@angular/http';
import { LocalStorageService } from './LocalStorageService';
import { Localization } from '../enums/Localization';
import {config} from "../config";

@Injectable()
export class LocalizationService {
  public localizationPreference: Localization = Localization.English;
  private _userLocalization: any;
  private _loadedLocalizations: any = {};

  constructor(private _http: Http, private _localStorageService: LocalStorageService) {
    this.userLocalizationRequest();
  }

  public set userLocalization(userLocalization: any) {
    this._userLocalization = userLocalization;
  }

  public translateByKey(key: string | Array<string>): any {
    return _.get(this.userLocalization, key);
  }

  public get userLocalization(): any {
    return this._userLocalization;
  }

  public userLocalizationRequest(localization?: Localization): void {
    localization = localization || this._localStorageService.localStorage.localization || Localization.English;
    this.localizationPreference = localization;
    this._http.get(`${config.restUrl}/api/localization/${localization}`, <RequestOptionsArgs> {
      method: RequestMethod.Get,
      withCredentials: true,
      headers: new Headers({'Content-Type': 'application/json'}),
      responseType: ResponseContentType.Json
    }).subscribe((response: any): void => {
      this.userLocalization = response._body.localization;
    });
  }
}
