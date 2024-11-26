import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConvertisseurDevisesComponent } from './convertisseur-devises.component';

describe('ConvertisseurDevisesComponent', () => {
  let component: ConvertisseurDevisesComponent;
  let fixture: ComponentFixture<ConvertisseurDevisesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConvertisseurDevisesComponent]
    });
    fixture = TestBed.createComponent(ConvertisseurDevisesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
