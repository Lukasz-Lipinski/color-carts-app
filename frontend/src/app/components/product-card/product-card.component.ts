import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { Product } from 'src/app/pages/cart/cart.service';

export type widthOpiton =
  | 'maxWidth'
  | 'w-50'
  | 'w-100';

@Component({
  selector: 'app-product-card[item]',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductCardComponent
  implements OnInit
{
  @Input() item!: Product;
  @Input() width?: widthOpiton = 'maxWidth';
  @Input() descriptionLength: number = 25;

  public setDescription(): string {
    if (
      this.item.description.length <
      this.descriptionLength
    )
      return this.item.description;
    else
      return (
        this.item.description.substring(
          0,
          this.descriptionLength
        ) + '...'
      );
  }

  constructor() {}

  ngOnInit(): void {}
}
