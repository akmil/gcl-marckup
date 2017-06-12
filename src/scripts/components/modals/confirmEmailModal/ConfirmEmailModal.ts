import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Http, RequestMethod, ResponseContentType, RequestOptionsArgs, Headers } from '@angular/http';
import { ModalService } from '../../../services/ModalService';
import { config } from '../../../config';
import { LocalizationService } from '../../../services/LocalizationService';
import { UserInformationService } from '../../../services/UserInformationService';

@Component({
  selector: 'confirm-email-modal',
  templateUrl: 'template.html'
})
export class ConfirmEmailModal {

  constructor(private _http: Http,
              private _modalService: ModalService,
              public lS: LocalizationService,
              public userInformation: UserInformationService) {
  }

  public hideConfirmEmailModal(): void {
    this._modalService.activeModal = null;
  }

  public onSubmit(): void {
    this._http.get(`${config.restUrl}/api/user`, <RequestOptionsArgs> {
      method: RequestMethod.Get,
      withCredentials: true,
      headers: new Headers({'Content-Type': 'application/json'}),
      responseType: ResponseContentType.Json
    }).subscribe((response: any): void => {
      console.log('login', response);
    });
  }

  public setEmail(form: NgForm): void {
    if(form.valid) {
      this.userInformation.setEmail(form.value).then(email => {
        this.userInformation.userInformation.email = email;
      });
    } else {
      console.log('Form not valid');
    }
  }

}
