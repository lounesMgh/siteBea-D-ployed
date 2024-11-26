import { Component } from '@angular/core';
import { ChatbotService } from 'src/app/services/charbot/chatbot.service';
import { LanguageService } from 'src/app/services/language/language.service';

@Component({
  selector: 'app-chatbot-toggler',
  templateUrl: './chatbot-toggler.component.html',
  styleUrls: ['./chatbot-toggler.component.css']
})
export class ChatbotTogglerComponent {
  isChatbotOpen = false;

  constructor(private chatbotService: ChatbotService, public languageService: LanguageService) { }

  toggleChatbot(event: Event) {
    event.preventDefault();
    this.isChatbotOpen = !this.isChatbotOpen;
    this.chatbotService.toggleChatbot(this.isChatbotOpen);
  }
}
