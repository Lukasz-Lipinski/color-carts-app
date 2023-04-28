import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import {
  Observable,
  combineLatest,
  concatMap,
  map,
  of,
  switchMap,
} from 'rxjs';
import { SharedModule } from 'src/app/shared/shared.module';
import { Product } from '../cart/cart.service';
import {
  ActivatedRoute,
  NavigationCancel,
  NavigationEnd,
  NavigationError,
  NavigationStart,
  Router,
} from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
  standalone: true,
  imports: [SharedModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePageComponent implements OnInit {
  // bestsellers!: Observable<Product[]>;
  readonly categories: string[] = [
    'garden',
    'home',
    'accessories for food',
  ];

  constructor(
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // this.bestsellers =
    //   this.activatedRoute.data.pipe(
    //     map(({ bestsellers }) => bestsellers)
    //   );
  }
}
