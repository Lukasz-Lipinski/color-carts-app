import {
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { AuthService } from 'src/app/components/auth/auth.service';
import { ButtonLink } from 'src/app/components/button-link/button-link.component';
import { Credentials } from 'src/app/components/login-form/login-form.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ISpinner } from '../login-page/login-page.component';

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
  private spinner: ISpinner = {
    errorRes: '',
    title: '',
    isLoading: false,
    isError: false,
  };
  public get getSpinner(): ISpinner {
    return this.spinner;
  }

  constructor(
    private readonly authService: AuthService,
    private readonly cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {}

  onRegisterUser(userCredentials: Credentials) {
    this.spinner = {
      ...this.spinner,
      isLoading: true,
    };

    this.authService
      .register(userCredentials)
      .subscribe({
        next: (res) => {
          if (res.error) {
            this.spinner = {
              isLoading: false,
              isError: true,
              errorRes: (res as any).error.error
                .msg,
            };
          }
          this.cdr.markForCheck();
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
