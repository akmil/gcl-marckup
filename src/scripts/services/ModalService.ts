import { Injectable } from '@angular/core';
import { Modals } from '../enums/Modals';

@Injectable()
export class ModalService {

  private _activeNodal: Modals;

  public set activeModal(modal: Modals) {
    this._activeNodal = modal;
  }

  public get activeModal() {
    return this._activeNodal;
  }
}
