import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolutionsMonetiqueComponent } from './solutions-monetique.component';

describe('SolutionsMonetiqueComponent', () => {
  let component: SolutionsMonetiqueComponent;
  let fixture: ComponentFixture<SolutionsMonetiqueComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SolutionsMonetiqueComponent]
    });
    fixture = TestBed.createComponent(SolutionsMonetiqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
