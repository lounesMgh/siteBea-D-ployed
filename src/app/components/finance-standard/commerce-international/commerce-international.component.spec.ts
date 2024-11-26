import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommerceInternationalComponent } from './commerce-international.component';

describe('CommerceInternationalComponent', () => {
  let component: CommerceInternationalComponent;
  let fixture: ComponentFixture<CommerceInternationalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CommerceInternationalComponent]
    });
    fixture = TestBed.createComponent(CommerceInternationalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
