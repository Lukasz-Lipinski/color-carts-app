import { Component, OnInit } from '@angular/core';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

@Component({
  selector: 'app-category-page',
  templateUrl: './category-page.component.html',
  styleUrls: ['./category-page.component.scss'],
  standalone: true,
  imports: [SharedModule],
})
export class CategoryPageComponent
  implements OnInit
{
  constructor() {}

  ngOnInit(): void {}
}
