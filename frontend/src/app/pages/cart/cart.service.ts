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
  private products: Product[] = [];
  products$ = new BehaviorSubject<Product[]>([]);

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
  addProductToCart(product: Product) {
    const index = this.products.findIndex(
      (p) => p.id === product.id
    );

    if (this.checkIfProductExsists(product)) {
      this.products[index].amount += 1;
    } else {
      this.products.push(product);
    }

    this.products$.next(this.products);
  }
  RemoveProductFromCart(product: Product) {
    if (this.checkIfProductExsists(product)) {
      this.products = this.products.filter(
        (p) => p.id !== product.id
      );
      this.products$.next(this.products);
    }
  }

  private checkIfProductExsists({
    id,
  }: Product): Product | undefined {
    return this.products.find((p) => p.id === id);
  }
}
