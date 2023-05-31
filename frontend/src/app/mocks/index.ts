import { of } from 'rxjs';
import { Product } from '../pages/cart/cart.service';
import {
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Credentials } from '../components/login-form/login-form.component';
import { ButtonLink } from '../components/button-link/button-link.component';
import {
  BackendError,
  BackendResponse,
} from '../components/auth/auth.service';
import {
  ApprovalGroup,
  RegisterForm,
} from '../components/register-form/register-form.component';

export const mockedUrl =
  'http://localhost:5000/api';

export const mockedProducts: Product[] = [
  {
    _id: 'id-1',
    amount: 1,
    brand: 'productBrand-1',
    category: 'cat-product-1',
    subcategory: 'subcat-product-1',
    description: 'product-sub-desc',
    ean: 12342345,
    id: 'id-1',
    model: 'model-product-1',
    name: 'product 1',
    price: 4,
  },
  {
    _id: 'id-2',
    amount: 2,
    brand: 'productBrand-2',
    category: 'cat-product-2',
    subcategory: 'subcat-product-2',
    description: 'product-sub-desc',
    ean: 6543234,
    id: 'id-2',
    model: 'model-product-2',
    name: 'product 2',
    price: 23,
  },
];

export const mockedInputStream$ = of(
  new FormControl('mocked input stream', [
    Validators.required,
  ])
);

export const wrongMockedInputStream$ = of(
  new FormControl('', [Validators.required])
);

export const mockedInput = new FormControl(
  'mocked input',
  [Validators.required]
);

export const wrongMockedInput = new FormControl(
  '',
  [Validators.required]
);

export function setAllControls(form: FormGroup) {
  for (let controlName in form.controls) {
    form.controls[
      controlName as keyof RegisterForm
    ] instanceof FormControl &&
      form.controls[controlName].setValue(
        'test@test.com'
      );
    form.controls[controlName].markAsDirty();
    form.controls[controlName].markAsTouched();
  }
}

export function setAllControlsInInnerFormGroup(
  form: FormGroup
) {
  const innerFormGroup = form.controls[
    'approvals'
  ] as FormGroup<ApprovalGroup>;

  for (let approval in innerFormGroup.controls) {
    innerFormGroup.controls[
      approval as keyof ApprovalGroup
    ].setValue(true);

    innerFormGroup.controls[
      approval as keyof ApprovalGroup
    ].markAsDirty();

    innerFormGroup.controls[
      approval as keyof ApprovalGroup
    ].markAsTouched();
  }
}

export const mockedUserCredentials: Credentials =
  {
    email: 'test@test.com',
    password: 'testest',
  };

export const mockedResponse: BackendResponse = {
  data: {
    email: 'test@test.com',
    isLogged: true,
    name: 'test',
    surname: 'test',
  },
};

export const mockedError: BackendError = {
  msg: 'something went wrong',
};

export const mockedButtonLink: ButtonLink = {
  href: 'mocked link',
  isFullRow: false,
  text: '',
};

export const mockedCategories: Array<string> = [
  'test 1',
  'test 2',
  'test 3',
];
