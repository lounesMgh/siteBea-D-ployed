import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EBankingComponent } from './e-banking.component';

describe('EBankingComponent', () => {
  let component: EBankingComponent;
  let fixture: ComponentFixture<EBankingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EBankingComponent]
    });
    fixture = TestBed.createComponent(EBankingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
