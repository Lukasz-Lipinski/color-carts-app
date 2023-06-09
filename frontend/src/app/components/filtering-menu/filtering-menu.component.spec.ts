import {
  ComponentFixture,
  TestBed,
} from '@angular/core/testing';
import {
  FilteringMenuComponent,
  MenuFormGroup,
} from './filtering-menu.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { By } from '@angular/platform-browser';

describe('Testing Filtering Menu Component', () => {
  let fixture: ComponentFixture<FilteringMenuComponent>;
  let component: FilteringMenuComponent;
  let spyOnOnFilterElement: jasmine.Spy;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FilteringMenuComponent],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(
      FilteringMenuComponent
    );
    component = fixture.componentInstance;

    spyOnOnFilterElement = spyOn(
      component.filterEmitter,
      'emit'
    );

    component.ngOnInit();
    fixture.detectChanges();
  });

  describe('Class Tests', () => {
    it('Should returned initialized menuForm object', () => {
      expect(component.getMenuForm).toBeDefined();
      expect(
        component.getMenuForm
      ).toBeInstanceOf(FormGroup);
    });

    it('Should be being emitted value if onFilterElement function was invoked', () => {
      //set form validation on true
      for (let control in component.getMenuForm
        .controls) {
        component.getMenuForm.controls[
          control as keyof MenuFormGroup
        ].markAsTouched();
        component.getMenuForm.controls[
          control as keyof MenuFormGroup
        ].markAsDirty();
        component.getMenuForm.controls[
          control as keyof MenuFormGroup
        ].setValue('33');
      }

      component.onFilterElement();
      expect(
        spyOnOnFilterElement
      ).toHaveBeenCalled();
    });
  });

  describe('DOM Tests', () => {
    it('Should be rendered', () => {
      expect(component).toBeTruthy();
    });

    it('Should displayed nav element', () => {
      const nav = fixture.debugElement.query(
        By.css('nav')
      ).nativeElement as HTMLElement;

      expect(nav).toBeTruthy();
      expect(nav.className).toEqual(
        'bg-light rounded-3 p-3 fontSize'
      );
    });

    it('Should displayed 2 divs with the same classes including input and paragraph', () => {
      const divs = fixture.debugElement.queryAll(
        By.css('div')
      );

      expect(divs.length).toEqual(2);
      for (let element of divs) {
        const div =
          element.nativeElement as HTMLDivElement;
        const divStyles = 'py-2';
        const p = div.querySelector('p');
        const pClasses = 'text-center fw-bold';
        const input = div.querySelector('input');
        const inputClasses = 'form-control';

        expect(div.className).toEqual(divStyles);
        expect(p).toBeTruthy();
        expect(p?.className).toEqual(pClasses);
        expect(input).toBeTruthy();
        expect(input?.className).toEqual(
          inputClasses
        );
      }
    });

    it('Should displayed button', () => {
      const btn = fixture.debugElement.query(
        By.css('button')
      ).nativeElement as HTMLButtonElement;
      const classes = 'btn btn-outline-danger';

      expect(btn).toBeTruthy();
      expect(btn.className).toEqual(classes);
      expect(btn.textContent?.trim()).toEqual(
        'FILTER'
      );

      const spanClasses = 'bi bi-filter';
      const icon = btn.querySelector('span');
      expect(icon).toBeTruthy();
      expect(icon?.className).toEqual(
        spanClasses
      );
    });
  });
});
