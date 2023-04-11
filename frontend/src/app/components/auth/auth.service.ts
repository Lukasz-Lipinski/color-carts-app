import { HttpClient } from '@angular/common/http';
import {
  Injectable,
  isDevMode,
} from '@angular/core';
import {
  BehaviorSubject,
  Observable,
} from 'rxjs';
import { environment } from 'src/environments/environment';

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

interface Error {
  msg: string;
  status: number;
}

interface Response {
  data: User | Error;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly url = isDevMode()
    ? environment.BACKEND_API
    : process.cwd();

  user = new BehaviorSubject<User>({
    name: '',
    surname: '',
    email: '',
    isLogged: false,
  });

  constructor(
    private readonly http: HttpClient
  ) {}

  register(user: User): Observable<Response> {
    return this.http.post<Response>(
      this.url + 'users/register',
      user
    );
  }

  login(user: User): Observable<Response> {
    return this.http.post<Response>(
      this.url + 'users/login',
      user
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
