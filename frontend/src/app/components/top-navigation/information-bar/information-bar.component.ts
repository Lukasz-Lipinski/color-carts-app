import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
} from '@angular/core';
import { Observable, map, of } from 'rxjs';
import { CartService } from 'src/app/pages/cart/cart.service';

interface Icon {
  label: string;
  img: string;
  isLink: boolean;
  href?: string;
}

@Component({
  selector: 'app-information-bar',
  templateUrl: './information-bar.component.html',
  styleUrls: ['./information-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InformationBarComponent
  implements OnInit
{
  price$!: Observable<number>;
  private icons: Array<Icon> = [
    {
      img: 'bi-phone',
      label: '111-111-111',
      isLink: false,
    },
    {
      img: 'bi-instagram',
      label: 'Instagram',
      isLink: true,
      href: 'https://www.instagram.com/',
    },
    {
      img: 'bi-facebook',
      label: 'Facebook',
      isLink: true,
      href: 'https://www.facebook.com',
    },
  ];

  constructor(private carService: CartService) {}

  ngOnInit(): void {
    this.price$ = this.carService.getPrice();
  }

  getIcons() {
    return this.icons;
  }
}
