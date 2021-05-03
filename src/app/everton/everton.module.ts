import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EvertonPageRoutingModule } from './everton-routing.module';

import { EvertonPage } from './everton.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EvertonPageRoutingModule
  ],
  declarations: [EvertonPage]
})
export class EvertonPageModule {}
