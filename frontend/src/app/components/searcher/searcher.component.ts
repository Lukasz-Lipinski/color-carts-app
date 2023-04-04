import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  OnInit,
  Output,
} from '@angular/core';
import {
  FormControl,
  FormGroup,
  NonNullableFormBuilder,
  Validators,
} from '@angular/forms';

interface SearcherFormProps {
  searcher: FormControl<string>;
}

@Component({
  selector: 'app-searcher',
  templateUrl: './searcher.component.html',
  styleUrls: ['./searcher.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearcherComponent implements OnInit {
  @Output() emitParametersForSearcher =
    new EventEmitter<string>();
  searcherForm!: FormGroup<SearcherFormProps>;

  constructor() {}

  ngOnInit(): void {
    this.searcherForm = new FormGroup({
      searcher: new FormControl('', {
        nonNullable: true,
        validators: [Validators.required],
      }),
    });
  }

  onSubmit() {
    this.searcherForm.valid &&
      this.emitParametersForSearcher.emit(
        this.searcherForm.controls['searcher']
          .value
      );
  }
}
