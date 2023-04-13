import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/components/auth/auth.service';
import { ButtonLink } from 'src/app/components/button-link/button-link.component';
import { Credentials } from 'src/app/components/login-form/login-form.component';
import { SharedModule } from 'src/app/shared/shared.module';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss'],
  standalone: true,
  imports: [SharedModule],
})
export class RegisterPageComponent
  implements OnInit
{
  readonly homepageButton: ButtonLink = {
    text: 'HOME PAGE',
    href: '',
    isFullRow: true,
  };
  directive: any; // here will be toast directive but firstly must be created
  constructor(
    private readonly authService: AuthService
  ) {}

  ngOnInit(): void {}

  onRegisterUser(userCredentials: Credentials) {
    this.authService
      .register(userCredentials)
      .subscribe({
        next: (res) =>
          (this.directive = res.data),
      });
  }
}
