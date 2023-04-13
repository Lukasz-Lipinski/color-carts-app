import { HttpClient } from '@angular/common/http';
import {
  Injectable,
  isDevMode,
} from '@angular/core';
import {
  BehaviorSubject,
  Observable,
  catchError,
  of,
} from 'rxjs';
import { environment } from 'src/environments/environment';
import { Credentials } from '../login-form/login-form.component';

export interface User {
  name: string;
  surname: string;
  email: string;
  isLogged: boolean;
  address?: {
    city: string;
    postcode: string;
    street: string;
    flatNo: number;
  };
}

export interface BackendError {
  msg: string;
}

export interface BackendResponse {
  data: User | Error;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly url = environment.BACKEND_API;

  user = new BehaviorSubject<User>({
    name: '',
    surname: '',
    email: '',
    isLogged: false,
  });

  constructor(
    private readonly http: HttpClient
  ) {}

  register(
    user: Credentials
  ): Observable<BackendResponse> {
    return this.http.post<BackendResponse>(
      this.url + '/users/register',
      user
    );
  }

  login(
    user: Credentials
  ): Observable<BackendResponse> {
    return this.http
      .post<BackendResponse>(
        this.url + '/users/login',
        user
      )
      .pipe(
        catchError((res) => {
          return of(res);
        })
      );
  }

  logout() {
    this.user.next({
      email: '',
      name: '',
      surname: '',
      isLogged: false,
    });
  }
}
