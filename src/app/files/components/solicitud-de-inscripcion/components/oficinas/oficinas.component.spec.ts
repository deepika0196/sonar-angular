import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OficinasComponent } from './oficinas.component';
import { TranslocoRootModule } from '@app/transloco-root.module';
import { HttpClientModule } from '@angular/common/http';

describe('OficinasComponent', () => {
  let component: OficinasComponent;
  let fixture: ComponentFixture<OficinasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TranslocoRootModule, HttpClientModule],
      declarations: [OficinasComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(OficinasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
