import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepresentantesDeEntidadComponent } from './representantes-de-entidad.component';

describe('RepresentantesDeEntidadComponent', () => {
  let component: RepresentantesDeEntidadComponent;
  let fixture: ComponentFixture<RepresentantesDeEntidadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RepresentantesDeEntidadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RepresentantesDeEntidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
