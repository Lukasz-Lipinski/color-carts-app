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

interface User {
  name: string;
  surname: string;
  email: string;
  address?: {
    city: string;
    postcode: string;
    street: string;
    flatNo: number;
  };
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
  });
  constructor(
    private readonly http: HttpClient
  ) {}

  register(user: User): Observable<any> {
    return this.http.post(this.url, user);
  }

  login(user: User): Observable<any> {
    return this.http.post(this.url, user);
  }

  logout() {
    this.user.next({
      email: '',
      name: '',
      surname: '',
    });
  }
}
