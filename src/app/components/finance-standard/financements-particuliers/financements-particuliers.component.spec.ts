import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinancementsParticuliersComponent } from './financements-particuliers.component';

describe('FinancementsParticuliersComponent', () => {
  let component: FinancementsParticuliersComponent;
  let fixture: ComponentFixture<FinancementsParticuliersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FinancementsParticuliersComponent]
    });
    fixture = TestBed.createComponent(FinancementsParticuliersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
