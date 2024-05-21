import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OficinasDialogComponent } from './oficinas-dialog.component';

describe('OficinasDialogComponent', () => {
  let component: OficinasDialogComponent;
  let fixture: ComponentFixture<OficinasDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OficinasDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OficinasDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
