import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { UserInformationService } from '../../../services/UserInformationService';
import { NewsService } from '../../../services/NewsService';
import { UserFriendsService } from "../../../services/UserFriendsService";
import { ToastsManager } from 'ng2-toastr';
import { LocalizationService } from '../../../services/LocalizationService';
import { TeamService } from '../../../services/TeamService';
import { News } from '../../../interface/News';
import { Friend } from '../../../interface/Friend';
import { User } from '../../../interface/User';
import { Team } from '../../../interface/Team';
import {Observable, Subscriber, Subject} from "rxjs";

import * as _ from "lodash";
import * as moment from 'moment';

enum ProfileTabs {
  PROFILE,
  FRIENDS,
  TEAM,
  ACHIEVEMENTS,
  SPONSORS
}

@Component({
  selector: 'UserComponent',
  templateUrl: 'template.html'
})
export class UserPage implements OnInit {
  public ProfileTabs: any = ProfileTabs;
  public activeProfileTab: ProfileTabs = ProfileTabs.FRIENDS;
  public user: User;
  public userTeam: Team;
  public userNews: Array<News> = [];
  public userFriends: Array<Friend> = [];
  private _userSubject: Subject<User> = new Subject<User>();

  constructor(public lS: LocalizationService,
              public route: ActivatedRoute,
              public userInformationService: UserInformationService,
              public userFriendsService: UserFriendsService,
              public newsService: NewsService,
              public teamService: TeamService,
              public notify: ToastsManager) {
  }

  public ngOnInit(): void {
    this.route.params.subscribe((params: Params): void => {
      const { id } = params;
      if (id >= 0) {
        this.updateUserInfo(id);
      }
    });
    this._userSubject.subscribe((user: User) => {
      this.user = user;
      this.setActiveProfileTab(ProfileTabs.PROFILE)
    });
  }

  public getTime(time: string): any {
    return moment(time , moment.ISO_8601).fromNow();
  }

  public setActiveProfileTab(profileTab: ProfileTabs): void {
    switch(profileTab) {
      case ProfileTabs.FRIENDS:
        this.updateUserFriends();
        break;
      case ProfileTabs.PROFILE:
        this.updateUserNews();
        break;
      case ProfileTabs.TEAM:
        this.updateUserTeam();
        break;
    }
    this.activeProfileTab = profileTab;
  }

  private updateUserInfo(userId: number): void {
    this.userInformationService.getUserInformationByUserId(userId).subscribe((response: Response): void => {
      const { error, user } = response.json();
      // TODO: if error
      this._userSubject.next(user);
    });
  }

  private updateUserNews(): void {
    this.newsService.getNewsByUserId(this.user.id).subscribe((response: Response): void => {
      const { error, news } = response.json();
      // TODO: if error
      this.userNews = news;
    });
  }

  private updateUserTeam(): void {
    if(this.user.team)
      this.teamService.getTeamById(this.user.team.team_id).subscribe((response: Response): void => {
        const { error, team } = response.json();
        // TODO: if error
        this.userTeam = team;
      });
  }

  private updateUserFriends(): void {
    this.userFriendsService.getFriendsByUserId(this.user.id).subscribe((response: Response): void => {
      const { error, friends } = response.json();
      // TODO: if error
      this.userFriends = friends;
    });
  }

  public createTeam(form: NgForm): void {
    if(form.valid) {
      this.teamService.createTeam(form.value);
      form.reset();
    }
  }

  public sendTeamInvite(form: NgForm): void {
    if(form.valid) {
      let value = form.value;
      value.teamId = this.user.team.team_id;
      this.teamService.addUserToTeam(value);
      form.reset();
    }
  }

  public removeTeamMate(id: number): void {
    this.teamService.removeUser(id).then(res => {
      if(res.success) {
        _.remove(this.userTeam.users, {id});
        this.notify.success(res.success);
      } else {
        this.notify.error(res.error);
      }
    });
  }

  public addFriend(form: NgForm): void {
    if(form.valid) {
      this.userFriendsService.friendRequest(form.value).then(res => {
        if(res.success) {
          this.notify.success(res.success);
        } else {
          this.notify.error(res.error);
        }
      });
      form.reset();
    }
  }

  public removeFriend(id: number): void {
    this.userFriendsService.removeFriend(id).then(res => {
      if(res.success) {
        _.remove(this.userFriends, {friend: {id}});
        this.notify.success(res.success);
      } else {
        this.notify.error(res.error);
      }
    });
  }
}
