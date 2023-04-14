import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  OnInit,
  Output,
} from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { of } from 'rxjs';

export interface Control {
  name: string;
  type: 'email' | 'password';
  label?: string;
}

interface LoginForm {
  email: FormControl<string>;
  password: FormControl<string>;
  [key: string]: FormControl<any>;
}

export interface Credentials {
  email: string;
  password: string;
}

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginFormComponent
  implements OnInit
{
  loginForm!: FormGroup<LoginForm>;
  readonly controls: Control[] = [
    {
      name: 'email',
      type: 'email',
    },
    {
      name: 'password',
      type: 'password',
    },
  ];
  @Output() submitEmitter =
    new EventEmitter<Credentials>();

  constructor() {}

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl('', {
        nonNullable: true,
        validators: [
          Validators.required,
          Validators.email,
        ],
      }),
      password: new FormControl('', {
        nonNullable: true,
        validators: [
          Validators.required,
          Validators.minLength(5),
        ],
      }),
    });
  }

  onSubmit() {
    const { email, password } =
      this.loginForm.controls;

    this.loginForm.valid &&
      this.submitEmitter.next({
        email: email.value,
        password: password.value,
      });
  }

  disable() {
    return this.loginForm.invalid;
  }

  setControl(controlName: string) {
    return of(
      this.loginForm.controls[controlName]
    );
  }
}
