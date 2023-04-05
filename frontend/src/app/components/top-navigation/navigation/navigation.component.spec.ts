import {
  ComponentFixture,
  TestBed,
} from '@angular/core/testing';
import { NavigationComponent } from './navigation.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('Testing Navigation Component', () => {
  let fixture: ComponentFixture<NavigationComponent>;
  let component: NavigationComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavigationComponent],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(
      NavigationComponent
    );
    component = fixture.componentInstance;

    component.ngOnInit();
    fixture.detectChanges();
  });

  describe('Class Tests', () => {
    it('Should had labels', () => {
      for (let index in component.links) {
        expect(
          component.links[index].label
        ).toBeTruthy();

        component.links[index].subcategory &&
          expect(
            component.links[index].subcategory
              ?.length
          ).toBeGreaterThan(0);
      }
    });

    it('Should have subcategory props setup to 0', () => {
      expect(component.subcategory.index).toEqual(
        0
      );
    });

    it('Should set new index for subcategory', () => {
      component.onSetSubcategory(2);

      expect(component.subcategory.index).toEqual(
        2
      );
    });
  });

  describe('DOM Tests', () => {
    it('Should be rendered', () => {
      expect(component).toBeDefined();
    });

    it('Should display all links', () => {
      const links = fixture.debugElement.queryAll(
        By.css('li')
      );
      expect(links.length).toEqual(
        component.links.length
      );

      for (let index in links) {
        expect(
          (
            links[index]
              .nativeElement as HTMLLinkElement
          ).textContent
            ?.trim()
            .toLowerCase()
        ).toEqual(
          component.links[index].label
            .trim()
            .toLowerCase()
        );
      }
    });
  });
});
