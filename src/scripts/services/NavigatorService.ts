import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class NavigatorService {
  constructor(public router: Router) {}

  public navigateTo(url: string): void {
    this.router.navigate([url]);
  }
}
