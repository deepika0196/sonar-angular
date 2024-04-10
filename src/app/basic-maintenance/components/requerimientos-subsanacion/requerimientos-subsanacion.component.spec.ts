import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequerimientosSubsanacionComponent } from './requerimientos-subsanacion.component';

describe('RequerimientosSubsanacionComponent', () => {
  let component: RequerimientosSubsanacionComponent;
  let fixture: ComponentFixture<RequerimientosSubsanacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequerimientosSubsanacionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RequerimientosSubsanacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
