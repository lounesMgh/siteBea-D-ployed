import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrifBancairesComponent } from './trif-bancaires.component';

describe('TrifBancairesComponent', () => {
  let component: TrifBancairesComponent;
  let fixture: ComponentFixture<TrifBancairesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TrifBancairesComponent]
    });
    fixture = TestBed.createComponent(TrifBancairesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
