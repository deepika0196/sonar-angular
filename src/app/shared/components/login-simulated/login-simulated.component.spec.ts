import { LocationStrategy } from '@angular/common';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { of } from 'rxjs';
import { LoginSimulatedComponent } from './login-simulated.component';

describe('LoginSimulatedComponent', () => {
  let component: LoginSimulatedComponent;
  let fixture: ComponentFixture<LoginSimulatedComponent>;

  beforeEach(async(() => {
    const routerSpyObj = jasmine.createSpyObj('Router', ['navigate']);
    const toastrSpyObj = jasmine.createSpyObj('ToastrService', ['error']);

    TestBed.configureTestingModule({
      declarations: [LoginSimulatedComponent],
      imports: [HttpClientTestingModule],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: { queryParams: { url: null } },
            params: of({}),
          },
        },
        { provide: Router, useValue: routerSpyObj },
        { provide: ToastrService, useValue: toastrSpyObj },
        {
          provide: LocationStrategy,
          useValue: jasmine.createSpyObj('LocationStrategy', ['getBaseHref']),
        },
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginSimulatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
