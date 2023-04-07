import {
  ComponentFixture,
  TestBed,
} from '@angular/core/testing';
import { ErrorMessageComponent } from './error-message.component';
import {
  mockedInput,
  mockedInputStream$,
} from 'src/app/mocks';
import { By } from '@angular/platform-browser';

describe('Testing Error Message Component', () => {
  let fixture: ComponentFixture<ErrorMessageComponent>;
  let component: ErrorMessageComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ErrorMessageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(
      ErrorMessageComponent
    );
    component = fixture.componentInstance;

    component.ngOnInit();
  });

  describe('Class tests', () => {
    it('Should be obtained stream with abstract control', (dn: DoneFn) => {
      component.control$ = mockedInputStream$;

      component.control$.subscribe({
        next: (control) => {
          control.setValue('mocked input stream');

          expect(control).toBeTruthy();
          expect(
            (control.value as string)
              .trim()
              .toLowerCase()
          ).toEqual('mocked input stream');
          dn();
        },
      });
    });

    it('Should set message dependently on control error', () => {
      mockedInput.markAsTouched();
      mockedInput.markAsDirty();
      mockedInput.setValue('');

      fixture.detectChanges();

      expect(
        component
          .setErrorMsg(mockedInput)
          .trim()
          .toLowerCase()
      ).toEqual(
        'This field is required'.toLowerCase()
      );

      mockedInput.setValue('test');
      fixture.detectChanges();
      expect(
        component.setErrorMsg(mockedInput)
      ).toBeFalsy();
    });
  });

  describe('DOM tests', () => {
    it('Should be rendered', () => {
      expect(component).toBeDefined();
    });

    it('Should displayed an error when error was appeared and control was dirty', (dn: DoneFn) => {
      component.control$ = mockedInputStream$;

      component.control$.subscribe({
        next: (control) => {
          control.setValue('');
          control.markAsDirty();

          fixture.detectChanges();
          const error =
            fixture.debugElement.query(
              By.css('div')
            ).nativeElement as HTMLDivElement;

          expect(error).toBeTruthy();
          expect(
            error
              .querySelector('span')
              ?.textContent?.trim()
              .toLowerCase()
          ).toEqual(
            component
              .setErrorMsg(control)
              .trim()
              .toLowerCase()
          );
          dn();
        },
      });
    });
  });
});
