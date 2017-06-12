import { Injectable } from '@angular/core';
import {
  Http, RequestOptionsArgs, RequestMethod, ResponseContentType, Response, Headers,
  RequestOptions
} from '@angular/http';
import { Team } from '../interface/Team';
import { UserInformationService } from './UserInformationService';
import { LocalizationService } from './LocalizationService';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { config } from '../config';
import { Observable } from 'rxjs';

@Injectable()
export class TeamService {

  constructor(private _http: Http,
              public toastr: ToastsManager,
              public userInformationService: UserInformationService,
              public lS: LocalizationService) {
  }

  public getTeamById(teamId: number): Observable<Response> {
    return this._http.get(`${config.restUrl}/api/team/${teamId}`, <RequestOptionsArgs> {
      method: RequestMethod.Get,
      withCredentials: true,
      headers: new Headers({'Content-Type': 'application/json'}),
      responseType: ResponseContentType.Json
    });
  }

  public createTeam(team: Team): void {
    this._http.get(`${config.restUrl}/api/team/add`, <RequestOptionsArgs> {
      method: RequestMethod.Post,
      headers: new Headers({'Content-Type': 'application/json'}),
      responseType: ResponseContentType.Json,
      withCredentials: true,
      body: team
    }).subscribe((response: Response): void => {
      const { error, team }: { error: string, team: Team} = response.json();
      this.userInformationService.userInformation.team = {team_id: team.id, created_at: team.created_at};
      this.toastr.success(this.lS.userLocalization.notification.success);
      if (error) {
        this.toastr.error(error);
        return
      }
    });
  }

  public removeUser(teamUserId: number):Promise<any> {
    let body = JSON.stringify({teamUserId});
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({
      method: RequestMethod.Post,
      withCredentials: true,
      headers: headers,
      responseType: ResponseContentType.Json
    });

    return this._http.post(`${config.restUrl}/api/team/remove-user`, body, options).toPromise()
      .then(res => res.json())
      .catch(error => console.log(error));
  }

  public addUserToTeam(invite: string[]): void {
    this._http.get(`${config.restUrl}/api/team/invite`, <RequestOptionsArgs> {
      method: RequestMethod.Post,
      headers: new Headers({'Content-Type': 'application/json'}),
      responseType: ResponseContentType.Json,
      withCredentials: true,
      body: invite
    }).subscribe((response: Response): void => {
      const { error, success }: { error: string, success: string} = response.json();
      if(success) {
        this.toastr.success(this.lS.userLocalization.notification.success);
      } else if(error) {
        this.toastr.error(error);
      }
    });
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

    return this._http.post(`${config.restUrl}/api/team/confirm`, body, options).toPromise()
      .then(res => res.json())
      .catch(error => console.log(error));
  }

}
