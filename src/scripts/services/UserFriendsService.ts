import { Injectable } from '@angular/core';
import { config } from '../config';
import {
  Http, RequestMethod, ResponseContentType, Headers, RequestOptions, Response,
  RequestOptionsArgs
} from '@angular/http';
import * as RX from 'rxjs';

@Injectable()
export class UserFriendsService {

  constructor(private _http: Http) {
  }

  public getFriendsByUserId(userId: number): RX.Observable<Response> {
    return this._http.get(`${config.restUrl}/api/friends/user/${userId}`, <RequestOptionsArgs> {
      method: RequestMethod.Get,
      withCredentials: true,
      headers: new Headers({'Content-Type': 'application/json'}),
      responseType: ResponseContentType.Json
    })
  }

  public friendRequest(values: string[]): Promise<any> {
    let body = JSON.stringify(values);
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({
      method: RequestMethod.Post,
      headers: headers,
      withCredentials: true,
      responseType: ResponseContentType.Json
    });

    return this._http.post(`${config.restUrl}/api/friends/request`, body, options).toPromise()
      .then(res => res.json())
      .catch(error => console.log(error));
  }

  public acceptRequest(requestId: number): Promise<any> {
    let body = JSON.stringify({requestId});
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({
      method: RequestMethod.Post,
      withCredentials: true,
      headers: headers,
      responseType: ResponseContentType.Json
    });

    return this._http.post(`${config.restUrl}/api/friends/confirm`, body, options).toPromise()
      .then(res => res.json())
      .catch(error => console.log(error));
  }

  public removeFriend(friendId: number): Promise<any> {
    let body = JSON.stringify({friendId});
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({
      method: RequestMethod.Post,
      withCredentials: true,
      headers: headers,
      responseType: ResponseContentType.Json
    });

    return this._http.post(`${config.restUrl}/api/friends/remove`, body, options).toPromise()
      .then(res => res.json())
      .catch(error => console.log(error));
  }

}
