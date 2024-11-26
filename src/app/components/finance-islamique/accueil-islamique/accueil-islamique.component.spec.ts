import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccueilIslamiqueComponent } from './accueil-islamique.component';

describe('AccueilIslamiqueComponent', () => {
  let component: AccueilIslamiqueComponent;
  let fixture: ComponentFixture<AccueilIslamiqueComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AccueilIslamiqueComponent]
    });
    fixture = TestBed.createComponent(AccueilIslamiqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
