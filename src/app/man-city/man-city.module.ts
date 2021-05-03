import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ManCityPageRoutingModule } from './man-city-routing.module';

import { ManCityPage } from './man-city.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ManCityPageRoutingModule
  ],
  declarations: [ManCityPage]
})
export class ManCityPageModule {}
