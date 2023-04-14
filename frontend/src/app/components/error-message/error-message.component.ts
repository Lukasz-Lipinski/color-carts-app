import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-error-message',
  templateUrl: './error-message.component.html',
  styleUrls: ['./error-message.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ErrorMessageComponent
  implements OnInit
{
  @Input() control$!: Observable<AbstractControl>;

  constructor() {}

  ngOnInit(): void {}

  setErrorMsg(control: AbstractControl) {
    switch (
      Object.keys(control.errors || '')[0]
    ) {
      case 'required':
        return 'This field is required';
      case 'email':
        return 'Email is incorrect';
      case 'minlength':
        return 'Password must be contained at least 5 characters';
      case 'notEqual':
        return 'Passwords differ themself';
      default:
        return '';
    }
  }
}
