import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NosConditionsComponent } from './nos-conditions.component';

describe('NosConditionsComponent', () => {
  let component: NosConditionsComponent;
  let fixture: ComponentFixture<NosConditionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NosConditionsComponent]
    });
    fixture = TestBed.createComponent(NosConditionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
