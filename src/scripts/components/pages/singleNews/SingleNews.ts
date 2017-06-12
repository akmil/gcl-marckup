import { Component } from '@angular/core';
import { Response } from '@angular/http';
import { ActivatedRoute, Params } from '@angular/router';
import { NewsService } from '../../../services/NewsService';
import { LocalizationService } from '../../../services/LocalizationService';
import { DomSanitizer, SafeHtml } from "@angular/platform-browser";
import { AuthService } from '../../../services/AuthService';
import * as _ from "lodash";

@Component({
  selector: 'single-news',
  templateUrl: 'template.html'
})
export class SingleNews {
  public title: string;
  public content: string;
  public contentHTML: SafeHtml;

  private newsId: number;

  constructor(
    public route: ActivatedRoute,
    public newsService: NewsService,
    public authService: AuthService,
    public lS: LocalizationService,
    private sanitizer: DomSanitizer
  ) {
    this.newsService.newsComments = [];
    this.route.params.subscribe((params: Params): void => {
      const { id } = params;
      if (id >= 0) {
        this.newsId = Number(_.clone(id));
        this._getSingleNews(id);
        this.newsService.updateNewsComments(this.newsId);
      }
    });
  }

  private _getSingleNews(id: number): void {
    this.newsService.getNewsById(id).subscribe((response: any): void => {
      if (response._body && response._body.news) {
        this.title = response._body.news.title;
        this.content = response._body.news.content;
        this.contentHTML = this.sanitizer.bypassSecurityTrustHtml(this.content);
      }
    });
  }

  public addComment(form: any): void {
    if (!_.isNumber(this.newsId) || _.isNaN(this.newsId) || this.newsId < 0 || !form.value.comment) {
      // TODO: notification
      return;
    }
    this.newsService.addCommentToSingleNewsBy(this.newsId, form.value.comment).subscribe((response: Response): void => {
      if (response.ok) {
        form.reset();
      }
    });
  }

}
