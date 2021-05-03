import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShefieldPageRoutingModule } from './shefield-routing.module';

import { ShefieldPage } from './shefield.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShefieldPageRoutingModule
  ],
  declarations: [ShefieldPage]
})
export class ShefieldPageModule {}
