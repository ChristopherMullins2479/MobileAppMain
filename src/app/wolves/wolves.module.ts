import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WolvesPageRoutingModule } from './wolves-routing.module';

import { WolvesPage } from './wolves.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WolvesPageRoutingModule
  ],
  declarations: [WolvesPage]
})
export class WolvesPageModule {}
