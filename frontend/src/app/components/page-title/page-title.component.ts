import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-page-title[pageTitle]',
  templateUrl: './page-title.component.html',
  styleUrls: ['./page-title.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PageTitleComponent
  implements OnInit
{
  @Input() pageTitle!: string;
  constructor() {}

  ngOnInit(): void {}
}
