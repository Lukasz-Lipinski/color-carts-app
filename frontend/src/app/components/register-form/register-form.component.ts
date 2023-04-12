import {
  Component,
  EventEmitter,
  OnInit,
  Output,
} from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import {
  Control,
  Credentials,
} from '../login-form/login-form.component';

interface RegisterForm {
  email: FormControl<string>;
  password: FormControl<string>;
  confirmingPassword: FormControl<string>;
}

const comparingPasswordsValidator = (
  passForCompering: AbstractControl
): ValidatorFn => {
  return (
    control: AbstractControl
  ): ValidationErrors | null => {
    return control.value ===
      passForCompering.value
      ? null
      : {
          notEqual: 'Passwords are diverse',
        };
  };
};

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss'],
})
export class RegisterFormComponent
  implements OnInit
{
  controls: Control[] = [
    {
      name: 'email',
      type: 'email',
    },
    {
      name: 'password',
      type: 'password',
    },
    {
      name: 'confirmingPassword',
      type: 'password',
    },
  ];
  registerForm!: FormGroup<RegisterForm>;
  @Output() emitDataForRegister =
    new EventEmitter<Credentials>();

  constructor() {}

  ngOnInit(): void {
    this.registerForm = new FormGroup({
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
      confirmingPassword: new FormControl('', {
        nonNullable: true,
        validators: [Validators.required],
      }),
    });

    this.registerForm.controls[
      'confirmingPassword'
    ].addValidators(
      comparingPasswordsValidator(
        this.registerForm.controls['password']
      )
    );
  }

  onRegister() {
    const { email, password } =
      this.registerForm.controls;

    const userCredentials: Credentials = {
      email: email.value,
      password: password.value,
    };

    this.registerForm.valid &&
      this.emitDataForRegister.emit(
        userCredentials
      );
  }
}
