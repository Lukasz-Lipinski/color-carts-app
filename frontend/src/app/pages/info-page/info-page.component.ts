import { Component, OnInit } from '@angular/core';
import {
  ActivatedRoute,
  Params,
} from '@angular/router';
import { Observable } from 'rxjs';
import { SharedModule } from 'src/app/shared/shared.module';

@Component({
  selector: 'app-info-page',
  templateUrl: './info-page.component.html',
  styleUrls: ['./info-page.component.scss'],
  standalone: true,
  imports: [SharedModule],
})
export class InfoPageComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
