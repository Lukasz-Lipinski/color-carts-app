import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  OnInit,
  Output,
} from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ValidatorFn,
  Validators,
} from '@angular/forms';

export interface MenuFormGroup {
  minPrice: FormControl<string>;
  maxPrice: FormControl<string>;
}

export interface IPriceEmiiter {
  minPrice: number;
  maxPrice: number;
}

const checkIfNumber: ValidatorFn = (
  control: AbstractControl
) => {
  return parseFloat(control.value)
    ? null
    : {
        error: 'Not a Number',
      };
};

@Component({
  selector: 'app-filtering-menu',
  templateUrl: './filtering-menu.component.html',
  styleUrls: ['./filtering-menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FilteringMenuComponent
  implements OnInit
{
  private menuForm!: FormGroup<MenuFormGroup>;
  public get getMenuForm() {
    return this.menuForm;
  }

  @Output() filterEmitter =
    new EventEmitter<IPriceEmiiter>();

  constructor() {}

  ngOnInit(): void {
    this.menuForm = new FormGroup({
      minPrice: new FormControl('', {
        nonNullable: true,
        validators: [
          checkIfNumber,
          Validators.min(0),
        ],
      }),
      maxPrice: new FormControl('', {
        nonNullable: true,
        validators: [
          checkIfNumber,
          Validators.max(Number.MAX_VALUE),
        ],
      }),
    });
  }

  onFilterElement() {
    const { maxPrice, minPrice } =
      this.menuForm.controls;

    const filterDetails = {
      maxPrice: parseFloat(maxPrice.value),
      minPrice: parseFloat(minPrice.value),
    };

    this.filterEmitter.emit(filterDetails);
  }
}
