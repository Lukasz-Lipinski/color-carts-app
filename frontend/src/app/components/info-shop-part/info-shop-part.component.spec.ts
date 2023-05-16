import {
  ComponentFixture,
  TestBed,
} from '@angular/core/testing';
import { InfoShopPartComponent } from './info-shop-part.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { By } from '@angular/platform-browser';
import { PageTitleComponent } from '../page-title/page-title.component';

describe('Testing Info Shop Part Component', () => {
  let fixture: ComponentFixture<InfoShopPartComponent>;
  let component: InfoShopPartComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        InfoShopPartComponent,
        PageTitleComponent,
      ],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(
      InfoShopPartComponent
    );
    component = fixture.componentInstance;

    component.ngOnInit();
    fixture.detectChanges();
  });

  describe('Class Tests', () => {
    it("Should returned title as 'Wide range'", () => {
      expect(component.getTitle).toEqual(
        'Wide range'
      );
    });

    it('Should returned imgsrc including assets and img name', () => {
      expect(component.getImgSrc).toContain(
        'assets'
      );
      expect(component.getImgSrc).toContain(
        'shippingIcon.jpg'
      );
    });
  });

  describe('DOM Tests', () => {
    it('Should be rendered', () => {
      expect(component).toBeTruthy();
    });

    it('Should had section with container-fluid class', () => {
      const section = fixture.debugElement.query(
        By.css('section')
      ).nativeElement as HTMLElement;

      expect(section).toBeTruthy();
      expect(section.className).toEqual(
        'container-fluid'
      );
    });

    it('Should rendered page title component', () => {
      const pageTitleComponent =
        fixture.debugElement.query(
          By.directive(PageTitleComponent)
        ).nativeElement;

      expect(pageTitleComponent).toBeTruthy();
    });

    it('Should rendered div with row class', () => {
      const div = fixture.debugElement.query(
        By.css('div.row')
      ).nativeElement as HTMLDivElement;
      const colDivs =
        div.querySelectorAll('div.col-6');

      expect(div).toBeTruthy();
      expect(div.className).toEqual(
        'row bg-light p-5'
      );
      expect(colDivs.length).toEqual(2);
    });

    it('Should rendered 2 divs with headers and paragraphs', () => {
      const divs = fixture.debugElement.queryAll(
        By.css('div.py-2')
      );

      const deliveryInfo =
        component.getDeliveryInfo;

      expect(divs.length).toEqual(2);

      for (let index in divs) {
        const paragraph = (
          divs[index]
            .nativeElement as HTMLDivElement
        ).querySelector('p');
        const header = (
          divs[index]
            .nativeElement as HTMLDivElement
        ).querySelector('h3');

        expect(paragraph).toBeTruthy();
        expect(
          paragraph?.textContent
            ?.trim()
            .toLowerCase()
        ).toEqual(
          deliveryInfo[index].paragraph
            .trim()
            .toLowerCase()
        );
        expect(header).toBeTruthy();
        expect(
          header?.textContent
            ?.trim()
            .toLowerCase()
        ).toEqual(
          deliveryInfo[index].header
            .trim()
            .toLowerCase()
        );
      }
    });

    it('Should rendered img', () => {
      const img = fixture.debugElement.query(
        By.css('img')
      ).nativeElement as HTMLImageElement;

      expect(img).toBeTruthy();
      expect(img.className).toEqual(
        'img-fluid opacity'
      );
      expect(img.src).toContain(
        component.getImgSrc
      );
    });
  });
});
