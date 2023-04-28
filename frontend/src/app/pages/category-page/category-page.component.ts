import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
} from '@angular/core';
import {
  ActivatedRoute,
  Params,
} from '@angular/router';
import {
  Observable,
  concat,
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
  bestsellers!: Observable<Product[] | null>;
  constructor(
    private readonly activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.bestsellers =
      this.activatedRoute.params.pipe(
        concatMap((params: Params) => {
          return params['category'] ===
            'bestsellers'
            ? this.activatedRoute.data.pipe(
                map(
                  ({ bestsellers }) => bestsellers
                )
              )
            : of(null);
        })
      );
  }
}
