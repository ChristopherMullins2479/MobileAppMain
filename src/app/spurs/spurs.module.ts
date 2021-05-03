import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SpursPageRoutingModule } from './spurs-routing.module';

import { SpursPage } from './spurs.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SpursPageRoutingModule
  ],
  declarations: [SpursPage]
})
export class SpursPageModule {}
