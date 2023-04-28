import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { Product } from 'src/app/pages/cart/cart.service';

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
  constructor() {}

  ngOnInit(): void {}
}
