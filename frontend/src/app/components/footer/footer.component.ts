import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
} from '@angular/core';

interface FooterLink {
  label: string;
  href: string;
}

interface FooterColumn {
  header: string;
  links: FooterLink[];
}

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent implements OnInit {
  footerColumns: FooterColumn[] = [
    {
      header: 'Information',
      links: [
        {
          label: 'Regulamin',
          href: '/info/regulamin',
        },
        {
          label: 'Privacy Policy',
          href: '/info/privacy-policy',
        },
        { label: 'Claims', href: '/info/claims' },
      ],
    },
    {
      header: 'Your Account',
      links: [
        {
          label: 'Sign up',
          href: '/account/register',
        },
        {
          label: 'Cart',
          href: '/cart',
        },
      ],
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
