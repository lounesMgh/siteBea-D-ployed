import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditEntrepriseComponent } from './credit-entreprise.component';

describe('CreditEntrepriseComponent', () => {
  let component: CreditEntrepriseComponent;
  let fixture: ComponentFixture<CreditEntrepriseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreditEntrepriseComponent]
    });
    fixture = TestBed.createComponent(CreditEntrepriseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
