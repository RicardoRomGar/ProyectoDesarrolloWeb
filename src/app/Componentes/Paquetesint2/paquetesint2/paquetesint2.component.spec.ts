import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Paquetesint2Component } from './paquetesint2.component';

describe('Paquetesint2Component', () => {
  let component: Paquetesint2Component;
  let fixture: ComponentFixture<Paquetesint2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Paquetesint2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Paquetesint2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
