import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';
import { RouterModule } from '@angular/router';

const components: any[] = [];

@NgModule({
  declarations: components,
  imports: [CommonModule, RouterModule],
  exports: [
    ...components,
    CommonModule,
    RouterModule,
  ],
})
export class SharedModule {}
