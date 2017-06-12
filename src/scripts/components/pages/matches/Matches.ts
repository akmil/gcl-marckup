import { Component, Input, OnChanges } from '@angular/core';
import { Http, Response, RequestOptionsArgs, RequestMethod, Headers, ResponseContentType } from '@angular/http';
import { MatchesData } from '../../../interface/MatchesData';
import { config } from '../../../config';
import {getTime, getTimeFromTimestamp} from '../../../utils/Utils';

@Component({
  selector: 'matches',
  templateUrl: 'template.html'
})
export class Matches implements OnChanges {
  @Input()
  public matchesCount: number;
  @Input()
  public isFuture: boolean;

  private _matches: Array<MatchesData> = [];

  constructor(private _http: Http) {
  }

  public get matches(): Array<MatchesData> {
    return this._matches;
  }

  public set matches(matches: Array<MatchesData>) {
    this._matches = matches;
  }

  ngOnChanges(): void {
    this.getMatches();
  }

  public getTime(time: number): string {
    return getTimeFromTimestamp(time * 1000);
  }

  public getMatches(): void {
    this._http.get(`${config.restUrl}/api/matches/${this.isFuture ? 'future' : 'current'}`, <RequestOptionsArgs> {
      method: RequestMethod.Get,
      headers: new Headers({'Content-Type': 'application/json'}),
      responseType: ResponseContentType.Json,
      withCredentials: true,
      body: { takes: this.matchesCount }
    }).subscribe((response: Response): void => {
      if (!response.ok) {
        // TODO: notification
        return;
      }
      this.matches = response.json();
    });
  }
}
