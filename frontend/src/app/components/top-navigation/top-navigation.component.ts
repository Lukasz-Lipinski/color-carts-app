import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
} from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-top-navigation',
  templateUrl: './top-navigation.component.html',
  styleUrls: ['./top-navigation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TopNavigationComponent
  implements OnInit
{
  private cred$!: Observable<any>;
  public get getCred$() {
    return this.cred$;
  }

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.cred$ = this.authService.user;
  }
}
