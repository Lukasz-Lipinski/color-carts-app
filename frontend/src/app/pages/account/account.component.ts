import { Component, OnInit } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss'],
  standalone: true,
  imports: [SharedModule],
})
export class AccountComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
