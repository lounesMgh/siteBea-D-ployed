import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatbotService {
  private chatbotStateSource = new BehaviorSubject<boolean>(false);
  chatbotState = this.chatbotStateSource.asObservable();

  toggleChatbot(state: boolean) {
    this.chatbotStateSource.next(state);
  }
}
