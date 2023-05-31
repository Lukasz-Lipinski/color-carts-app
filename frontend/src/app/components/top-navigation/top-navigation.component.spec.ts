import {
  ComponentFixture,
  TestBed,
} from '@angular/core/testing';
import { TopNavigationComponent } from './top-navigation.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { By } from '@angular/platform-browser';
import { InformationBarComponent } from './information-bar/information-bar.component';
import { MiddlePartComponent } from './middle-part/middle-part.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('Testing Top Navigation Component', () => {
  let fixture: ComponentFixture<TopNavigationComponent>;
  let component: TopNavigationComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        TopNavigationComponent,
        InformationBarComponent,
        MiddlePartComponent,
        NavigationComponent,
      ],
      imports: [HttpClientTestingModule],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(
      TopNavigationComponent
    );
    component = fixture.componentInstance;

    component.ngOnInit();
    fixture.detectChanges();
  });

  describe('DOM Tests', () => {
    it('Should be rendered', () => {
      expect(component).toBeDefined();
      expect(component).toBeTruthy();
    });

    it('Should have been attached classes in nav tag', () => {
      const nav = fixture.debugElement.query(
        By.css('nav')
      ).nativeElement as HTMLElement;
      const classes =
        'd-flex flex-column position-relative';

      expect(nav).toBeTruthy();
      expect(nav.className).toEqual(classes);
    });

    it('Should displayed information bar component', () => {
      const infobarComponent =
        fixture.debugElement.query(
          By.directive(InformationBarComponent)
        );

      expect(infobarComponent).toBeDefined();
      expect(infobarComponent).toBeTruthy();
    });

    it('Should displayed middle part compnent', () => {
      const middlePartComponent =
        fixture.debugElement.query(
          By.directive(MiddlePartComponent)
        ).nativeElement;

      expect(middlePartComponent).toBeTruthy();
    });

    it('Should displayed navigation component', () => {
      const navigationComponent =
        fixture.debugElement.query(
          By.directive(NavigationComponent)
        ).nativeElement;

      expect(navigationComponent).toBeTruthy();
    });
  });
});
