import {
  ComponentFixture,
  TestBed,
} from '@angular/core/testing';
import { InformationBarComponent } from './information-bar.component';
import { By } from '@angular/platform-browser';
import { CartService } from 'src/app/pages/cart/cart.service';
import { of, map } from 'rxjs';
import { mockedProducts } from 'src/app/mocks';

describe('Testing Information Bar Component', () => {
  let fixture: ComponentFixture<InformationBarComponent>;
  let component: InformationBarComponent;
  let cartService: CartService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InformationBarComponent],
      providers: [CartService],
    }).compileComponents();

    fixture = TestBed.createComponent(
      InformationBarComponent
    );
    component = fixture.componentInstance;

    cartService = TestBed.inject(CartService);
    cartService.products$ = of(mockedProducts);

    component.ngOnInit();
    fixture.detectChanges();
  });

  describe('Class Tests', () => {
    it('Should return icons array', () => {
      for (let icon of component.getIcons()) {
        expect(icon.label).toBeDefined();
        expect(icon.img).toBeDefined();
        icon.isLink
          ? expect(icon.isLink).toBeTrue()
          : expect(icon.isLink).toBeFalse();

        icon.href &&
          expect(icon.href).toBeDefined();
      }
    });

    it('Should return 80 in case of empty cart', (dn: DoneFn) => {
      cartService.products$ = of([]);
      component.ngOnInit();
      component.price$.subscribe({
        next: (price) => {
          expect(price).toEqual(80);
          dn();
        },
      });
    });

    it('Should return a difference lacking to free shipment', (dn: DoneFn) => {
      component.price$.subscribe({
        next: (price) => {
          const sum = mockedProducts
            .map((product) => product.price)
            .reduce((prev, curr) => prev + curr);

          expect(price).toEqual(sum);
          dn();
        },
      });
    });
  });

  describe('DOM Tests', () => {
    it('Should be rendered correctly', () => {
      expect(component).toBeDefined();
    });

    it("Should display all data from component's state", () => {
      const links = fixture.debugElement.queryAll(
        By.css('a')
      );

      expect(links.length).toBeGreaterThanOrEqual(
        1
      );

      for (let index in links) {
        expect(
          (
            links[index]
              .nativeElement as HTMLLinkElement
          ).textContent
        ).toEqual(
          component.getIcons()[index].label
        );
      }
    });

    it('Should display static label informing about delivery', () => {
      const deliveryInfo =
        fixture.debugElement.query(
          By.css('span>span')
        ).nativeElement as HTMLSpanElement;

      expect(
        deliveryInfo.textContent
          ?.trim()
          .toLowerCase()
      ).toEqual('fast delivery');
    });
  });
});
