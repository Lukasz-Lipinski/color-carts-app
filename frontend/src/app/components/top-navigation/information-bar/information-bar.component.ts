import { Component, OnInit } from '@angular/core';

interface Icon {
  label: string;
  img: string;
  isLink: boolean;
  href?: string;
}

@Component({
  selector: 'app-information-bar',
  templateUrl: './information-bar.component.html',
  styleUrls: ['./information-bar.component.scss'],
})
export class InformationBarComponent
  implements OnInit
{
  icons: Array<Icon> = [
    {
      img: 'bi-phone',
      label: '111-111-111',
      isLink: false,
    },
    {
      img: 'bi-instagram',
      label: 'Instagram',
      isLink: true,
      href: 'https://www.instagram.com/',
    },
    {
      img: 'bi-facebook',
      label: 'Facebook',
      isLink: true,
      href: 'https://www.facebook.com',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
