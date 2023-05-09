import {
  ComponentFixture,
  TestBed,
} from '@angular/core/testing';
import { PageTitleComponent } from './page-title.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

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

  describe('Class Tests', () => {});

  describe('DOM Tests', () => {
    it('Should be rendered', () => {
      expect(component).toBeDefined();
      expect(component).toBeTruthy();
    });
  });
});
