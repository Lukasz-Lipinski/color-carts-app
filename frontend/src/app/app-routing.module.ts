import { NgModule } from '@angular/core';
import {
  PreloadAllModules,
  RouterModule,
  Routes,
} from '@angular/router';
import {
  UserPageCanActive,
  UserPageCanLoad,
} from './pages/account/account.guard';
import { HomePageResolver } from './pages/home-page/home-page.resolver';

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
    path: 'info',
    loadComponent: () =>
      import(
        './pages/info-page/info-page.component'
      ).then((m) => m.InfoPageComponent),
    children: [
      {
        path: 'regulamin',
        loadComponent: () =>
          import(
            './pages/info-page/regulamin-page/regulamin-page.component'
          ).then((m) => m.RegulaminPageComponent),
      },
      {
        path: 'claims',
        loadComponent: () =>
          import(
            './pages/info-page/claims-page/claims-page.component'
          ).then((m) => m.ClaimsPageComponent),
      },
      {
        path: 'privacy-policy',
        loadComponent: () =>
          import(
            './pages/info-page/policy-page/policy-page.component'
          ).then((m) => m.PolicyPageComponent),
      },
    ],
  },
  {
    path: ':category',
    children: [
      {
        path: '',
        loadComponent: () =>
          import(
            './pages/category-page/category-page.component'
          ).then((m) => m.CategoryPageComponent),
        resolve: {
          products: HomePageResolver,
        },
      },
      {
        path: ':subcategory',
        loadComponent: () =>
          import(
            './pages/subcategory-page/subcategory-page.component'
          ).then(
            (m) => m.SubcategoryPageComponent
          ),
        resolve: {
          products: HomePageResolver,
        },
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
