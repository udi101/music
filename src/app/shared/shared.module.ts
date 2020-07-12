import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material.module';
import { UrlDirective } from 'src/app/shared/directives/url.directive';



@NgModule({
  declarations: [UrlDirective],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    MaterialModule,
    UrlDirective
  ]
})
export class SharedModule { }
