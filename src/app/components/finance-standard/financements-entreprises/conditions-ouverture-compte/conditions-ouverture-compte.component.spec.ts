import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConditionsOuvertureCompteComponent } from './conditions-ouverture-compte.component';

describe('ConditionsOuvertureCompteComponent', () => {
  let component: ConditionsOuvertureCompteComponent;
  let fixture: ComponentFixture<ConditionsOuvertureCompteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConditionsOuvertureCompteComponent]
    });
    fixture = TestBed.createComponent(ConditionsOuvertureCompteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
