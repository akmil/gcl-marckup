import { Routes } from '@angular/router';
import { ConfirmEmail } from '../components/pages/confirmEmail/ConfirmEmail';
import { UserSettings } from '../components/pages/userSettings/UserSettings';
import { ConfirmDataChange } from '../components/pages/confirmDataChange/ConfirmDataChange';
import { News } from '../components/pages/news/News';
import { SingleNews } from '../components/pages/singleNews/SingleNews';
import { UserPage } from '../components/pages/user/UserPage';
import { UserNotifications } from '../components/pages/userNotifications/UserNotifications';
import {Search} from "../components/pages/search/Search";

export const router: Routes = [
  {
    path: '',
    component: News,
    pathMatch: 'full'
  },
  {
    path: ':id',
    outlet: 'search',
    component: Search
  },
  {
    path: 'news/:id',
    component: SingleNews
  },
  {
    path: 'user/settings',
    component: UserSettings
  },
  {
    path: 'email-confirm',
    component: ConfirmEmail
  },
  {
    path: 'data-confirm',
    component: ConfirmDataChange
  },
  {
    path: 'user/notifications',
    component: UserNotifications
  },
  {
    path: 'user/:id',
    component: UserPage
  }
];
