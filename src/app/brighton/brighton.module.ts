import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BrightonPageRoutingModule } from './brighton-routing.module';

import { BrightonPage } from './brighton.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BrightonPageRoutingModule
  ],
  declarations: [BrightonPage]
})
export class BrightonPageModule {}
