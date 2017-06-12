import {Component, Input, ChangeDetectorRef, EventEmitter, Output, AfterViewInit} from '@angular/core';
import {DomSanitizer} from "@angular/platform-browser";

@Component({
  selector: 'news-video-popup',
  templateUrl: 'template.html'
})
export class NewsVideoPopup implements AfterViewInit {
  @Input()
  public activeVideoUrl: string;

  @Output()
  public hideVideoPopup: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(public changeDetectorRef : ChangeDetectorRef, public sanitizer: DomSanitizer,) {
  }

  public ngAfterViewInit(): void {
    this.changeDetectorRef.detach();
  }

  public closePopup(): void {
    this.hideVideoPopup.emit(true);
  }
}
