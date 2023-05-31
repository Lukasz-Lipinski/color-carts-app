import {
  ComponentFixture,
  TestBed,
} from '@angular/core/testing';
import { RegisterPageComponent } from './register-page.component';
import { RouterTestingModule } from '@angular/router/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { AuthService } from 'src/app/components/auth/auth.service';
import {
  mockedResponse,
  mockedUrl,
  mockedUserCredentials,
} from 'src/app/mocks';
import { of } from 'rxjs';
import { By } from '@angular/platform-browser';
import { ButtonLinkComponent } from 'src/app/components/button-link/button-link.component';
import { RegisterFormComponent } from 'src/app/components/register-form/register-form.component';
import { environment } from 'src/environments/environment';

describe('Testing Register Page Component', () => {
  let fixture: ComponentFixture<RegisterPageComponent>;
  let component: RegisterPageComponent;
  let controller: HttpTestingController;
  let authService: AuthService;
  let timer: NodeJS.Timeout;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RegisterPageComponent,
        RouterTestingModule,
        HttpClientTestingModule,
      ],
      providers: [
        {
          provide: AuthService,
          useValue: {
            register: () => of(mockedResponse),
          },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(
      RegisterPageComponent
    );
    component = fixture.componentInstance;
    controller = TestBed.inject(
      HttpTestingController
    );
    authService = TestBed.inject(AuthService);

    component.ngOnInit();
  });

  describe('Class Tests', () => {
    it('Should had details for button link component', () => {
      expect(
        component.homepageButton
      ).toBeTruthy();
    });

    it('Should close spinner', () => {
      component.setSpinner = {
        ...component.getSpinner,
        isError: true,
      };

      expect(
        component.getSpinner.isError
      ).toBeTrue();

      component.onCloseToast();
      expect(
        component.getSpinner.isError
      ).toBeFalse();
    });
  });

  describe('DOM Tests', () => {
    it('Should be rendered', () => {
      expect(component).toBeTruthy();
    });

    it('Should returned button link', () => {
      fixture.detectChanges();

      const buttonLinkComponent =
        fixture.debugElement.query(
          By.directive(ButtonLinkComponent)
        ).nativeElement;
      expect(buttonLinkComponent).toBeTruthy();
    });

    it('Should returned registration from component', () => {
      fixture.detectChanges();

      const registrationFormComponent =
        fixture.debugElement.query(
          By.directive(RegisterFormComponent)
        ).nativeElement;
      expect(
        registrationFormComponent
      ).toBeTruthy();
    });
  });
});
