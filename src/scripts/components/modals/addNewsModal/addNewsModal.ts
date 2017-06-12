import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Http, RequestMethod, ResponseContentType, RequestOptionsArgs, Headers } from '@angular/http';
import { ModalService } from '../../../services/ModalService';
import { LocalizationService } from '../../../services/LocalizationService';
import { UserInformationService } from '../../../services/UserInformationService';

@Component({
  selector: 'add-news-modal',
  templateUrl: 'template.html'
})
export class AddNewsModal {

  constructor(private _http: Http,
              private _modalService: ModalService,
              public lS: LocalizationService,
              public userInformation: UserInformationService) {
  }

  public hideConfirmEmailModal(): void {
    this._modalService.activeModal = null;
  }
}
