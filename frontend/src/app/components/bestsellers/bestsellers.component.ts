import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-bestsellers',
  templateUrl: './bestsellers.component.html',
  styleUrls: ['./bestsellers.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BestsellersComponent
  implements OnInit
{
  readonly title = 'Bestsellers';
  constructor() {}

  ngOnInit(): void {}
}
