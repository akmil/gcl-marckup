import { Component, OnInit } from '@angular/core';
import { Http, RequestMethod, ResponseContentType, RequestOptionsArgs, Headers } from '@angular/http';
import { ModalService } from '../../../services/ModalService';
import { Modals } from '../../../enums/Modals';
import { AuthService } from '../../../services/AuthService';
import { config } from '../../../config';
import { UserInformationService } from '../../../services/UserInformationService';
import { LocalStorageService } from '../../../services/LocalStorageService';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Component({
  selector: 'registration-modal',
  templateUrl: 'template.html'
})
export class RegistrationModal implements OnInit {
  public name: string;
  public nickname: string;
  public email: string;
  public password: string;
  public restUrl: string;

  constructor(private _http: Http,
              private _modalService: ModalService,
              private _userInformation: UserInformationService,
              private _authService: AuthService,
              private _localStorageService: LocalStorageService,
              public toastr: ToastsManager) {}

  public hideRegistrationModal(): void {
    this._modalService.activeModal = null;
  }

  public ngOnInit(): void {
    this.restUrl = config.restUrl;
  }

  public onSubmit(): void {
    const { ref }: { ref: string } = this._localStorageService.localStorage;
    this._http.get(`${config.restUrl}/api/user/registration`, <RequestOptionsArgs> {
      method: RequestMethod.Post,
      headers: new Headers({'Content-Type': 'application/json'}),
      responseType: ResponseContentType.Json,
      body: {
        name: this.name,
        nickname: this.nickname,
        email: this.email,
        password: this.password,
        ref
      }
    }).subscribe((response: any): void => {
      const {error, user} = response.json();
      if (error) {
        this.toastr.error(error);
        return;
      }
      console.log(response);
      this._authService.isAuth = true;
      this.hideRegistrationModal();
      this._userInformation.userInformation = user;
      if (this._userInformation.userInformation && !this._userInformation.userInformation.confirmed) {
        this._modalService.activeModal = Modals.CONFIRM_EMAIL;
      }
    });
  }
}
