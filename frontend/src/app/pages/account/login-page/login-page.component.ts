import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/components/auth/auth.service';
import { ButtonLink } from 'src/app/components/button-link/button-link.component';
import { Credentials } from 'src/app/components/login-form/login-form.component';
import { SharedModule } from 'src/app/shared/shared.module';

export interface ISpinner {
  isLoading: boolean;
  isError: boolean;
  errorRes?: string;
  title?: string;
}

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
  standalone: true,
  imports: [SharedModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginPageComponent
  implements OnInit
{
  readonly homepageButton: ButtonLink = {
    text: 'HOME PAGE',
    href: '',
    isFullRow: true,
  };

  private spinner: ISpinner = {
    isLoading: false,
    isError: false,
    errorRes: '',
    title: '',
  };
  public get getSpinner() {
    return this.spinner;
  }
  readonly benefits = [
    'Order status overview',
    'Order history overview',
    'Lack of needs to save delivery data for incoming shipment',
    'Possibility to get discounts',
  ];
  constructor(
    private readonly authService: AuthService,
    private readonly changeDetectorRef: ChangeDetectorRef,
    private readonly router: Router
  ) {}

  ngOnInit(): void {}

  onLoginUser(user: Credentials) {
    this.spinner = {
      isError: false,
      isLoading: true,
    };

    this.authService.login(user).subscribe({
      next: (res) => {
        this.spinner = {
          isLoading: false,
          isError: false,
        };
        this.changeDetectorRef.detectChanges();
      },
      error: ({ error, statusText }) => {
        this.spinner = {
          isLoading: false,
          isError: true,
          errorRes: error.error.msg,
          title: statusText,
        };
        this.changeDetectorRef.detectChanges();
      },
    });
  }

  onCloseToast() {
    this.spinner = {
      ...this.spinner,
      isError: false,
    };
  }
}
