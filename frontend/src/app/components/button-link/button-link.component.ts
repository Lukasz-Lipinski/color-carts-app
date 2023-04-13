import {
  Component,
  Input,
  OnInit,
} from '@angular/core';

export interface ButtonLink {
  text: string;
  href: string;
  isFullRow: boolean;
}

@Component({
  selector: 'app-button-link[buttonDetails]',
  templateUrl: './button-link.component.html',
  styleUrls: ['./button-link.component.scss'],
})
export class ButtonLinkComponent
  implements OnInit
{
  @Input() buttonDetails!: ButtonLink;
  constructor() {}

  ngOnInit(): void {}
}
