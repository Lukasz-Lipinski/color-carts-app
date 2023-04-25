import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-random-category[categories]',
  templateUrl: './random-category.component.html',
  styleUrls: ['./random-category.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RandomCategoryComponent
  implements OnInit
{
  slideNumber = 0;
  @Input() categories!: string[];

  constructor() {}

  ngOnInit(): void {}

  onChangeSlide(action: 'increase' | 'decrease') {
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
  }
}
