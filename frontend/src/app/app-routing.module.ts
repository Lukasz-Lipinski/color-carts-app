import { NgModule } from '@angular/core';
import {
  RouterModule,
  Routes,
} from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
  },
  {
    path: 'cart',
    loadComponent: () =>
      import('./pages/cart/cart.component').then(
        (m) => m.CartComponent
      ),
  },
  {
    path: 'registration',
    loadComponent: () =>
      import(
        './pages/registration-page/registration-page.component'
      ).then((m) => m.RegistrationPageComponent),
  },
  {
    path: ':category',
    loadComponent: () =>
      import(
        './pages/category-page/category-page.component'
      ).then((m) => m.CategoryPageComponent),
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
