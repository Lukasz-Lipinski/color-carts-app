import {
  Injectable,
  inject,
} from '@angular/core';
import {
  Router,
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { ProductsService } from '../category-page/products.service';
import { Product } from '../cart/cart.service';

@Injectable({
  providedIn: 'root',
})
export class HomePageResolver
  implements Resolve<Observable<Product[]>>
{
  constructor(
    private readonly productsService: ProductsService
  ) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Product[]> {
    return this.productsService.getBestsellers();
  }
}
