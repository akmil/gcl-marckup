import {ActivatedRoute, Params} from "@angular/router";
import { Component } from '@angular/core';
import {Location} from '@angular/common';
import {Response} from "@angular/http";
import {ToastsManager} from "ng2-toastr";
import {News} from "../../../interface/News";
import {NewsService} from "../../../services/NewsService";

@Component({
  selector: 'search',
  templateUrl: 'template.html'
})
export class Search {
  public filteredNews: Array<News> = [];
  public tags: Array<string> = [];

  constructor(public route: ActivatedRoute,
              public newsService: NewsService,
              public toastr: ToastsManager,
              private location: Location) {
    this._setQueryParamsFilter();
  }

  public filterNews(tags: Array<string>): void {
    this.newsService.filterNews(tags).subscribe((response: Response): void => {
      const { error, news }: { error: string, news: Array<News>} = response.json();
       if (error) {
         this.toastr.error(error);
        return;
      }
      if (news) {
        this.filteredNews = news;
      }
    });
  }

  private _setQueryParamsFilter(): void {
    this.route.params.subscribe((params: Params): void => {
        let { tags } = params;
        if (tags) {
          tags = tags.split(',');
          this.tags = tags;
          this.filterNews(tags);
        }
      }
    );
  }

}
