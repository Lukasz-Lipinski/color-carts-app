import {
  ComponentFixture,
  TestBed,
} from '@angular/core/testing';
import { AccountComponent } from './account.component';

describe('Testing Account Page Component', () => {
  let fixture: ComponentFixture<AccountComponent>;
  let component: AccountComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AccountComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(
      AccountComponent
    );
    component = fixture.componentInstance;

    component.ngOnInit();
  });

  // describe('Class tests', () => {});

  describe('DOM tests', () => {
    it('Should be rendered', () => {
      expect(component).toBeDefined();
    });
  });
});
