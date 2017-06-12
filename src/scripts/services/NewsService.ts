import * as RX from 'rxjs';
import { Injectable } from '@angular/core';
import { Http, RequestOptionsArgs, RequestMethod, ResponseContentType, Response, Headers } from '@angular/http';
import { News } from '../interface/News';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { SocketService } from './SocketService';
import { config } from '../config';
import { NewsComments } from '../interface/NewsComments';

const IFRAME_REG_EXP: RegExp = /<iframe.+<\/iframe>/g;
@Injectable()
export class NewsService {
  private _news: Array<News> = [];
  private _newsComments: Array<NewsComments> = [];

  constructor(
    public toastr: ToastsManager,
    private _http: Http,
    private _socketService: SocketService
  ) {
    this._addNewsSocketSubscriber();
    this._likeNewsSocketSubscriber();
    this._shareNewsSocketSubscriber();
    this._newsCommentsSocketSubscriber();
  }

  public get news(): Array<News> {
    return this._news;
  }

  public set news(news: Array<News>) {
    this._news = news;
  }

  public get newsComments(): Array<NewsComments> {
    return this._newsComments;
  }

  public set newsComments(newsComments: Array<NewsComments>) {
    this._newsComments = newsComments;
  }

  public addCommentToSingleNewsBy(newsId: number, comment: string): RX.Observable<Response> {
    return this._http.get(config.restUrl + '/api/news/comment', <RequestOptionsArgs> {
      method: RequestMethod.Post,
      headers: new Headers({'Content-Type': 'application/json'}),
      responseType: ResponseContentType.Json,
      withCredentials: true,
      body: { newsId, comment }
    });
  }

  public updateNewsComments(newsId: number): void {
    this._http.get(`${config.restUrl}/api/news/${newsId}/comment`, <RequestOptionsArgs> {
      method: RequestMethod.Get,
      headers: new Headers({'Content-Type': 'application/json'}),
      responseType: ResponseContentType.Json,
      withCredentials: true
    }).subscribe((response: Response): void => {
      if (!response.ok) {
        // TODO: notification
        return;
      }
      const { comments, error } = response.json();
      if (error) {
        // TODO: notification
        return;
      }
      this.newsComments = comments || [];
    });
  }

  public likeNews(newsId: number): void {
    this._http.get(config.restUrl + '/api/news/like', <RequestOptionsArgs> {
      method: RequestMethod.Post,
      headers: new Headers({'Content-Type': 'application/json'}),
      responseType: ResponseContentType.Json,
      withCredentials: true,
      body: { newsId }
    }).subscribe((response: Response): void => {
      // In Socket
      // const { news_id, likeNews }: { news_id: number, likeNews: boolean } = response.json();
      // this.increaseOrDecreaseNewLikeCount(news_id, likeNews);
    });
  }

  /** Increasing or decreasing like count in news
   * @param newsId {number} - id of news for decrease/increase like count
   * @param increase {boolean} - if true method will increase, else decrease
   * @return void
   */
  public increaseOrDecreaseNewLikeCount(newsId: number, increase: boolean): void {
    if (newsId >= 0) {
      const newsById: News = this.news.find((singleNews: News): boolean => (singleNews.id === newsId));
      newsById.like_count = increase ?
        newsById.like_count + 1 :
        newsById.like_count > 0 ? newsById.like_count - 1 : 0;
    }
  }

  public increaseNewsShareCount(newsId: number): void {
    if (newsId >= 0) {
      const newsById: News = this.news.find((singleNews: News): boolean => (singleNews.id === newsId));
      newsById.share_count++;
    }
  }

  public updateNews(): void {
    this._http.get(config.restUrl + '/api/news', <RequestOptionsArgs> {
      method: RequestMethod.Get,
      withCredentials: true,
      headers: new Headers({'Content-Type': 'application/json'}),
      responseType: ResponseContentType.Json
    }).subscribe((response: Response): void => {
      const { news }: { news: News[] } = response.json();
      if (news) {
        this.news = news;
      }
    });
  }

  public getNewsById(id: number): RX.Observable<Response> {
    return this._http.get(`${config.restUrl}/api/news/${id}`, <RequestOptionsArgs> {
      method: RequestMethod.Get,
      withCredentials: true,
      headers: new Headers({'Content-Type': 'application/json'}),
      responseType: ResponseContentType.Json
    });
  }

