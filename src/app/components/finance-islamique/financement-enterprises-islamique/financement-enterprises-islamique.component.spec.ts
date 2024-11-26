import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinancementEnterprisesIslamiqueComponent } from './financement-enterprises-islamique.component';

describe('FinancementEnterprisesIslamiqueComponent', () => {
  let component: FinancementEnterprisesIslamiqueComponent;
  let fixture: ComponentFixture<FinancementEnterprisesIslamiqueComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FinancementEnterprisesIslamiqueComponent]
    });
    fixture = TestBed.createComponent(FinancementEnterprisesIslamiqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
