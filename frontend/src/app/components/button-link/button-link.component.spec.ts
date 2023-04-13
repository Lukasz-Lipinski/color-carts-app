import {
  ComponentFixture,
  TestBed,
} from '@angular/core/testing';

import { ButtonLinkComponent } from './button-link.component';
import { mockedButtonLink } from 'src/app/mocks';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';

describe('ButtonLinkComponent', () => {
  let component: ButtonLinkComponent;
  let fixture: ComponentFixture<ButtonLinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ButtonLinkComponent],
      imports: [RouterTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(
      ButtonLinkComponent
    );
    component = fixture.componentInstance;

    component.buttonDetails = mockedButtonLink;
    component.ngOnInit();
  });

  describe('Class tests', () => {
    it('Should obtained a object with configuration', () => {
      expect(
        component.buttonDetails
      ).toBeTruthy();

      expect(
        component.buttonDetails
      ).toBeDefined();
    });
  });

  describe('DOM tests', () => {
    it('Should be rendered', () => {
      expect(component).toBeDefined();
      expect(component).toBeTruthy();
    });

    it('Should displayed link', () => {
      fixture.detectChanges();

      const link = fixture.debugElement.query(
        By.css('a')
      ).nativeElement as HTMLLinkElement;

      expect(link).toBeTruthy();
      expect(
        link.textContent!.trim().toLowerCase()
      ).toEqual(component.buttonDetails.text);

      expect(
        link
          .getAttribute('ng-reflect-router-link')
          ?.trim()
          .toLowerCase()
      ).toEqual(component.buttonDetails.href);
    });
  });
});
