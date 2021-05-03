import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AstonVillaPageRoutingModule } from './aston-villa-routing.module';

import { AstonVillaPage } from './aston-villa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AstonVillaPageRoutingModule
  ],
  declarations: [AstonVillaPage]
})
export class AstonVillaPageModule {}
