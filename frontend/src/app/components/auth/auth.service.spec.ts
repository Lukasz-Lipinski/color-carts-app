import { TestBed } from '@angular/core/testing';
import { AuthService } from './auth.service';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import {
  mockedError,
  mockedResponse,
  mockedUserCredentials,
} from 'src/app/mocks';

describe('Testing Auth Service', () => {
  let service: AuthService;
  let controller: HttpTestingController;
  const url = 'http://localhost:5000';

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [AuthService],
    }).compileComponents();

    service = TestBed.inject(AuthService);
    controller = TestBed.inject(
      HttpTestingController
    );
  });

  it('Should return mocked response if register method was invoked', (dn: DoneFn) => {
    service
      .register(mockedUserCredentials)
      .subscribe({
        next: (res) => {
          expect(res.data).toBe(
            mockedResponse.data
          );
          dn();
        },
      });

    controller
      .expectOne(url + '/users/register')
      .flush(mockedResponse);
  });

  it('Should return mocked response if login method was invoked', (dn: DoneFn) => {
    service
      .login(mockedUserCredentials)
      .subscribe({
        next: (res) => {
          expect(res.data).toBe(
            mockedResponse.data
          );
          dn();
        },
      });

    controller
      .expectOne(url + '/users/login')
      .flush(mockedResponse);
  });

  it('Should return error if something went wrong during registration', (dn: DoneFn) => {
    service
      .register(mockedUserCredentials)
      .subscribe({
        next: (error) => {
          expect(error).toBe(mockedError);
          console.log(error);
          dn.fail();
        },
      });

    controller
      .expectOne(url + '/users/register')
      .flush(mockedError);
  });
});
