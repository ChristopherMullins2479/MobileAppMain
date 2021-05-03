import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WestBromPageRoutingModule } from './west-brom-routing.module';

import { WestBromPage } from './west-brom.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WestBromPageRoutingModule
  ],
  declarations: [WestBromPage]
})
export class WestBromPageModule {}
