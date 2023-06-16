import {
  ComponentFixture,
  TestBed,
} from '@angular/core/testing';

import { CartIconComponent } from './cart-icon.component';
import { mockedProducts } from 'src/app/mocks';
import { By } from '@angular/platform-browser';

describe('CartIconComponent', () => {
  let component: CartIconComponent;
  let fixture: ComponentFixture<CartIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CartIconComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(
      CartIconComponent
    );
    component = fixture.componentInstance;
    component.ngOnInit();
  });

  describe('DOM tests', () => {
    it('Should be rendered', () => {
      expect(component).toBeTruthy();
    });

    it("Shouldn't emerged number if cart is empty", () => {
      component.productsAmount = 0;
      fixture.detectChanges();

      const spans = fixture.debugElement.queryAll(
        By.css('span')
      );

      expect(spans.length).toEqual(2);
    });
  });

  describe('Class tests', () => {
    it('Should be passed amount of products', () => {
      component.productsAmount =
        mockedProducts.length;
      expect(component.productsAmount).toEqual(
        mockedProducts.length
      );
    });
  });
});
