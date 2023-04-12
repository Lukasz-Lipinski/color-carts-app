import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/components/auth/auth.service';
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
  constructor(
    private readonly authService: AuthService
  ) {}

  ngOnInit(): void {}

  onRegisterUser(userCredentials: Credentials) {
    console.log(userCredentials);
    // this.authService
    //   .register(userCredentials)
    //   .subscribe({
    //     next: (res) => console.log(res),
    //   });
  }
}
