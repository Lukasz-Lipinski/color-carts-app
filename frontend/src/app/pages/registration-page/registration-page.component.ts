import { Component, OnInit } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';

@Component({
  selector: 'app-registration-page',
  templateUrl:
    './registration-page.component.html',
  styleUrls: [
    './registration-page.component.sass',
  ],
  standalone: true,
  imports: [SharedModule],
})
export class RegistrationPageComponent
  implements OnInit
{
  constructor() {}

  ngOnInit(): void {}
}
