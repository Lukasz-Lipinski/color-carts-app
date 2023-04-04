import {
  ComponentFixture,
  TestBed,
} from '@angular/core/testing';
import { MiddlePartComponent } from './middle-part.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { By } from '@angular/platform-browser';
import { SearcherComponent } from '../../searcher/searcher.component';

describe('Testing Middle-Part Component', () => {
  let fixture: ComponentFixture<MiddlePartComponent>;
  let component: MiddlePartComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MiddlePartComponent],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(
      MiddlePartComponent
    );
    component = fixture.componentInstance;

    component.ngOnInit();
    fixture.detectChanges();
  });

  // describe('Class tests', () => {
  //   it('Should ...', () => {});
  // });

  describe('DOM tests', () => {
    it('Should be rendered', () => {
      expect(component).toBeDefined();
    });

    it('Should display searcher', () => {
      const searcher = fixture.debugElement.query(
        By.css('app-searcher')
      ).nativeElement;

      expect(searcher).toBeDefined();
    });

    it('Should display logo component', () => {
      const logoComponent =
        fixture.debugElement.query(
          By.css('app-logo')
        ).nativeElement;

      expect(logoComponent).toBeDefined();
    });

    it('Should display 2 links', () => {
      const links = fixture.debugElement.queryAll(
        By.css('a')
      );

      expect(links.length).toEqual(2);

      for (let link of links) {
        const routerLink =
          link.nativeElement as HTMLLinkElement;

        expect(routerLink).toBeDefined();
        expect(
          routerLink.querySelector('span.bi')
        ).toBeDefined();
        expect(
          routerLink.querySelectorAll('span')[1]
            .textContent
        ).toBeTruthy();
      }
    });
  });
});
