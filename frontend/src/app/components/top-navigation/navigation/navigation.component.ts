import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
} from '@angular/core';

interface CategoryLink {
  label: string;
  subcategory?: string[];
}

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavigationComponent
  implements OnInit
{
  readonly links: CategoryLink[] = [
    {
      label: 'Special offers',
    },
    {
      label: 'garden',
      subcategory: [
        'ladders',
        'gardening tools',
        'saws and chainsaws',
      ],
    },
    {
      label: 'home',
      subcategory: [
        'furniture',
        'lamps',
        'heating',
      ],
    },
    {
      label: 'accessories for food ',
      subcategory: [
        'lunch boxes',
        'bags for food',
        'bags for frozen food',
      ],
    },
  ];
  subcategory = {
    index: 0,
  };

  constructor() {}

  ngOnInit(): void {}

  onSetSubcategory(index: number) {
    this.subcategory = {
      index,
    };
  }
}
