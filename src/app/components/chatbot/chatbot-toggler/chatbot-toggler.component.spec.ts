import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatbotTogglerComponent } from './chatbot-toggler.component';

describe('ChatbotTogglerComponent', () => {
  let component: ChatbotTogglerComponent;
  let fixture: ComponentFixture<ChatbotTogglerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChatbotTogglerComponent]
    });
    fixture = TestBed.createComponent(ChatbotTogglerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
