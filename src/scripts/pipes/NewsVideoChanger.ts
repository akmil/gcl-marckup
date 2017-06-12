import * as _ from 'lodash';
import { Pipe, PipeTransform } from '@angular/core';

const YOUTUBE: RegExp = /(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/;
const YOUTUBE_TIME_RELS: RegExp = /[\?|\#].+/;
const TWITCH: RegExp = /(?:https?:\/{2})?(?:w{3}\.)?twitch.tv\/videos\/[1-9]+/

@Pipe({
  name: 'newsVideoChanger',
  pure: true
})
export class NewsVideoChanger implements PipeTransform {

  // @Override
  public transform(content: string): string {
    const domParser: DOMParser = new DOMParser();
    const domFromNews: Document = domParser.parseFromString(content, 'text/html');
    const iframes: NodeListOf<Element> = domFromNews.querySelectorAll('iframe');
    for (let i: number = 0; i < iframes.length; i++) {
      this.createYoutubeThumbnail(iframes[i]);
      this.createTwitchThubnail(iframes[i]);
    }
    return domFromNews.body.innerHTML;
  }

  private createTwitchThubnail(iframeWithTwitch: Element): void {
    if (!iframeWithTwitch || !iframeWithTwitch.getAttribute('src')) {
      return;
    }
    const videoMatch: RegExpMatchArray = iframeWithTwitch.getAttribute('src').match(TWITCH);
    if (videoMatch !== null) {
      const twitchThumbnailElement: Element = document.createElement('img');
      const container: Element = document.createElement('span');
      twitchThumbnailElement.setAttribute('src', `http://3g28wn33sno63ljjq514qr87.wpengine.netdna-cdn.com/wp-content/uploads/2014/05/Screen-Shot-2014-05-19-at-11.23.09-AM.png`);
      twitchThumbnailElement.setAttribute('data-video', videoMatch[0]);
      container.appendChild(twitchThumbnailElement);
      iframeWithTwitch.parentElement.replaceChild(container, iframeWithTwitch);
    }
    //https://www.twitch.tv/videos/117523394
  }

  private createYoutubeThumbnail(iframeWithYoutube: Element): void {
    if (!iframeWithYoutube || !iframeWithYoutube.getAttribute('src')) {
      return;
    }
    const videoMatch: RegExpMatchArray = iframeWithYoutube.getAttribute('src').match(YOUTUBE);
    if (videoMatch !== null) {
      const videoId: string = _.last(videoMatch[1].split('/')).replace(YOUTUBE_TIME_RELS, '');
      if (videoId) {
        const youtubeThumbnailElement: Element = document.createElement('img');
        const container: Element = document.createElement('span');
        youtubeThumbnailElement.setAttribute('src', `http://img.youtube.com/vi/${videoId}/0.jpg`);
        youtubeThumbnailElement.setAttribute('data-video', `https://www.youtube.com/embed/${videoId}`);
        container.appendChild(youtubeThumbnailElement);
        iframeWithYoutube.parentElement.replaceChild(container, iframeWithYoutube);
      }
      console.log("video id = ", videoId);
    }
  }

}
