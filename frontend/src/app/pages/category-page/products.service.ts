import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Product } from '../cart/cart.service';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private url =
    environment.BACKEND_API + '/products';

  constructor(
    private readonly http: HttpClient
  ) {}

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.url);
  }

  getBestsellers(): Observable<Product[]> {
    return this.http.get<Product[]>(
      this.url + '/bestsellers'
    );
  }
}
