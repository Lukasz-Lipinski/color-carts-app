import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [AppComponent, HomePageComponent],
  imports: [
    BrowserModule,
    SharedModule,
    AppRoutingModule,
  ],
  exports: [SharedModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
