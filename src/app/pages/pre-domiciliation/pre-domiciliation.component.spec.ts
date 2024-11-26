import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreDomiciliationComponent } from './pre-domiciliation.component';

describe('PreDomiciliationComponent', () => {
  let component: PreDomiciliationComponent;
  let fixture: ComponentFixture<PreDomiciliationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PreDomiciliationComponent]
    });
    fixture = TestBed.createComponent(PreDomiciliationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
