import { Injectable } from '@angular/core';

@Injectable()
export class LocalStorageService {
  // TODO: Create localStorage interface
  // TODO: Set default local storage
  private _localStorage: any = {};
  private _localStorageKey: string = 'gcl.com.';

  constructor() {}

  public get localStorage() {
    for (let index: number = 0; index < localStorage.length; index++) {
      let key: string = localStorage.key(index);
      let value: string;
      try {
        value = JSON.parse(localStorage.getItem(key));
      } catch (e) {
        value = localStorage.getItem(key);
      }
      key = key.replace(this._localStorageKey, '');
      this._localStorage[key] = value;

      console.log(this._localStorage);
    }
    return this._localStorage;
  }

  public set localStorage(localStorage: any) {
    this._localStorage = this.localStorage;
  }

  public setLocalStorageByKey(key: string, value: any): void {
    localStorage.setItem(this._localStorageKey + key, value);
  }
}
