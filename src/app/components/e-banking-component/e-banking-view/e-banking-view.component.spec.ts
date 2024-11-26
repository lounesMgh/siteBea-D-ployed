import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EBankingViewComponent } from './e-banking-view.component';

describe('EBankingViewComponent', () => {
  let component: EBankingViewComponent;
  let fixture: ComponentFixture<EBankingViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EBankingViewComponent]
    });
    fixture = TestBed.createComponent(EBankingViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
