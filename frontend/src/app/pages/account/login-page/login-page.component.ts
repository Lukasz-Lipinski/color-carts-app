import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/components/auth/auth.service';
import { ButtonLink } from 'src/app/components/button-link/button-link.component';
import { Credentials } from 'src/app/components/login-form/login-form.component';
import { SharedModule } from 'src/app/shared/shared.module';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
  standalone: true,
  imports: [SharedModule],
})
export class LoginPageComponent
  implements OnInit
{
  readonly homepageButton: ButtonLink = {
    text: 'HOME PAGE',
    href: '',
    isFullRow: true,
  };
  readonly benefits = [
    'Order status overview',
    'Order history overview',
    'Lack of needs to save delivery data for incoming shipment',
    'Possibility to get discounts',
  ];
  constructor(
    private readonly authService: AuthService
  ) {}

  ngOnInit(): void {}

  onLoginUser(user: Credentials) {
    this.authService.login(user).subscribe({
      next: (res) => {
        console.log(res);
      },
    });
  }
}
