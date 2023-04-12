import {
  ComponentFixture,
  TestBed,
} from '@angular/core/testing';
import { LoginPageComponent } from './login-page.component';
import { By } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

describe('Testing Login Page', () => {
  let fixture: ComponentFixture<LoginPageComponent>;
  let component: LoginPageComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        LoginPageComponent,
        RouterTestingModule,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(
      LoginPageComponent
    );
    component = fixture.componentInstance;

    component.ngOnInit();
  });

  describe('Class Tests', () => {
    it('Should return benefits array', () => {
      expect(component.benefits.length).toEqual(
        4
      );

      for (let benefit of component.benefits) {
        expect(benefit).toBeTruthy();
      }
    });
  });

  describe('DOM Tests', () => {
    it('Should be rendered', () => {
      expect(component).toBeDefined();
    });

    it('Should displayed HOME PAGE link', () => {
      const homePageLink =
        fixture.debugElement.query(
          By.css('a.link')
        ).nativeElement as HTMLLinkElement;

      expect(
        homePageLink.textContent
          ?.trim()
          .toLowerCase()
      ).toEqual('home page');
    });

    it('Should displayed 2 divs with row class', () => {
      const divs = fixture.debugElement.queryAll(
        By.css('div.row')
      );

      for (let div of divs) {
        expect(div.nativeElement).toHaveClass(
          'row'
        );
        expect(div.nativeElement).toBeTruthy();
      }

      expect(divs.length).toEqual(2);
    });

    it('Should displayed h3 and p with details', () => {
      fixture.detectChanges();

      const h3 = fixture.debugElement
        .queryAll(By.css('h3'))
        .filter(
          (selector) =>
            (
              selector.nativeElement as HTMLHeadingElement
            ).textContent
              ?.trim()
              .toLowerCase() === 'sign up'
        )[0].nativeElement as HTMLHeadingElement;
      const p = fixture.debugElement.query(
        By.css('p.text-center')
      ).nativeElement as HTMLParagraphElement;

      expect(h3).toBeTruthy();
      expect(
        h3.textContent?.trim().toLowerCase()
      ).toEqual('sign up');
      expect(p).toBeTruthy();
      expect(
        p.textContent?.trim().toLowerCase()
      ).toEqual('you will gain extra benefits');
    });

    it('Should displayed list of benefits', () => {
      fixture.detectChanges();
      const ul = fixture.debugElement.query(
        By.css('ul.container')
      ).nativeElement as HTMLUListElement;

      expect(ul).toBeTruthy();
      expect(
        ul.querySelectorAll('li').length
      ).toEqual(component.benefits.length);
    });

    it('Should displayed link', () => {
      fixture.detectChanges();
      const createAccountLink =
        fixture.debugElement.query(
          By.css('a.btn')
        ).nativeElement as HTMLLinkElement;

      expect(createAccountLink).toBeTruthy();
      expect(
        createAccountLink.textContent
          ?.trim()
          ?.toLowerCase()
      ).toEqual('create an account');
      expect(
        createAccountLink.getAttribute(
          'routerLink'
        )
      ).toEqual('register');
    });
  });
});
