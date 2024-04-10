import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntidadesSolicitantesComponent } from './entidades-solicitantes.component';

describe('EntidadesSolicitantesComponent', () => {
  let component: EntidadesSolicitantesComponent;
  let fixture: ComponentFixture<EntidadesSolicitantesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntidadesSolicitantesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EntidadesSolicitantesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
