import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-info-shop-part',
  templateUrl: './info-shop-part.component.html',
  styleUrls: ['./info-shop-part.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InfoShopPartComponent
  implements OnInit
{
  private title = 'Wide range';
  public get getTitle() {
    return this.title;
  }

  private imgsrc = 'assets/shippingIcon.jpg';
  public get getImgSrc() {
    return this.imgsrc;
  }

  private deliveryInfo: {
    header: string;
    paragraph: string;
  }[] = [
    {
      header: 'Online shop with household goods',
      paragraph: `Our online shop has a wide range. There
    are a pleny of products for cleaning up
    and washing. We have also food for
    animals, and garden tools. Make an order
    until 12 pm and a delivery will be
    tomorrow !`,
    },
    {
      header: 'Shop with household goods',
      paragraph: `Our shops have a lot of products. There
    are sorted allayes, that simplify your
    searching to minimum time! We have a
    specialized staff that help you to
    collect the best product accordingly to
    your needs.`,
    },
  ];
  public get getDeliveryInfo() {
    return this.deliveryInfo;
  }
  constructor() {}

  ngOnInit(): void {}
}
