import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OuvrireCompteComponent } from './ouvrire-compte.component';

describe('OuvrireCompteComponent', () => {
  let component: OuvrireCompteComponent;
  let fixture: ComponentFixture<OuvrireCompteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OuvrireCompteComponent]
    });
    fixture = TestBed.createComponent(OuvrireCompteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
