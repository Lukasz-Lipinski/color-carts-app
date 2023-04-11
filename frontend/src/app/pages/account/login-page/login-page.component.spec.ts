import {
  ComponentFixture,
  TestBed,
} from '@angular/core/testing';
import { LoginPageComponent } from './login-page.component';

describe('Testing Login Page', () => {
  let fixture: ComponentFixture<LoginPageComponent>;
  let component: LoginPageComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [LoginPageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(
      LoginPageComponent
    );
    component = fixture.componentInstance;

    component.ngOnInit();
  });

  describe('Class Tests', () => {});

  describe('DOM Tests', () => {
    it('Should be rendered', () => {
      expect(component).toBeDefined();
    });
  });
});
