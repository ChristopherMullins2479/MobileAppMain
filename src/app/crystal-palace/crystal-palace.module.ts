import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CrystalPalacePageRoutingModule } from './crystal-palace-routing.module';

import { CrystalPalacePage } from './crystal-palace.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CrystalPalacePageRoutingModule
  ],
  declarations: [CrystalPalacePage]
})
export class CrystalPalacePageModule {}
