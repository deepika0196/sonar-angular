import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneracionDeInformesComponent } from './generacion-de-informes.component';

describe('GeneracionDeInformesComponent', () => {
  let component: GeneracionDeInformesComponent;
  let fixture: ComponentFixture<GeneracionDeInformesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeneracionDeInformesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GeneracionDeInformesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
