/*
import { Injectable } from '@angular/core';
import { io } from "socket.io-client";
import { Observable } from 'rxjs'
import * as Rx from 'rxjs/Rx';
import {environment} from 'src/environments/environment';



@Injectable({
  providedIn: 'root'
})
export class WebSocketService {
  private socket;

  constructor() { }

  connect(): Rx.Subject<MessageEvent>{
    this.socket = io(environment.ws_url);

    let observable = new Observable(observer =>
      this.socket.on('message', (data) => {
        console.log("Message websocket recu");
        observer.next(data);
      })
  }
}
*/