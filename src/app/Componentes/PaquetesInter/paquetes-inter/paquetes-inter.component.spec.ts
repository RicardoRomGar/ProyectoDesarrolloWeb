import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaquetesInterComponent } from './paquetes-inter.component';

describe('PaquetesInterComponent', () => {
  let component: PaquetesInterComponent;
  let fixture: ComponentFixture<PaquetesInterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaquetesInterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaquetesInterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
