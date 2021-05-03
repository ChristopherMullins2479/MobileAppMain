import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FulhamPageRoutingModule } from './fulham-routing.module';

import { FulhamPage } from './fulham.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FulhamPageRoutingModule
  ],
  declarations: [FulhamPage]
})
export class FulhamPageModule {}
