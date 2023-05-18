import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
} from '@angular/core';
import {
  ActivatedRoute,
  ParamMap,
  Params,
} from '@angular/router';
import {
  Observable,
  concatMap,
  map,
  of,
} from 'rxjs';
import { SharedModule } from 'src/app/shared/shared.module';
import { Product } from '../cart/cart.service';

@Component({
  selector: 'app-category-page',
  templateUrl: './category-page.component.html',
  styleUrls: ['./category-page.component.scss'],
  standalone: true,
  imports: [SharedModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CategoryPageComponent
  implements OnInit
{
  products!: Observable<Product[] | null>;
  title!: Observable<string>;

  constructor(
    private readonly activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.products = this.activatedRoute.data.pipe(
      map(({ products }) =>
        (products['data'] as Product[]).length
          ? (products['data'] as Product[])
          : null
      )
    );

    this.title =
      this.activatedRoute.paramMap.pipe(
        map(
          (param: ParamMap) =>
            param.get('category') || ''
        )
      );
  }
}
