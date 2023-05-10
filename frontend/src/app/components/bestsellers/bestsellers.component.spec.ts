import {
  ComponentFixture,
  TestBed,
} from '@angular/core/testing';
import { BestsellersComponent } from './bestsellers.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';
import { By } from '@angular/platform-browser';
import { PageTitleComponent } from '../page-title/page-title.component';

describe('Testing Bestsellers Component', () => {
  let component: BestsellersComponent;
  let fixture: ComponentFixture<BestsellersComponent>;

  let router: Router;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        BestsellersComponent,
        PageTitleComponent,
      ],
      imports: [RouterTestingModule],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(
      BestsellersComponent
    );
    component = fixture.componentInstance;

    router = TestBed.inject(Router);

    component.ngOnInit();
    fixture.detectChanges();
  });

  describe('Class tests', () => {
    it("Should return title as 'Bestsellers'", () => {
      expect(component.title).toEqual(
        'Bestsellers'
      );
    });
  });

  describe('DOM tests', () => {
    it('Should be rendered', () => {
      expect(component).toBeDefined();
      expect(component).toBeTruthy();
    });

    it('Should rendered button and had routerLink setup as bestsellers', () => {
      const btn = fixture.debugElement.query(
        By.css('button')
      ).nativeElement as HTMLButtonElement;

      btn.click();

      expect(btn).toBeTruthy();
      expect(
        btn.getAttribute('routerLink')
      ).toEqual('/bestsellers');
    });

    it('Should rendered Page Title Component', () => {
      const pageTitleComponent =
        fixture.debugElement.query(
          By.directive(PageTitleComponent)
        );

      const pageTitle = pageTitleComponent.query(
        By.css('h3')
      ).nativeElement as HTMLHeadingElement;

      expect(pageTitleComponent).toBeTruthy();
      expect(
        pageTitle.textContent?.trim()
      ).toEqual('Bestsellers');
    });
  });
});
