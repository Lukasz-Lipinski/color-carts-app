import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, map } from 'rxjs';
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
        map(({ products }) =>
          (products['data'] as Product[]).length
            ? products['data']
            : null
        )
      );
  }
}
