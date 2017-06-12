import { Injectable } from '@angular/core';
import { Http, RequestOptionsArgs, RequestMethod, ResponseContentType, Response, Headers } from '@angular/http';
import { config } from "../config";
import { Notification } from "../interface/Notification";

import * as _ from 'lodash';

@Injectable()
export class UserNotificationsService {
  private _notifications: Array<Notification> = [];

  constructor(private _http: Http) {
  }

  public get notifications(): Array<Notification> {
    return this._notifications;
  }

  public set notifications(notifications: Array<Notification>) {
    this._notifications = notifications;
  }

  public findNotification(id: any): Notification {
    return _.find(this._notifications, {id});
  }

  public updateNotifications(): void {
    this._http.get(config.restUrl + '/api/user/notifications', <RequestOptionsArgs> {
      method: RequestMethod.Get,
      withCredentials: true,
      headers: new Headers({'Content-Type': 'application/json'}),
      responseType: ResponseContentType.Json
    }).subscribe((response: Response): void => {
      const notifications: Array<Notification> = response.json();
      if (notifications) {
        this.notifications = notifications;
      }
    });
  }
}
