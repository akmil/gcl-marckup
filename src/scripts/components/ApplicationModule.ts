import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { ToastModule, ToastsManager } from 'ng2-toastr/ng2-toastr';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

/* Components imports */
import { Application } from './Application';
import { Matches } from './pages/matches/Matches';

/* Services imports */
import { ModeService } from '../services/ModeService';
import { SettingsService } from '../services/SettingsService';
import { ModalService } from '../services/ModalService';
import { ModalAdapterModule } from './modals/ModalAdapterModule';
import { PagesModule } from './pages/PagesModule';
import { AuthService } from '../services/AuthService';
import { UserInformationService } from '../services/UserInformationService';
import { LocalizationService } from '../services/LocalizationService';
import { LocalStorageService } from '../services/LocalStorageService';
import { NavigatorService } from '../services/NavigatorService';
import { SocketService } from '../services/SocketService';
import { UserFriendsService } from '../services/UserFriendsService';
import { UserNotificationsService } from "../services/UserNotificationsService";
import { TeamService } from '../services/TeamService';
import { FileUploadService } from "../services/FileUploadService";

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    ModalAdapterModule,
    PagesModule,
    ToastModule,
    RouterModule,
    NgbModule.forRoot()
  ],
  declarations: [
    Application, Matches
  ],
  providers: [
    ModeService, SettingsService, ModalService, AuthService, LocalizationService,
    TeamService,
    UserFriendsService, UserNotificationsService, UserInformationService,
    LocalStorageService, NavigatorService, SocketService, FileUploadService, ToastsManager
  ],
  bootstrap: [Application]
})
export class ApplicationModule {
  constructor(private _userInformationService: UserInformationService) {}
}
