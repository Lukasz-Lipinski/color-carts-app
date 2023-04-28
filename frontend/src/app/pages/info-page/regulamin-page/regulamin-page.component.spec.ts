import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegulaminPageComponent } from './regulamin-page.component';

describe('RegulaminPageComponent', () => {
  let component: RegulaminPageComponent;
  let fixture: ComponentFixture<RegulaminPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegulaminPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegulaminPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
