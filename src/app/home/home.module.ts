import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { ArtCardComponent } from './art-card/art-card.component';
import { InfoBoxComponent } from './info-box/info-box.component';


@NgModule({
  declarations: [HomeComponent, ArtCardComponent, InfoBoxComponent],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
