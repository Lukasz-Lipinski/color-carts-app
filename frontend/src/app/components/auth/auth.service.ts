import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  BehaviorSubject,
  Observable,
  catchError,
  map,
  of,
} from 'rxjs';
import { environment } from 'src/environments/environment';
import { Credentials } from '../login-form/login-form.component';

export interface User {
  name?: string;
  surname?: string;
  email: string;
  isLogged: boolean;
  id?: string;
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
  data?: User;
  error?: BackendError;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly url = environment.BACKEND_API;

  user = new BehaviorSubject<User>({
    email: '',
    id: '',
    isLogged: false,
  });

  constructor(
    private readonly http: HttpClient
  ) {}

  register(
    user: Credentials
  ): Observable<BackendResponse> {
    return this.http
      .post<BackendResponse>(
        this.url + '/users/register',
        user
      )
      .pipe(
        catchError((res) => {
          return of(res);
        }),
        map((data) => {
          if ('data' in data) {
            this.setUserData(data.data);
          }
          return data;
        })
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
          throw res;
        }),
        map((data) => {
          if ('data' in data) {
            this.setUserData(data.data!);
          }
          return data;
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

  private setUserData(data: User) {
    this.user.next({
      ...data,
      isLogged: true,
    });
  }
}
