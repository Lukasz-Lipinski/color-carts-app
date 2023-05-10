import {
  ComponentFixture,
  TestBed,
} from '@angular/core/testing';

import { InfoPageComponent } from './info-page.component';
import { SharedModule } from 'src/app/shared/shared.module';

describe('InfoPageComponent', () => {
  let component: InfoPageComponent;
  let fixture: ComponentFixture<InfoPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SharedModule, InfoPageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(
      InfoPageComponent
    );
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
