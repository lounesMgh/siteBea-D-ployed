import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EpargnePlacementsComponent } from './epargne-placements.component';

describe('EpargnePlacementsComponent', () => {
  let component: EpargnePlacementsComponent;
  let fixture: ComponentFixture<EpargnePlacementsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EpargnePlacementsComponent]
    });
    fixture = TestBed.createComponent(EpargnePlacementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
