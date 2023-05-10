import {
  ComponentFixture,
  TestBed,
} from '@angular/core/testing';
import { PageTitleComponent } from './page-title.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('Testing Page Title Component', () => {
  let fixture: ComponentFixture<PageTitleComponent>;
  let component: PageTitleComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageTitleComponent],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(
      PageTitleComponent
    );
    component = fixture.componentInstance;

    component.ngOnInit();
  });

  describe('Class Tests', () => {
    it('Should return title page on screen', () => {
      component.pageTitle = 'test';

      expect(component.pageTitle).toEqual('test');
    });
  });

  describe('DOM Tests', () => {
    it('Should be rendered', () => {
      expect(component).toBeDefined();
      expect(component).toBeTruthy();
    });

    it('Should emerged div with h3 element inside', () => {
      component.pageTitle = 'test';

      fixture.detectChanges();
      const div = fixture.debugElement.query(
        By.css('div')
      ).nativeElement as HTMLDivElement;
      expect(div).toBeTruthy();

      const h = div.querySelector('h3');

      expect(h).toBeTruthy();
      expect(h?.className).toEqual('h3 p-3');
      expect(
        h?.textContent?.toLowerCase().trim()
      ).toEqual('test');
    });
  });
});
