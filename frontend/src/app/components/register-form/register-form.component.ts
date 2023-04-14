import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  OnInit,
  Output,
} from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  FormGroupName,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import {
  Control,
  Credentials,
} from '../login-form/login-form.component';
import { of } from 'rxjs';

interface Approval {
  text: string;
  name: string;
}

interface ApprovalGroup {
  shopPolicy: FormControl<boolean>;
  privacyPolicy: FormControl<boolean>;
}

interface RegisterForm {
  email: FormControl<string>;
  password: FormControl<string>;
  confirmingPassword: FormControl<string>;
  approvals: FormGroup<ApprovalGroup>;
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
          notEqual: '',
        };
  };
};

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegisterFormComponent
  implements OnInit
{
  readonly approvals: Approval[] = [
    {
      text: 'I confirm I was informed about Color Carts policy and consent it',
      name: 'shopPolicy',
    },
    {
      name: 'privacyPolicy',
      text: 'I confirm I was infomred about privacy policy of Color Carts',
    },
  ];
  readonly controls: Control[] = [
    {
      name: 'email',
      type: 'email',
      label: 'email',
    },
    {
      name: 'password',
      type: 'password',
      label: 'password',
    },
    {
      name: 'confirmingPassword',
      type: 'password',
      label: 'confirm password',
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
      approvals: new FormGroup({
        shopPolicy: new FormControl(false, {
          nonNullable: true,
          validators: [Validators.requiredTrue],
        }),
        privacyPolicy: new FormControl(false, {
          nonNullable: true,
          validators: [Validators.requiredTrue],
        }),
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

  isValidForm(): boolean {
    return this.registerForm.valid;
  }

  isControlValid(
    name: string,
    isApprovalsGroup: boolean = false
  ) {
    const control = isApprovalsGroup
      ? this.registerForm.controls['approvals']
          .controls[name as keyof ApprovalGroup]
      : this.registerForm.controls[
          name as keyof RegisterForm
        ];

    if (
      control.invalid &&
      !control.touched &&
      !control.dirty
    )
      return true;

    return control.valid && control.dirty;
  }

  getControl(controlName: string) {
    return of(
      this.registerForm.controls[
        controlName as keyof RegisterForm
      ]
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
