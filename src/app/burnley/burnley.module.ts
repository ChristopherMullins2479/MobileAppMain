import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BurnleyPageRoutingModule } from './burnley-routing.module';

import { BurnleyPage } from './burnley.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BurnleyPageRoutingModule
  ],
  declarations: [BurnleyPage]
})
export class BurnleyPageModule {}
