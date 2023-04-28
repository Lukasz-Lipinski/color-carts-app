import {
  Component,
  Input,
  OnInit,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss'],
})
export class LogoComponent implements OnInit {
  @Input() size: 'lg' | 'md' | 'sm' = 'md';
  constructor() {}

  ngOnInit(): void {}
}
