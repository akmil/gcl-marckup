import { Component } from '@angular/core';
import { config } from '../../../config';
import { Router } from '@angular/router';
import { Http, RequestMethod, ResponseContentType, RequestOptionsArgs, URLSearchParams, Headers } from '@angular/http';
import { LocalizationService } from '../../../services/LocalizationService';
import { UserInformationService } from '../../../services/UserInformationService';

@Component({
  selector: 'confirm-data-change',
  template: '<div></div>'
})
export class ConfirmDataChange {

  constructor(private _http: Http,
              public lS: LocalizationService,
              public userInformation: UserInformationService,
              public route: Router) {

    this._http.get(`${config.restUrl}/api/user/data-change`, <RequestOptionsArgs> {
      method: RequestMethod.Get,
      withCredentials: true,
      headers: new Headers({'Content-Type': 'application/json'}),
      responseType: ResponseContentType.Json,
      search: new URLSearchParams(`key=${this.route.parseUrl(route.url).queryParams["key"]}`)
    }).subscribe((res: any): void => {
      /* TODO: notify if error */
      if(res.status == 200) {
        route.navigateByUrl('/');
      }
    });
  }

}
