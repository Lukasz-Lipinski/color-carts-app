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
  private description!: {
    value: string;
    isHidden: boolean;
  };
  get getDescription() {
    return this.description;
  }

  setDescription() {
    if (
      this.item.description.length <
      this.descriptionLength
    )
      this.description = {
        value: this.item.description,
        isHidden: false,
      };
    else
      this.description = {
        value:
          this.item.description.substring(
            0,
            this.descriptionLength
          ) + '...',
        isHidden: true,
      };
  }

  constructor() {}

  ngOnInit(): void {
    this.setDescription();
  }

  showRoller() {
    return (
      this.item.description.length >
      this.descriptionLength
    );
  }

  onRolloutRollinDetails() {
    if (this.description.isHidden) {
      this.description = {
        value: this.item.description,
        isHidden: false,
      };
    } else {
      this.setDescription();
    }
  }
}
