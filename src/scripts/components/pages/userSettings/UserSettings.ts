import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Response } from '@angular/http';

import { config } from '../../../config';
import { LocalizationService } from '../../../services/LocalizationService';
import { UserInformationService } from '../../../services/UserInformationService';
import { FileUploadService } from '../../../services/FileUploadService';

@Component({
  selector: 'user-settings',
  templateUrl: 'template.html'
})
export class UserSettings {

  constructor(public lS: LocalizationService,
              public userInformation: UserInformationService,
              public fileUpload: FileUploadService) {
  }

  public saveSettings(form: NgForm): void {
    if(form.valid) {
      let data = form.value;

      this.userInformation.saveUserInformation(data).then(res => {
        console.log(res);
        /*TODO: notification component*/
      });
    } else {
      console.log('Form not valid');
    }
  }

  public updateStats(): void {
    if(this.userInformation.isManualUpdate) {
      this.userInformation.updateGameStats().then(res => {
        /*TODO: notification component*/
      });
    }
  }

  public uploadAvatar(event: any) {
    let avatar = event.srcElement.files[0];
    let restUrl = `${config.restUrl}/api/user/upload-avatar`;

    this.fileUpload.upload(restUrl, avatar).then((res: Response) => {
      console.log(res);
    })
  }

}
