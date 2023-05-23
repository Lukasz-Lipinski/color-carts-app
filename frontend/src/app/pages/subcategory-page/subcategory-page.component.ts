import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, filter, map } from 'rxjs';
import { IPriceEmiiter } from 'src/app/components/filtering-menu/filtering-menu.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { Product } from '../cart/cart.service';

@Component({
  selector: 'app-subcategory-page',
  templateUrl:
    './subcategory-page.component.html',
  styleUrls: [
    './subcategory-page.component.scss',
  ],
  standalone: true,
  imports: [SharedModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SubcategoryPageComponent
  implements OnInit
{
  private productsStream$!: Observable<
    Product[] | null
  >;
  public get products$() {
    return this.productsStream$;
  }

  constructor(
    private readonly activatedRouteService: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.productsStream$ =
      this.activatedRouteService.data.pipe(
        map(({ products }) => {
          return products['data']
            ? products['data']
            : null;
        })
      );
  }

  onSetFilter(parameter: IPriceEmiiter) {
    this.productsStream$ =
      this.activatedRouteService.data.pipe(
        map(({ products }) => {
          const selectedProducts = products[
            'data'
          ] as Product[];

          return parameter
            ? selectedProducts.filter(
                (product) =>
                  product.price >
                    parameter.minPrice &&
                  product.price <
                    parameter.maxPrice
              )
            : selectedProducts;
        })
      );
  }
}
