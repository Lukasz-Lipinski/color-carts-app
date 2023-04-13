import {
  ComponentFixture,
  TestBed,
  tick,
} from '@angular/core/testing';
import { LoginFormComponent } from './login-form.component';
import { By } from '@angular/platform-browser';
import {
  NO_ERRORS_SCHEMA,
  NgZone,
} from '@angular/core';
import { setAllControls } from 'src/app/mocks';

describe('Testing Login Form Component', () => {
  let fixture: ComponentFixture<LoginFormComponent>;
  let component: LoginFormComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginFormComponent],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(
      LoginFormComponent
    );
    component = fixture.componentInstance;

    component.ngOnInit();
  });

  describe('Class Tests', () => {
    it('Should initialized form', () => {
      expect(component.loginForm).toBeDefined();

      for (let controlName in component.loginForm
        .controls) {
        expect(
          component.loginForm.controls[
            controlName
          ].value
        ).toBeFalsy();
      }
    });

    it('Should return boolean depending on form validation', () => {
      expect(component.disable()).toBeTrue();

      setAllControls(component.loginForm);

      expect(component.disable()).toBeFalse();
    });

    it('Should emit value if submit event was invoked', (dn: DoneFn) => {
      setAllControls(component.loginForm);
      const spyOnSubmitEmitter = spyOn(
        component.submitEmitter,
        'next'
      );
      component.onSubmit();
      dn();

      expect(
        spyOnSubmitEmitter
      ).toHaveBeenCalled();
    });

    it('Should set control accordingly to directly-passed name', (dn: DoneFn) => {
      component.setControl('email').subscribe({
        next: (control) => {
          expect(control.invalid).toBeTrue();
          expect(control).toBeDefined();
          dn();
        },
      });
    });
  });

  describe('DOM Tests', () => {
    it('Should be rendered', () => {
      expect(component).toBeDefined();
    });

    it('Should initialized form element', () => {
      const form = fixture.debugElement.query(
        By.css('form')
      ).nativeElement as HTMLFormElement;

      expect(form).not.toBeNull();
    });

    it("Should displayed header with 'Sign in' text", () => {
      const header = fixture.debugElement.query(
        By.css('h3')
      ).nativeElement as HTMLHeadingElement;

      expect(
        header.textContent?.trim()?.toLowerCase()
      ).toEqual('sign in');
    });

    it('Should map entirly-passed controls', () => {
      fixture.detectChanges();

      const divs = fixture.debugElement.queryAll(
        By.css('div')
      );

      expect(divs.length).toEqual(
        component.controls.length
      );

      let label: HTMLLabelElement;
      let input: HTMLInputElement;

      for (let index in component.controls) {
        label = divs[index].query(By.css('label'))
          .nativeElement as HTMLLabelElement;
        input = divs[index].query(By.css('input'))
          .nativeElement as HTMLInputElement;

        expect(
          component.controls[index].name
            .trim()
            .toLowerCase()
        ).toEqual(
          label.textContent!.trim()?.toLowerCase()
        );

        expect(
          component.controls[index].type
            .trim()
            .toLowerCase()
        ).toEqual(
          input.type?.trim()?.toLowerCase()
        );
      }
    });

    it('Should rendered button and disabled it if form is invalid', () => {
      let button = fixture.debugElement.query(
        By.css('button')
      ).nativeElement as HTMLButtonElement;

      button.disabled = component.disable();
      fixture.detectChanges();

      expect(button.type).toEqual('submit');
      expect(button.disabled).toBeTrue();
      expect(
        button.textContent?.trim().toLowerCase()
      ).toEqual('login');
      expect(
        button.classList.value.toLowerCase()
      ).toContain('btn-outline-danger');
    });
  });
});
