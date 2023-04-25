import {
  ComponentFixture,
  TestBed,
} from '@angular/core/testing';

import {
  ApprovalGroup,
  RegisterFormComponent,
} from './register-form.component';
import { By } from '@angular/platform-browser';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import {
  setAllControls,
  setAllControlsInInnerFormGroup,
} from 'src/app/mocks';
import { FormControl } from '@angular/forms';

describe('RegisterFormComponent', () => {
  let component: RegisterFormComponent;
  let fixture: ComponentFixture<RegisterFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegisterFormComponent],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(
      RegisterFormComponent
    );
    component = fixture.componentInstance;
    component.ngOnInit();
  });

  describe('Class tests', () => {
    it('Should initialized form', () => {
      expect(
        component.registerForm
      ).toBeDefined();
    });

    it('Should emit value if form is valid', () => {
      const spyOnEmitter = spyOn(
        component.emitDataForRegister,
        'emit'
      );
      component.onRegister();

      expect(
        component.registerForm.valid
      ).toBeFalse();
      expect(spyOnEmitter).not.toHaveBeenCalled();

      setAllControls(component.registerForm);
      setAllControlsInInnerFormGroup(
        component.registerForm
      );
      component.onRegister();

      expect(
        component.registerForm.valid
      ).toBeTruthy();
      expect(spyOnEmitter).toHaveBeenCalled();
    });

    it('Should had implemented controls array', () => {
      expect(component.controls).toBeDefined();
      expect(
        component.controls.length
      ).toBeGreaterThan(0);
    });

    it('Should check validation of form', () => {
      expect(component.isValidForm()).toBeFalse();
      setAllControls(component.registerForm);
      setAllControlsInInnerFormGroup(
        component.registerForm
      );
      expect(component.isValidForm()).toBeTrue();
    });

    it('Should check a control validation', () => {
      const control =
        component.registerForm.controls['email'];

      expect(
        component.isControlValid('email')
      ).toBeTrue();

      //setting wrong data to email control
      control.setValue('test');
      control.markAsDirty();
      control.markAsTouched();

      expect(
        component.isControlValid('email')
      ).toBeFalse();
    });

    it('Should return control', (dn: DoneFn) => {
      component.getControl('email').subscribe({
        next: (control) => {
          expect(control).toBeTruthy();
          (
            control as FormControl<string>
          ).setValue('email');
          expect(
            control.getError('email')
          ).toBeTruthy();
          dn();
        },
      });
    });
  });

  describe('DOM tests', () => {
    it('Should be rendered', () => {
      expect(component).toBeTruthy();
    });

    it('Should displayed labels amount equal to controls number', () => {
      fixture.detectChanges();

      const labels =
        fixture.debugElement.queryAll(
          By.css('label')
        );

      expect(labels.length).toEqual(
        component.controls.length +
          component.approvals.length
      );

      for (let index in labels) {
        const label = labels[index]
          .nativeElement as HTMLLabelElement;

        if (+index < component.controls.length)
          expect(
            component.controls[index].label
              ?.trim()
              ?.toLowerCase()
          ).toEqual(
            label
              .textContent!.trim()
              .toLowerCase()
          );
      }
    });
    it('Should displayed button', () => {
      fixture.detectChanges();
      const btn = fixture.debugElement.query(
        By.css('button')
      ).nativeElement as HTMLButtonElement;

      expect(btn).toBeTruthy();
      expect(
        btn.textContent!.trim().toLowerCase()
      ).toEqual('create an account');
      expect(btn.type).toEqual('submit');
    });

    it('Should triggered onRegister if ngSumit was invoked', () => {
      fixture.detectChanges();

      const spyOnOnRegister = spyOn(
        component,
        'onRegister'
      );

      const form = fixture.debugElement.query(
        By.css('form')
      );

      form.triggerEventHandler('ngSubmit', null);
      expect(spyOnOnRegister).toHaveBeenCalled();
    });
  });
});
