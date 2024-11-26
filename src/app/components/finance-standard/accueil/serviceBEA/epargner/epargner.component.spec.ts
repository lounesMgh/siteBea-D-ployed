import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EpargnerComponent } from './epargner.component';

describe('EpargnerComponent', () => {
  let component: EpargnerComponent;
  let fixture: ComponentFixture<EpargnerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EpargnerComponent]
    });
    fixture = TestBed.createComponent(EpargnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
