import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { Observable, map, of } from 'rxjs';
import { CartService } from 'src/app/pages/cart/cart.service';

@Component({
  selector: 'app-middle-part',
  templateUrl: './middle-part.component.html',
  styleUrls: ['./middle-part.component.scss'],
})
export class MiddlePartComponent
  implements OnInit
{
  isLogged$!: Observable<Boolean>;
  productsAmount$!: Observable<number>;

  constructor(
    private authService: AuthService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.isLogged$ = this.authService.user.pipe(
      map((userData) => userData.isLogged)
    );
    this.productsAmount$ =
      this.cartService.products$.pipe(
        map((p) => p.length)
      );
  }

  onShow(parameter: string) {
    console.log(parameter);
  }
  onLogout() {
    this.authService.logout();
  }
}
