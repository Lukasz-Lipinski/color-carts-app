import { Component, OnInit } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';

@Component({
  selector: 'app-policy-page',
  templateUrl: './policy-page.component.html',
  styleUrls: ['./policy-page.component.scss'],
  standalone: true,
  imports: [SharedModule],
})
export class PolicyPageComponent
  implements OnInit
{
  constructor() {}

  ngOnInit(): void {}
}
