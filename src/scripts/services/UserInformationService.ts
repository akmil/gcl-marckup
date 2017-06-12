import * as RX from 'rxjs';
import { Injectable } from '@angular/core';
import {
  Http, RequestOptionsArgs, RequestMethod, ResponseContentType, Headers, RequestOptions,
  Response
} from '@angular/http';
import { User } from '../interface/User';
import { ModalService } from './ModalService';
import { Modals } from '../enums/Modals';
import { config } from '../config';

import * as moment from 'moment';

@Injectable()
export class UserInformationService {
  private _userInformation: User;
  public dropDown: boolean = false;

  constructor(private _http: Http, private _modalService: ModalService) {
    this._userInformationRequest();
  }

  public set userInformation(userInformation: User) {
    this._userInformation = userInformation;
  }

  public get userInformation() {
    return this._userInformation;
  }

  public showUserProfileAvatar(): string {
    return this.userInformation && this.userInformation.avatar ?
      this.userInformation.avatar :
      'http://placehold.it/120x120';
  }

  public get isManualUpdate(): boolean {
    let result = false;

    if(this._userInformation) {
      let timePoint = moment(this._userInformation.manual_stats_update);
      let timeDiff = moment().diff(timePoint, 'seconds');
      if(timeDiff >= 0)
        result = true;
    }

    return result;
  }

  public setEmail(values: string[]): Promise<any> {
    let body = JSON.stringify(values);
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({
      method: RequestMethod.Post,
      headers: headers,
      withCredentials: true,
      responseType: ResponseContentType.Json
    });

    return this._http.post(`${config.restUrl}/api/user/set-email`, body, options).toPromise()
      .then(res => res.text())
      .catch(error => console.log(error));
  }

  public saveUserInformation(values: string[]): Promise<any> {
    let body = JSON.stringify(values);
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({
      method: RequestMethod.Post,
      withCredentials: true,
      headers: headers,
      responseType: ResponseContentType.Json
    });

    return this._http.post(`${config.restUrl}/api/user`, body, options).toPromise()
      .then(res => JSON.parse(res.text()))
      .catch(error => console.log(error));
  }

  public updateGameStats(): Promise<any> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({
      method: RequestMethod.Post,
      withCredentials: true,
      headers: headers,
      responseType: ResponseContentType.Json
    });

    return this._http.get(`${config.restUrl}/api/user/update-stats`, options).toPromise()
      .then(res => {
        let data = res.json();
        console.log(data);
        this._userInformation = data.user;
      })
      .catch(error => console.log(error));
  }

  public getUserInformationByUserId(userId: number): RX.Observable<Response> {
    return this._http.get(`${config.restUrl}/api/user/${userId}`, <RequestOptionsArgs> {
      method: RequestMethod.Get,
      withCredentials: true,
      headers: new Headers({'Content-Type': 'application/json'}),
      responseType: ResponseContentType.Json
    })
  }

  private _userInformationRequest(): void {
    this._http.get(`${config.restUrl}/api/user`, <RequestOptionsArgs> {
      method: RequestMethod.Get,
      withCredentials: true,
      headers: new Headers({'Content-Type': 'application/json'}),
      responseType: ResponseContentType.Json
    }).subscribe((response: any): void => {
      console.log('user', response);
      this._userInformation = response._body.user;
      if (this._userInformation && !this._userInformation.confirmed) {
        this._modalService.activeModal = Modals.CONFIRM_EMAIL;
      }
    });
  }
}
