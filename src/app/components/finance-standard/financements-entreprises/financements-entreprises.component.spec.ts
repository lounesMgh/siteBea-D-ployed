import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinancementsEntreprisesComponent } from './financements-entreprises.component';

describe('FinancementsEntreprisesComponent', () => {
  let component: FinancementsEntreprisesComponent;
  let fixture: ComponentFixture<FinancementsEntreprisesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FinancementsEntreprisesComponent]
    });
    fixture = TestBed.createComponent(FinancementsEntreprisesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
