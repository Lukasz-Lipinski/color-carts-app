import { Component, OnInit } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
  standalone: true,
  imports: [SharedModule],
})
export class LoginPageComponent
  implements OnInit
{
  readonly benefits = [
    'Order status overview',
    'Order history overview',
    'Lack of needs to save delivery data for incoming shipment',
    'Possibility to get discounts',
  ];
  constructor() {}

  ngOnInit(): void {}
}
