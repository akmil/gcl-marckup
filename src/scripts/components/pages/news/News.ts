import { Component } from '@angular/core';
import { NewsService } from '../../../services/NewsService';

@Component({
  selector: 'news',
  templateUrl: 'template.html'
})
export class News  {
  constructor(public newsService: NewsService) {}
}
