import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinancementParticuliersIslamiqueComponent } from './financement-particuliers-islamique.component';

describe('FinancementParticuliersIslamiqueComponent', () => {
  let component: FinancementParticuliersIslamiqueComponent;
  let fixture: ComponentFixture<FinancementParticuliersIslamiqueComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FinancementParticuliersIslamiqueComponent]
    });
    fixture = TestBed.createComponent(FinancementParticuliersIslamiqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
