import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NosContactsComponent } from './nos-contacts.component';

describe('NosContactsComponent', () => {
  let component: NosContactsComponent;
  let fixture: ComponentFixture<NosContactsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NosContactsComponent]
    });
    fixture = TestBed.createComponent(NosContactsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
