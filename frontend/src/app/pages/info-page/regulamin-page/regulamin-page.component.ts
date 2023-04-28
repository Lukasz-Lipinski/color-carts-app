import { Component, OnInit } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';

@Component({
  selector: 'app-regulamin-page',
  templateUrl: './regulamin-page.component.html',
  styleUrls: ['./regulamin-page.component.scss'],
  standalone: true,
  imports: [SharedModule],
})
export class RegulaminPageComponent
  implements OnInit
{
  constructor() {}

  ngOnInit(): void {}
}
