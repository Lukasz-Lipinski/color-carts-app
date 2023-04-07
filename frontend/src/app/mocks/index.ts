import { of } from 'rxjs';
import { Product } from '../pages/cart/cart.service';
import {
  FormControl,
  Validators,
} from '@angular/forms';

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
