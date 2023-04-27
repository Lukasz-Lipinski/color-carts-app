import {
  ComponentFixture,
  TestBed,
} from '@angular/core/testing';
import { BestsellersComponent } from './bestsellers.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';
import { By } from '@angular/platform-browser';

describe('Testing Bestsellers Component', () => {
  let component: BestsellersComponent;
  let fixture: ComponentFixture<BestsellersComponent>;

  let router: Router;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BestsellersComponent],
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
  describe('DOM tests', () => {
    it('Should be rendered', () => {
      expect(component).toBeDefined();
      expect(component).toBeTruthy();
    });

    it('Should rendered header with Bestsellers text', () => {
      const h3 = fixture.debugElement.query(
        By.css('h3')
      ).nativeElement as HTMLDivElement;
      expect(h3).toBeTruthy();
      expect(
        h3.textContent?.trim()?.toLowerCase()
      ).toEqual('bestsellers');
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
  });
});
