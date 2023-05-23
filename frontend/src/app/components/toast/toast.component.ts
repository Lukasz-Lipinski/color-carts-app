import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ToastComponent implements OnInit {
  @Input() description?: string;
  @Input() isShown: boolean = true;

  constructor() {}

  ngOnInit(): void {}

  onClose() {
    this.isShown = false;
  }
}
