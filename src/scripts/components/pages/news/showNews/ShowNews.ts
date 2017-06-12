import * as _ from "lodash";
import {Component, ElementRef, Renderer, Input} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { NewsService } from '../../../../services/NewsService';
import { LocalizationService } from '../../../../services/LocalizationService';
import { AuthService } from '../../../../services/AuthService';
import { UserInformationService } from '../../../../services/UserInformationService';
import { News } from '../../../../interface/News';
import { getTime } from '../../../../utils/Utils';

export const SPLIT_VIDEO_CONTENT_BY: string = '$%$%$%$%$%$%$%$%$%$%$%$%$%$%$%!';

@Component({
  selector: 'show-news',
  templateUrl: 'template.html'
})
export class ShowNews {
  @Input()
  public news: Array<News>;

  public SPLIT_VIDEO_CONTENT_BY = SPLIT_VIDEO_CONTENT_BY;
  public showVideo: boolean = false;
  public activeVideoUrl: string = '';

  constructor(
    public newsService: NewsService,
    public lS: LocalizationService,
    public authService: AuthService,
    public userInformationService: UserInformationService,
    public sanitizer: DomSanitizer,
    public elementRef: ElementRef,
    public renderer: Renderer
  ) {
    this.newsService.updateNews();
  }

  public isContentHTML(content: string): boolean {
    return !(/img/g.test(content));
  }

  public isContentImg(content: string): boolean {
    return /img/g.test(content);
  }

  public getImageUrl(content: string): string {
    const domParser: DOMParser = new DOMParser();
    const domFromContent: Document = domParser.parseFromString(content, 'text/html');
    const img: HTMLImageElement = domFromContent.getElementsByTagName('img')[0];
    return img.src;
  }

  // TODO: create news interface
  public getNewsStyles(singleNews: News): any {
    if (!singleNews.bgImage) {
      return;
    }
    return {
      'background-image': `url(./static/assets/img/maxresdefault.jpg)`
    }
  }

  public handlePlayVideoClick(content: string): void {
    const domParser: DOMParser = new DOMParser();
    const domFromContent: Document = domParser.parseFromString(content, 'text/html');
    const img: HTMLImageElement = domFromContent.getElementsByTagName('img')[0];
    const videoUrl = img.getAttribute('data-video');
    console.log(videoUrl);
    this.showVideo = true;
    this.activeVideoUrl = videoUrl;
  }

  public newsVideoPopupClose(): void {
    this.showVideo = false;
    this.activeVideoUrl = '';
  }

  public getTagAsArray(tag: any): Array<string> {
    if (!tag) {
      return [];
    }
    return [tag.name || tag];
  }

  public whoShared(id: number): any {
    let singleNews = _.find(this.news, {id});
    if(singleNews && !singleNews.whoShared) {
      singleNews.whoShared = [];
      this.newsService.whoShared(id).subscribe((response: any): void => {
        const { error, shared } = response.json();
        for (let item of shared) {
          singleNews.whoShared.push(item.user);
        }
      });
    }
    return singleNews.whoShared;
  }

  // TODO: set in Utils
  public getTime(time: string): any {
    return getTime(time);
  }

  // public handleShowAllNewsByTagClick(tag: string): void {
  //    this.newsService.getNewsByTag(_.escape(tag));
  // }
}
