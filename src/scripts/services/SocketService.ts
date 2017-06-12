import { Injectable } from '@angular/core';
import { config } from '../config';
import * as io from 'socket.io-client';

@Injectable()
export class SocketService {
  private _socket: any = null;

  constructor() {
    this._socket = io.connect(config.socketUrl, {
      'reconnection': true,
      'reconnectionDelay': 1000,
      'reconnectionDelayMax': 15000,
      'reconnectionAttempts': 25,
      'transports': ['websocket', 'flashsocket', 'xhr-polling']
    });

    this._socket.emit('join', { id: 0 });
  }

  public get socket(): any {
    return this._socket;
  }
}
