import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EBankingComponentComponent } from './e-banking-component.component';

describe('EBankingComponentComponent', () => {
  let component: EBankingComponentComponent;
  let fixture: ComponentFixture<EBankingComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EBankingComponentComponent]
    });
    fixture = TestBed.createComponent(EBankingComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
