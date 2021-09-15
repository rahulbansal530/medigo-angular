import { Injectable } from '@angular/core';
import { ChatMessageDto } from '../models/chatMessageDto';

// -------------- for CI-CD -------------------
const CHAT_URL = 'wss://medigojavabackend-amxbp6pvia-el.a.run.app/chat';

// -------------- for local -------------------
// const CHAT_URL = 'ws://localhost:8081/chat';


@Injectable({
  providedIn: 'root'
})
export class WebSocketService {

  webSocket: WebSocket;
  chatMessages: ChatMessageDto[] = [];

  constructor() { }

  public openWebSocket(){
    this.webSocket = new WebSocket(CHAT_URL);

    this.webSocket.onopen = (event) => {
      console.log('Open: ', event);
    };

    this.webSocket.onmessage = (event) => {
      const chatMessageDto = JSON.parse(event.data);
      this.chatMessages.push(chatMessageDto);
    };

    this.webSocket.onclose = (event) => {
      console.log('Close: ', event);
    };
  }

  public sendMessage(chatMessageDto: ChatMessageDto){
    this.webSocket.send(JSON.stringify(chatMessageDto));
  }

  public closeWebSocket() {
    this.webSocket.close();
  }
}