  public getNewsByUserId(userId: number): RX.Observable<Response> {
    return this._http.get(`${config.restUrl}/api/news/user/${userId}`, <RequestOptionsArgs> {
      method: RequestMethod.Get,
      withCredentials: true,
      headers: new Headers({'Content-Type': 'application/json'}),
      responseType: ResponseContentType.Json
    });
  }

  // public changeNewsVideo(news: string): Array<{text: string, isVideo: boolean}> {
  //   // const domModel = new DOMParser();
  //   // const domElements: Document = domModel.parseFromString(news, 'text/html');
  //   // const iframes: Array<HTMLElement> = domElements.getElementsByTagName('iframe');
  //   // for (let i: number = 0; i < iframes.length; i++) {
  //   //   iframes[i].src = this.domSanitizer.bypassSecurityTrustResourceUrl(iframes[i].src);
  //   // }
  //   // return <HTMLBodyElement> domElements.getElementsByTagName('body')[0].innerHTML;
  //
  // }

  public addNewsToClient(news: News): void {
    this.news.unshift(news);
  }

  public addNewsToServer(news: News, callback?: Function): void {
    this._http.get(`${config.restUrl}/api/news/add`, <RequestOptionsArgs> {
      method: RequestMethod.Post,
      headers: new Headers({'Content-Type': 'application/json'}),
      responseType: ResponseContentType.Json,
      withCredentials: true,
      body: news
    }).subscribe((response: Response): void => {
      const { error, news }: { error: string, news: News} = response.json();
      if (error) {
        this.toastr.error(error);
        return
      }
      if (callback) {
        callback();
      }
    });
  }

  public filterNews(tags: Array<string>): RX.Observable<Response>  {
    return this._http.get(`${config.restUrl}/api/news/filter`, <RequestOptionsArgs> {
      method: RequestMethod.Post,
      headers: new Headers({'Content-Type': 'application/json'}),
      responseType: ResponseContentType.Json,
      withCredentials: true,
      body: { tags }
    });
    //   .subscribe((response: Response): void => {
    //   const { error, news }: { error: string, news: News} = response.json();
    //   if (error) {
    //     this.toastr.error(error);
    //     return;
    //   }
    //   if (news) {
    //     this.news = news;
    //   }
    // });
  }

  public shareNews(newsId: Number): void {
    this._http.post(`${config.restUrl}/api/news/share`, <RequestOptionsArgs> {
      method: RequestMethod.Post,
      headers: new Headers({'Content-Type': 'application/json'}),
      responseType: ResponseContentType.Json,
      withCredentials: true,
      body: {newsId}
    }).subscribe((response: Response): void => {
      const { error, news }: { error: string, news: News} = response.json();
      if (error) {
        this.toastr.error(error);
        return
      }
    });
  }

  public whoShared(newsId: Number): RX.Observable<Response> {
    return this._http.get(`${config.restUrl}/api/news/${newsId}/shared`, <RequestOptionsArgs> {
      method: RequestMethod.Get,
      headers: new Headers({'Content-Type': 'application/json'}),
      responseType: ResponseContentType.Json,
      withCredentials: true,
      body: {newsId}
    });
  }

  private _addNewsSocketSubscriber(): void {
    this._socketService.socket.on('addNews', (newsData: {news: News}): void => {
      if (newsData.news && newsData.news.published) {
        this.addNewsToClient(newsData.news);
      }
    });
  }

  private _likeNewsSocketSubscriber(): void {
    this._socketService.socket.on('likeNews', ({ news_id, likeNews }: { news_id: number, likeNews: boolean }): void => {
      this.increaseOrDecreaseNewLikeCount(news_id, likeNews);
    });
  }

  private _shareNewsSocketSubscriber(): void {
    this._socketService.socket.on('shareNews', ({ news_id }: { news_id: number }): void => {
      this.increaseNewsShareCount(news_id);
    });
  }

  private _newsCommentsSocketSubscriber(): void {
    this._socketService.socket.on('newsComments', (response: {newsComment: NewsComments}): void => {
      this.newsComments.unshift(response.newsComment);
    });
  }
}
