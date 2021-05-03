import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ManUtdPageRoutingModule } from './man-utd-routing.module';

import { ManUtdPage } from './man-utd.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ManUtdPageRoutingModule
  ],
  declarations: [ManUtdPage]
})
export class ManUtdPageModule {}
