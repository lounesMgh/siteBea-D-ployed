import { Component, OnInit } from '@angular/core';
import { ChatbotService } from 'src/app/services/charbot/chatbot.service';
import { LanguageService } from 'src/app/services/language/language.service';

@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.css']
})
export class ChatbotComponent implements OnInit {
  userMessage: string = '';
  chats: Array<{ message: string, isOutgoing: boolean, isError?: boolean }> = [
    { message: 'Bienvenue, je suis là pour répondre à vos questions.' , isOutgoing: false }
  ];
  isChatbotOpen: boolean = false;

  constructor(private chatbotService: ChatbotService,public languageService:LanguageService) {}

  ngOnInit() {
    this.chatbotService.chatbotState.subscribe(state => {
      this.isChatbotOpen = state;
    });
  }

  // closeChatbot() {
  //   this.chatbotService.toggleChatbot(false);
  // }

  checkEnter(event: KeyboardEvent) {
    if (event.key === 'Enter' && !event.shiftKey && window.innerWidth > 800) {
      event.preventDefault();
      this.sendMessage();
    }
  }

  sendMessage() {
    const message = this.userMessage.trim();
    if (!message) return;

    this.chats.push({ message, isOutgoing: true });
    this.userMessage = '';

    const thinkingMessage = { message: 'Veillez patienté ... ', isOutgoing: false };
    this.chats.push(thinkingMessage);

    // Simulate a delay and API response
    setTimeout(() => {
      this.generateResponse(thinkingMessage);
    }, 600);
  }

  generateResponse(chatElement: { message: string, isOutgoing: boolean }) {
    // Here you would add your API call
    // For demonstration, we'll use a static response
    setTimeout(() => {
      chatElement.message = "On va implémenter une 'Api bea' pour les réponses.";
    }, 2000);
  }
}
