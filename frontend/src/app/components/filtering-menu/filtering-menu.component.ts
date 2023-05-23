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
      minPrice: new FormControl('0', {
        nonNullable: true,
        validators: [
          checkIfNumber,
          Validators.min(0),
        ],
      }),
      maxPrice: new FormControl('0', {
        nonNullable: true,
        validators: [
          checkIfNumber,
          Validators.max(Number.MAX_VALUE),
        ],
      }),
    });
  }

  onClearFilter() {
    this.menuForm.reset();
    this.filterEmitter.emit();
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

  checkIfMinPriceIsGreater() {
    return (
      this.getMenuForm.controls['maxPrice']
        .value <=
      this.getMenuForm.controls['minPrice'].value
    );
  }

  public get isDisabled() {
    return (
      this.checkIfMinPriceIsGreater() &&
      this.menuForm.invalid
    );
  }
}
