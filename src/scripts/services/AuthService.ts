import { Injectable } from '@angular/core';
import { Http, RequestOptionsArgs, RequestMethod, ResponseContentType, Headers } from '@angular/http';
import { config } from '../config';

@Injectable()
export class AuthService {
  private _isAuth: boolean;

  constructor(private _http: Http) {
    this._isAuthRequest();
  }

  public logout(): void {
    this._http.get(`${config.restUrl}/api/user/logout`, <RequestOptionsArgs> {
      method: RequestMethod.Get,
      withCredentials: true,
      headers: new Headers({'Content-Type': 'application/json'}),
      responseType: ResponseContentType.Json
    }).subscribe((response: any): void => {
      console.log('logout', response);
      this.isAuth = false;
    });
  }

  public set isAuth(isAuth: boolean) {
    this._isAuth = isAuth;
  }

  public get isAuth() {
    return this._isAuth;
  }

  private _isAuthRequest(): void {
    this._http.get(`${config.restUrl}/api/user/isAuth`, <RequestOptionsArgs> {
      method: RequestMethod.Get,
      withCredentials: true,
      headers: new Headers({'Content-Type': 'application/json'}),
      responseType: ResponseContentType.Json
    }).subscribe((response: any): void => {
      console.log('isAuth1', response);
      this.isAuth = response._body.isAuth;
    });
  }
}
