import {Component} from '@angular/core';
import { NgForm } from '@angular/forms';
import { NewsService } from '../../../../services/NewsService';
import { LocalizationService } from '../../../../services/LocalizationService';
import { AuthService } from '../../../../services/AuthService';
import { UserInformationService } from '../../../../services/UserInformationService';
import {ModalService} from "../../../../services/ModalService";
import {Modals} from "../../../../enums/Modals";

@Component({
  selector: 'add-news',
  templateUrl: 'template.html'
})
export class AddNews {
  public tags = [];

  constructor(
    public newsService: NewsService,
    public lS: LocalizationService,
    public authService: AuthService,
    public userInformationService: UserInformationService,
    public modalService: ModalService
  ) {
    this.newsService.updateNews();
  }

  public showAddNewsModal(): void {
    this.modalService.activeModal = Modals.ADD_NEWS_MODAL;
  }

  public addNews(form: NgForm): void {
    form.value.tags = this.tags;
    this.newsService.addNewsToServer(form.value, (): void => {form.reset(); this.tags = [];});
  }
}
