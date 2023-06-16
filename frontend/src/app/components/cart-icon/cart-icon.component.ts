import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/pages/cart/cart.service';

@Component({
  selector: 'app-cart-icon',
  templateUrl: './cart-icon.component.html',
  styleUrls: ['./cart-icon.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CartIconComponent implements OnInit {
  @Input() productsAmount!: number;
  constructor() {}

  ngOnInit(): void {}
}
