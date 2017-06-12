import {
  Component,
  OnDestroy,
  AfterViewInit,
  EventEmitter,
  Input,
  Output
} from '@angular/core';

declare const tinymce: any;

@Component({
  selector: 'html-editor',
  template: `<textarea id="{{elementId}}"></textarea>`
})
export class HtmlEditor implements AfterViewInit, OnDestroy {
  @Input() elementId: String;
  @Output() handleChangeEvent = new EventEmitter<any>();

  private editor: any;

  public ngAfterViewInit(): void {
    tinymce.init({
      selector: '#' + this.elementId,
      skin_url: 'static/css/skins/lightgray',
      plugins: [
        'advlist autolink lists link image charmap print preview hr anchor pagebreak',
        'searchreplace wordcount visualblocks visualchars code fullscreen',
        'insertdatetime media nonbreaking save table contextmenu directionality',
        'emoticons template paste textcolor colorpicker textpattern imagetools codesample toc'
      ],
      setup: this.setup.bind(this),
    });
  }

  public ngOnDestroy() {
    tinymce.remove(this.editor);
  }

  private setup (editor: any): void {
    this.editor = editor;
    editor.on('change', (): void => this.handleChangeEvent.emit(editor.getContent()));
  }
}