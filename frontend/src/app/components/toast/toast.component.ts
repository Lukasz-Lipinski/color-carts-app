import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ToastComponent
  implements OnInit, OnDestroy
{
  @Input() description?: string;
  @Input() title?: string;
  @Output() closeEmitter =
    new EventEmitter<void>();

  private timer!: NodeJS.Timeout;

  constructor() {}

  ngOnInit(): void {
    this.timer = setTimeout(() => {
      this.onClose();
    }, 3000);
  }

  onClose() {
    this.closeEmitter.emit();
  }

  ngOnDestroy() {
    clearTimeout(this.timer);
  }
}
