import {
  ComponentFixture,
  TestBed,
} from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { LogoComponent } from './logo.component';
import { By } from '@angular/platform-browser';

describe('Testing Logo Component', () => {
  let fixture: ComponentFixture<LogoComponent>;
  let component: LogoComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LogoComponent],
      imports: [RouterTestingModule],
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
