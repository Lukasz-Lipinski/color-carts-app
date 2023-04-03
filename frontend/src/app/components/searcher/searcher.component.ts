import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-searcher',
  templateUrl: './searcher.component.html',
  styleUrls: ['./searcher.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearcherComponent implements OnInit {
  style = {
    selected: false,
  };
  constructor() {}

  ngOnInit(): void {}

  onSelect() {
    this.style = {
      selected: !this.style.selected,
    };
    console.log(this.style);
  }
}
