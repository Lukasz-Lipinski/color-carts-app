import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { NavigationComponent } from './components/top-navigation/navigation/navigation.component';
import { TopNavigationComponent } from './components/top-navigation/top-navigation.component';
import { InformationBarComponent } from './components/top-navigation/information-bar/information-bar.component';
import { SearcherComponent } from './components/searcher/searcher.component';
import { MiddlePartComponent } from './components/top-navigation/middle-part/middle-part.component';

const components = [
  NavigationComponent,
  TopNavigationComponent,
  InformationBarComponent,
  SearcherComponent,
  MiddlePartComponent,
];

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ...components,
  ],
  imports: [
    BrowserModule,
    SharedModule,
    AppRoutingModule,
  ],
  exports: [
    SharedModule,
    AppRoutingModule,
    ...components,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
