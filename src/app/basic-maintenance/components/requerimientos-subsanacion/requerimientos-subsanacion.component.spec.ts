import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { RequerimientosSubsanacionComponent } from './requerimientos-subsanacion.component';
import { TranslocoRootModule } from '@app/transloco-root.module';

describe('RequerimientosSubsanacionComponent', () => {
  let component: RequerimientosSubsanacionComponent;
  let fixture: ComponentFixture<RequerimientosSubsanacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TranslocoRootModule, HttpClientModule],
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
