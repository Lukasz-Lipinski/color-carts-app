import { NgModule } from '@angular/core';
import {
  PreloadAllModules,
  RouterModule,
  Routes,
} from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import {
  UserPageCanActive,
  UserPageCanLoad,
} from './pages/account/account.guard';

const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import(
        './pages/home-page/home-page.component'
      ).then((m) => m.HomePageComponent),
    pathMatch: 'full',
  },
  {
    path: 'cart',
    loadComponent: () =>
      import('./pages/cart/cart.component').then(
        (m) => m.CartComponent
      ),
  },
  {
    path: 'account',
    loadComponent: () =>
      import(
        './pages/account/account.component'
      ).then((m) => m.AccountComponent),
    children: [
      {
        path: '',
        loadComponent: () =>
          import(
            './pages/account/user-page/user-page.component'
          ).then((m) => m.UserPageComponent),
        canActivate: [UserPageCanActive],
        canLoad: [UserPageCanLoad],
      },
      {
        path: 'login',
        loadComponent: () =>
          import(
            './pages/account/login-page/login-page.component'
          ).then((m) => m.LoginPageComponent),
      },
      {
        path: 'register',
        loadComponent: () =>
          import(
            './pages/account/register-page/register-page.component'
          ).then((m) => m.RegisterPageComponent),
      },
    ],
  },
  {
    path: ':category',
    loadComponent: () =>
      import(
        './pages/category-page/category-page.component'
      ).then((m) => m.CategoryPageComponent),
    children: [
      {
        path: ':subcategory',
        loadComponent: () =>
          import(
            './pages/category-page/category-page.component'
          ).then((m) => m.CategoryPageComponent),
      },
    ],
  },
  {
    path: '**',
    redirectTo: '',
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
