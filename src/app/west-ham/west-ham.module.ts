import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WestHamPageRoutingModule } from './west-ham-routing.module';

import { WestHamPage } from './west-ham.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WestHamPageRoutingModule
  ],
  declarations: [WestHamPage]
})
export class WestHamPageModule {}
