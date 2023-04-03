import { Injectable } from '@angular/core';
import {
  Observable,
  BehaviorSubject,
  map,
  of,
} from 'rxjs';

export interface Product {
  _id: string;
  id: string;
  name: string;
  brand: string;
  ean: number;
  price: number;
  amount: number;
  category: string;
  subcategory: string;
  description: string;
  model: string;
}

@Injectable({
  providedIn: 'root',
})
export class CartService {
  products$: Observable<Product[]> =
    new BehaviorSubject<Product[]>([]);

  constructor() {}

  getPrice(): Observable<number> {
    return this.products$.pipe(
      map((products) =>
        products.length
          ? products
              .map((product) => product.price)
              .reduce(
                (prevVal, nextVal) =>
                  prevVal + nextVal
              )
          : 80
      )
    );
  }
}
