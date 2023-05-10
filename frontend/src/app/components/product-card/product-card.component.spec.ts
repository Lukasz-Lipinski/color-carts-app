import {
  ComponentFixture,
  TestBed,
} from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { By } from '@angular/platform-browser';

import { ProductCardComponent } from './product-card.component';
import { mockedProducts } from 'src/app/mocks';
import { LogoComponent } from '../logo/logo.component';

describe('ProductCardComponent', () => {
  let component: ProductCardComponent;
  let fixture: ComponentFixture<ProductCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductCardComponent],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(
      ProductCardComponent
    );
    component = fixture.componentInstance;
    component.item = mockedProducts[0];
    component.ngOnInit();
  });

  describe('Class tests', () => {
    it('Should obtained item as props', () => {
      expect(component.item).toBe(
        mockedProducts[0]
      );
    });

    it('Should obtained passed as props item', () => {
      const itemValueArray = Object.values(
        mockedProducts[0]
      );
      const componentPropValueArray =
        Object.values(component.item);

      for (let itemValue of componentPropValueArray) {
        expect(
          itemValueArray.includes(itemValue)
        ).toBeTrue();
      }
    });
  });

  describe('DOM tests', () => {
    it('Should be rendered', () => {
      expect(component).toBeTruthy();
    });

    it('Should emerged div with classes', () => {
      fixture.detectChanges();
      const divCard = fixture.debugElement.query(
        By.css('div.card')
      ).nativeElement as HTMLDivElement;

      expect(divCard).toBeTruthy();
      expect(divCard.className).toEqual(
        'card maxWidth shadow-sm'
      );
    });

    it('Should displayed header with item brand name', () => {
      fixture.detectChanges();

      const header = fixture.debugElement.query(
        By.css('div.card-header')
      ).nativeElement as HTMLDivElement;

      const headerText =
        header.querySelector('div')!;

      expect(header).toBeTruthy();
      expect(
        headerText.textContent?.trim()
      ).toEqual(
        mockedProducts[0].brand.toUpperCase()
      );

      expect(headerText.className).toEqual(
        'card-title fw-bolder'
      );
    });

    it("Should displayed card's body", () => {
      fixture.detectChanges();

      const mockedProductValueArray =
        Object.values(mockedProducts[0]);
      const cardBody = fixture.debugElement.query(
        By.css('div.card-body')
      ).nativeElement as HTMLDivElement;
      const subtitles =
        cardBody.querySelectorAll('h6');
      const section =
        cardBody.querySelector('section');

      expect(cardBody).toBeTruthy();
      expect(subtitles).toBeTruthy();
      expect(subtitles.length).toEqual(3);
      expect(section).toBeTruthy();

      subtitles.forEach((el, index) => {
        expect(el.className).toEqual(
          'card-subtitle'
        );
      });

      expect(
        section
          ?.querySelector('p')
          ?.textContent?.trim()
      ).toEqual(mockedProducts[0].description);
      expect(
        section?.querySelector('p')?.className
      ).toContain('card-text');
    });
  });

  it('Should displayed footer', () => {
    fixture.detectChanges();

    const footer = fixture.debugElement.query(
      By.css('div.card-footer')
    ).nativeElement as HTMLDivElement;
    const footerStyles =
      'card-footer d-flex justify-content-center align-items-center';

    expect(footer.className).toEqual(
      footerStyles
    );

    const footerBtn =
      footer.querySelector('button');
    const footerHeader =
      footer.querySelector('h5');

    //button tests
    expect(footerBtn).toBeTruthy();
    expect(footerBtn?.className).toEqual(
      'btn btn-outline-dark col-6'
    );
    expect(
      footerBtn?.textContent?.trim().toLowerCase()
    ).toEqual('add to cart');
    expect(
      footerBtn?.querySelector('span.bi-cart')
    ).toBeTruthy();

    //header tests
    expect(footerHeader?.className).toEqual(
      'card-title col text-center'
    );
    expect(footerHeader).toBeTruthy();
    expect(
      footerHeader?.textContent?.includes(
        String(mockedProducts[0].price)
      )
    ).toBeTrue();
  });
});
