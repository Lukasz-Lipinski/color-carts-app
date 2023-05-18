import {
  Injectable,
  inject,
} from '@angular/core';
import {
  Router,
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
  ActivatedRoute,
  Params,
} from '@angular/router';
import {
  Observable,
  concat,
  concatMap,
  map,
  of,
  switchMap,
} from 'rxjs';
import { ProductsService } from '../category-page/products.service';
import { Product } from '../cart/cart.service';
import { RouterTestingModule } from '@angular/router/testing';

@Injectable({
  providedIn: 'root',
})
export class HomePageResolver
  implements Resolve<Observable<Product[]>>
{
  constructor(
    private readonly productsService: ProductsService,
    private readonly activatedRouteService: ActivatedRoute
  ) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Product[]> {
    return this.activatedRouteService.params.pipe(
      concatMap(() => {
        const subcategory =
          route.params['subcategory'];
        const category = route.params['category'];

        if (subcategory && category) {
          return this.productsService.getProductsByCategoryAndSubcategory(
            category,
            subcategory
          );
        } else {
          return this.productsService.getProductsByCategory(
            category
          );
        }
      })
    );
  }
}
