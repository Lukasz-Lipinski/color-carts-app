import {
  ComponentFixture,
  TestBed,
} from '@angular/core/testing';
import { SearcherComponent } from './searcher.component';
import { ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

describe('Testing Searcher Component', () => {
  let fixture: ComponentFixture<SearcherComponent>;
  let component: SearcherComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SearcherComponent],
      imports: [ReactiveFormsModule],
    }).compileComponents();

    fixture = TestBed.createComponent(
      SearcherComponent
    );
    component = fixture.componentInstance;

    component.ngOnInit();
    fixture.detectChanges();
  });

  describe('Class tests', () => {
    it('Should emit value if form is valid', () => {
      const spyOnEmitter = spyOn(
        component.emitParametersForSearcher,
        'emit'
      );

      expect(
        component.searcherForm.valid
      ).toBeFalse();
      expect(spyOnEmitter).not.toHaveBeenCalled();

      component.searcherForm.controls[
        'searcher'
      ].setValue('test');
      component.searcherForm.controls[
        'searcher'
      ].markAsDirty();
      component.searcherForm.controls[
        'searcher'
      ].markAsTouched();
      fixture.detectChanges();

      component.onSubmit();

      expect(
        component.searcherForm.valid
      ).toBeTrue();
      expect(spyOnEmitter).toHaveBeenCalled();
    });
  });

  describe('DOM tests', () => {
    it('Should be rendered', () => {
      expect(component).toBeDefined();
    });

    it('Should display form with exact one input', () => {
      const form = fixture.debugElement.query(
        By.css('form')
      ).nativeElement as HTMLFormElement;

      expect(form).toBeDefined();
      expect(
        form.querySelector('input')
      ).toBeDefined();
    });
  });
});
