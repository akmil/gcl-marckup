import { Injectable } from '@angular/core';

export enum Mode {
  DOTA,
  CSGO
}

interface State {
  mode: Mode;
}

@Injectable()
export class ModeService {
  private _state: State = {
    mode: Mode.DOTA
  };

  public getMode(): Mode {
    return this._state.mode;
  }

  public setMode(nextMode: Mode): Mode {
    const prevMode: Mode = this._state.mode;
    this._state.mode = nextMode;
    return prevMode;
  }
}
