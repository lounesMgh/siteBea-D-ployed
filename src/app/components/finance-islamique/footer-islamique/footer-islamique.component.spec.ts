import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterIslamiqueComponent } from './footer-islamique.component';

describe('FooterIslamiqueComponent', () => {
  let component: FooterIslamiqueComponent;
  let fixture: ComponentFixture<FooterIslamiqueComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FooterIslamiqueComponent]
    });
    fixture = TestBed.createComponent(FooterIslamiqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
