import {
  ComponentFixture,
  TestBed,
} from '@angular/core/testing';
import {
  FooterColumn,
  FooterComponent,
  FooterLink,
} from './footer.component';
import {
  ComponentFactoryResolver,
  DebugElement,
  NO_ERRORS_SCHEMA,
} from '@angular/core';
import { By } from '@angular/platform-browser';
import { LogoComponent } from '../logo/logo.component';

describe('Testing Footer Component', () => {
  let fixture: ComponentFixture<FooterComponent>;
  let component: FooterComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        FooterComponent,
        LogoComponent,
      ],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(
      FooterComponent
    );
    component = fixture.componentInstance;

    component.ngOnInit();
    fixture.detectChanges();
  });

  describe('Class Tests', () => {
    it('Should returned footerColumns', () => {
      for (
        let i = 0;
        i < component.footerColumns.length;
        i++
      ) {
        expect(
          component.footerColumns[i].header
        ).toBeTruthy();
        expect(
          typeof component.footerColumns[i].header
        ).toEqual('string');

        for (
          let j = 0;
          j <
          component.footerColumns[i].links.length;
          j++
        ) {
          expect(
            component.footerColumns[i].links[j]
              .href
          ).toBeTruthy();
          expect(
            typeof component.footerColumns[i]
              .links[j].href
          ).toEqual('string');

          expect(
            component.footerColumns[i].links[j]
              .label
          ).toBeTruthy();
          expect(
            typeof component.footerColumns[i]
              .links[j].label
          ).toEqual('string');
        }
      }
    });
  });

  describe('DOM Tests', () => {
    it('Should be rendered', () => {
      expect(component).toBeTruthy();
    });

    it("Should displayed apropriate footer's classes", () => {
      const footer = fixture.debugElement.query(
        By.css('footer')
      ).nativeElement as HTMLElement;
      const classes =
        'd-flex justify-content-between p-4 pt-2 bg-light';
      expect(footer.className).toEqual(classes);
    });

    it('Should displayed section tag with classes', () => {
      const section = fixture.debugElement.query(
        By.css('section')
      ).nativeElement as HTMLElement;
      const classes = 'd-flex gap-5';

      expect(section).toBeTruthy();
      expect(section.className).toEqual(classes);
    });

    it('Should displayed header with apropriate text', () => {
      const headers: string[] = [];

      for (let header of component.footerColumns) {
        headers.push(header.header);
      }

      const h5 = fixture.debugElement.queryAll(
        By.css('h5')
      );

      expect(h5.length).toBeTruthy();

      for (let i = 0; i < h5.length; i++) {
        const hTagText = (
          h5[i]
            .nativeElement as HTMLHeadingElement
        ).textContent?.trim();
        expect(hTagText).toEqual(
          component.footerColumns[i].header
        );
      }
    });

    it('Should displayed links accordingly to footerColumns', () => {
      const getLinks = (
        i: number
      ): FooterLink[] =>
        component.footerColumns[i].links;
      const findLinkOnDOM = (
        label: string
      ): DebugElement =>
        fixture.debugElement
          .queryAll(By.css('a'))
          .find(
            (link) =>
              (
                link.nativeElement as HTMLLinkElement
              ).textContent?.trim() === label
          )!;

      for (
        let i = 0;
        i < component.footerColumns.length;
        i++
      ) {
        const links = getLinks(i);

        for (let j = 0; j < links.length; j++) {
          const link = findLinkOnDOM(
            links[j].label
          ).nativeElement as HTMLLinkElement;
          console.log(
            '🚀 ~ file: footer.component.spec.ts:158 ~ it ~ link:',
            link
          );
          const classes =
            'd-block py-1 text-dark';

          expect(link).toBeTruthy();
          expect(link.className).toEqual(classes);
          expect(
            link.textContent?.trim()
          ).toEqual(links[j].label);
        }
      }
    });
  });
});
