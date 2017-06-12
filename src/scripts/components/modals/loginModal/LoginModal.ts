import { Component, OnInit } from '@angular/core';
import { Http, RequestMethod, ResponseContentType, RequestOptionsArgs, Headers } from '@angular/http';
import { ModalService } from '../../../services/ModalService';
import { AuthService } from '../../../services/AuthService';
import { config } from '../../../config';

@Component({
  selector: 'login-modal',
  templateUrl: 'template.html'
})
export class LoginModal implements OnInit {
  public email: string;
  public password: string;
  public restUrl: string;

  constructor(private _http: Http,
              private _modalService: ModalService,
              private _authService: AuthService) {}

  public hideRegistrationModal(): void {
    this._modalService.activeModal = null;
  }

  public ngOnInit(): void {
    this.restUrl = config.restUrl;
  }

  public onSubmit(): void {
    this._http.get(`${config.restUrl}/api/login`, <RequestOptionsArgs> {
      method: RequestMethod.Post,
      headers: new Headers({'Content-Type': 'application/json'}),
      responseType: ResponseContentType.Json,
      body: { email: this.email, password: this.password  }
    }).subscribe((response: any): void => {
      this._authService.isAuth = true;
      this.hideRegistrationModal();
    });
  }
}
