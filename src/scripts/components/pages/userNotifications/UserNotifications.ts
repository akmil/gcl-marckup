import { Component, OnInit } from '@angular/core';
import { ToastsManager } from 'ng2-toastr';

import { LocalizationService } from '../../../services/LocalizationService';
import { UserInformationService } from '../../../services/UserInformationService';
import { UserNotificationsService } from "../../../services/UserNotificationsService";
import { UserFriendsService } from '../../../services/UserFriendsService';
import { TeamService } from '../../../services/TeamService';


@Component({
  selector: 'user-notifications',
  templateUrl: 'template.html'
})
export class UserNotifications implements OnInit {

  constructor(public lS: LocalizationService,
              public userInformation: UserInformationService,
              public userNotificationsService: UserNotificationsService,
              public userFriendService: UserFriendsService,
              public teamService: TeamService,
              public toastr: ToastsManager) {
  }

  ngOnInit(): void {
    this.userNotificationsService.updateNotifications();
  }

  public acceptRequest(notificationId: number) {
    let notification = this.userNotificationsService.findNotification(notificationId);
    if(notification.friendInvite) {
      this.userFriendService.acceptRequest(notification.friendInvite.id).then((res) => {
        if (res.success) {
          this.toastr.success(this.lS.userLocalization.notification.success);
          notification.friendInvite.confirmed = true;
        } else {
          this.toastr.error(res.error);
        }
      });
    } else if(notification.teamInvite) {
      this.teamService.acceptRequest(notification.teamInvite.id).then((res) => {
        if (res.success) {
          this.toastr.success(this.lS.userLocalization.notification.success);
          notification.teamInvite.confirmed = true;
        } else {
          this.toastr.error(res.error);
        }
      });
    }
  }

}
