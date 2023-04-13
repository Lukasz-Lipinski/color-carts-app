import {
  ComponentFixture,
  TestBed,
} from '@angular/core/testing';

import { RegisterFormComponent } from './register-form.component';
import { setAllControls } from 'src/app/mocks';
import { By } from '@angular/platform-browser';
import { NO_ERRORS_SCHEMA } from '@angular/core';

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
  });

  describe('DOM tests', () => {
    it('Should be rendered', () => {
      expect(component).toBeTruthy();
    });

    it('Should displayed divs amount equal to controls number increased by 1', () => {
      fixture.detectChanges();

      const divs = fixture.debugElement.queryAll(
        By.css('div')
      );

      expect(divs.length).toEqual(
        component.controls.length + 1
      );

      for (let index in divs) {
        const label = (
          divs[index]
            .nativeElement as HTMLDivElement
        ).querySelector('label')!;

        if (+index < component.controls.length)
          expect(
            component.controls[index].name
              ?.trim()
              ?.toLowerCase()
          ).toEqual(
            label
              .textContent!.trim()
              .toLowerCase()
          );
        else expect(label).toBeNull();
      }
    });
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
