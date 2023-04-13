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
  mockedUserCredentials,
} from 'src/app/mocks';
import { of } from 'rxjs';
import { By } from '@angular/platform-browser';
import { ButtonLinkComponent } from 'src/app/components/button-link/button-link.component';
import { RegisterFormComponent } from 'src/app/components/register-form/register-form.component';

describe('Testing Register Page Component', () => {
  let fixture: ComponentFixture<RegisterPageComponent>;
  let component: RegisterPageComponent;
  let controller: HttpTestingController;
  let authService: AuthService;

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

    component.ngOnInit();
  });

  describe('Class Tests', () => {
    it('Should had details for button link component', () => {
      expect(
        component.homepageButton
      ).toBeTruthy();
    });

    it('Should sent user credentials to backend and got an response', (dn: DoneFn) => {
      component.onRegisterUser(
        mockedUserCredentials
      );
      dn();

      expect(component.directive).toBe(
        mockedResponse.data
      );
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
