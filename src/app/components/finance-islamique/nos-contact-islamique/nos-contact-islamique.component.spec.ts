import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NosContactIslamiqueComponent } from './nos-contact-islamique.component';

describe('NosContactIslamiqueComponent', () => {
  let component: NosContactIslamiqueComponent;
  let fixture: ComponentFixture<NosContactIslamiqueComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NosContactIslamiqueComponent]
    });
    fixture = TestBed.createComponent(NosContactIslamiqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
