import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LogoComponent } from '../components/logo/logo.component';
import { SearcherComponent } from '../components/searcher/searcher.component';
import { InformationBarComponent } from '../components/top-navigation/information-bar/information-bar.component';
import { MiddlePartComponent } from '../components/top-navigation/middle-part/middle-part.component';
import { NavigationComponent } from '../components/top-navigation/navigation/navigation.component';
import { TopNavigationComponent } from '../components/top-navigation/top-navigation.component';
import { LoginFormComponent } from '../components/login-form/login-form.component';
import { ErrorMessageComponent } from '../components/error-message/error-message.component';
import { RegisterFormComponent } from '../components/register-form/register-form.component';
import { ButtonLinkComponent } from '../components/button-link/button-link.component';
import { BestsellersComponent } from '../components/bestsellers/bestsellers.component';
import { RandomCategoryComponent } from '../components/random-category/random-category.component';
import { FooterComponent } from '../components/footer/footer.component';
import { ProductCardComponent } from '../components/product-card/product-card.component';
import { PageTitleComponent } from '../components/page-title/page-title.component';
import { InfoShopPartComponent } from '../components/info-shop-part/info-shop-part.component';
import { FilteringMenuComponent } from '../components/filtering-menu/filtering-menu.component';

export const components = [
  FilteringMenuComponent,
  NavigationComponent,
  TopNavigationComponent,
  InformationBarComponent,
  SearcherComponent,
  MiddlePartComponent,
  LogoComponent,
  LoginFormComponent,
  ErrorMessageComponent,
  RegisterFormComponent,
  ButtonLinkComponent,
  BestsellersComponent,
  RandomCategoryComponent,
  FooterComponent,
  ProductCardComponent,
  PageTitleComponent,
  InfoShopPartComponent,
];

@NgModule({
  declarations: components,
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  exports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    HttpClientModule,
    ...components,
  ],
})
export class SharedModule {}
