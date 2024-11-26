import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NosComptesComponent } from './nos-comptes.component';

describe('NosComptesComponent', () => {
  let component: NosComptesComponent;
  let fixture: ComponentFixture<NosComptesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NosComptesComponent]
    });
    fixture = TestBed.createComponent(NosComptesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
