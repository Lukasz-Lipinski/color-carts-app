import { Component, OnInit } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';

@Component({
  selector: 'app-claims-page',
  templateUrl: './claims-page.component.html',
  styleUrls: ['./claims-page.component.scss'],
  standalone: true,
  imports: [SharedModule],
})
export class ClaimsPageComponent
  implements OnInit
{
  constructor() {}

  ngOnInit(): void {}
}
