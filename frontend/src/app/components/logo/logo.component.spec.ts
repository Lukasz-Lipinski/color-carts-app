import {
  ComponentFixture,
  TestBed,
} from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { LogoComponent } from './logo.component';
import { By } from '@angular/platform-browser';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('Testing Logo Component', () => {
  let fixture: ComponentFixture<LogoComponent>;
  let component: LogoComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LogoComponent],
      imports: [RouterTestingModule],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(
      LogoComponent
    );
    component = fixture.componentInstance;

    component.ngOnInit();
    fixture.detectChanges();
  });

  describe('DOM tests', () => {
    it('Should be rendered', () => {
      expect(component).toBeDefined();
    });

    it('Should render link', () => {
      const link = fixture.debugElement.query(
        By.css('a')
      ).nativeElement as HTMLLinkElement;

      expect(link).toBeDefined();

      expect(
        link
          .querySelector('span')
          ?.textContent?.trim()
          .toLowerCase()
      ).toEqual('color carts');
    });
  });
});
