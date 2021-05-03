import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ArsenalPageRoutingModule } from './arsenal-routing.module';

import { ArsenalPage } from './arsenal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ArsenalPageRoutingModule
  ],
  declarations: [ArsenalPage]
})
export class ArsenalPageModule {}
