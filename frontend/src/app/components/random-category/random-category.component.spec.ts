import {
  ComponentFixture,
  TestBed,
} from '@angular/core/testing';

import { RandomCategoryComponent } from './random-category.component';
import { mockedCategories } from 'src/app/mocks';
import { By } from '@angular/platform-browser';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('RandomCategoryComponent', () => {
  let component: RandomCategoryComponent;
  let fixture: ComponentFixture<RandomCategoryComponent>;

  let timer: any;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RandomCategoryComponent],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(
      RandomCategoryComponent
    );
    component = fixture.componentInstance;
    component.categories = mockedCategories;
    component.ngOnInit();
  });

  describe('Class tests', () => {
    it('Should return 0', () => {
      expect(component.slideNumber).toEqual(0);
    });

    it('Should incremeant slideNumber by 1', () => {
      expect(component.slideNumber).toEqual(0);
      component.onChangeSlide('increase');
      expect(component.slideNumber).toEqual(1);
    });

    it('Should has been changing slide after 4s', () => {
      expect(component.slideNumber).toEqual(0);
      timer = setTimeout(() => {
        expect(component.slideNumber).toEqual(1);
      }, 4001);

      clearTimeout(timer);
    });
  });
  describe('DOM tests', () => {
    it('Should be rendered', () => {
      expect(component).toBeTruthy();
    });

    it('Should emerged carousel with exact one link and 2 buttons to switch', () => {
      fixture.detectChanges();

      const carousel = fixture.debugElement.query(
        By.css('.carousel-item')
      ).nativeElement as HTMLDivElement;

      expect(carousel).toBeDefined();
      expect(carousel).toBeTruthy();

      const buttons =
        fixture.debugElement.queryAll(
          By.css('button')
        );

      expect(buttons.length).toEqual(2);
    });

    it('Should have been increasing slideNumber after clicking increase button', () => {
      fixture.detectChanges();
      const btn = fixture.debugElement.query(
        By.css('button.carousel-control-next')
      ).nativeElement as HTMLButtonElement;

      expect(component.slideNumber).toEqual(0);
      btn.click();

      fixture.detectChanges();
      expect(component.slideNumber).toEqual(1);
    });

    it('Should have been decreasing slideNumber after clicking decreasing button', () => {
      fixture.detectChanges();

      const btn = fixture.debugElement.query(
        By.css('button.carousel-control-prev')
      ).nativeElement as HTMLButtonElement;
      component.slideNumber = 4;
      btn.click();

      fixture.detectChanges();
      expect(component.slideNumber).toEqual(3);
    });
  });
});
