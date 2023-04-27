import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  OnDestroy,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-random-category[categories]',
  templateUrl: './random-category.component.html',
  styleUrls: ['./random-category.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RandomCategoryComponent
  implements OnInit, OnDestroy
{
  slideNumber = 0;
  @Input() categories!: string[];
  timer: any;

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.setTimer();
  }

  setTimer() {
    this.timer = setInterval(() => {
      this.onChangeSlide('increase');
      this.cdr.markForCheck();
    }, 4000);
  }

  onChangeSlide(action: 'increase' | 'decrease') {
    clearInterval(this.timer);

    if (action === 'increase') {
      this.slideNumber <
      this.categories.length - 1
        ? ++this.slideNumber
        : (this.slideNumber = 0);
    } else if (action === 'decrease') {
      this.slideNumber > 0
        ? --this.slideNumber
        : (this.slideNumber =
            this.categories.length - 1);
    }
    this.setTimer();
  }

  ngOnDestroy() {
    clearInterval(this.timer);
  }
}
