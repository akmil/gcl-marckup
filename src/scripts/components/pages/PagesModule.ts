import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

/* Components imports */
import { router } from '../../router/index';
import { Pages } from './Pages';
import { ConfirmEmail } from './confirmEmail/ConfirmEmail';
import { UserSettings } from './userSettings/UserSettings';
import { UserNotifications } from './userNotifications/UserNotifications';
import { ConfirmDataChange } from './confirmDataChange/ConfirmDataChange';
import { SingleNews } from './singleNews/SingleNews';
import { News } from './news/News';
import { NewsVideoPopup } from './news/newsVideoPopup/NewsVideoPopup';
import { UserPage } from './user/UserPage';
import { AddNews } from './news/addNews/AddNews';
import { ShowNews } from './news/showNews/ShowNews';
import { Search } from './search/Search';

/* Services */
import { NewsService } from '../../services/NewsService';
import { TeamService } from '../../services/TeamService';

/* Editor */
import { HtmlEditor } from '../../editors/htmlEditor/HtmlEditor';
import { RlTagInputModule } from '../../editors/tagInput/index';

/* Pipe imports */
import { NewsVideoChanger } from '../../pipes/NewsVideoChanger';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    RlTagInputModule,
    RouterModule.forRoot(router),
    NgbModule.forRoot()
  ],
  providers: [
    NewsService,
    TeamService
  ],
  declarations: [
    Pages, ConfirmEmail, UserSettings, ConfirmDataChange, News, SingleNews, HtmlEditor,
    UserPage, NewsVideoChanger, NewsVideoPopup, UserNotifications, ShowNews, AddNews, Search
  ],
  exports: [
    Pages
  ]
})
export class PagesModule { }
