import { Component } from '@angular/core';
import { config } from '../../../config';
import { Router } from '@angular/router';
import { Http, RequestMethod, ResponseContentType, RequestOptionsArgs, URLSearchParams, Headers, Response } from '@angular/http';
import { LocalizationService } from '../../../services/LocalizationService';
import { UserInformationService } from '../../../services/UserInformationService';
import {ModalService} from "../../../services/ModalService";

@Component({
  selector: 'confirm-email',
  template: '<div></div>'
})
export class ConfirmEmail {

  constructor(private _http: Http,
              public lS: LocalizationService,
              private _modalService: ModalService,
              public userInformation: UserInformationService,
              public route: Router) {

    this._http.get(`${config.restUrl}/api/user/email-confirm`, <RequestOptionsArgs> {
      method: RequestMethod.Get,
      withCredentials: true,
      headers: new Headers({'Content-Type': 'application/json'}),
      responseType: ResponseContentType.Json,
      search: new URLSearchParams(`key=${this.route.parseUrl(route.url).queryParams["key"]}`)
    }).subscribe((res: Response): void => {
      const { confirmed } = res.json();
      if(res.status == 200 && confirmed) {
        /*TODO: notification if hash inactive */
        this.userInformation.userInformation.confirmed = confirmed;
        this._modalService.activeModal = null;
      }
      route.navigateByUrl('/');
    });
  }

}
