import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
} from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
  standalone: true,
  imports: [SharedModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePageComponent implements OnInit {
  readonly categories: string[] = [
    'garden',
    'home',
    'accessories for food',
  ];

  constructor() {}

  ngOnInit(): void {}
}
