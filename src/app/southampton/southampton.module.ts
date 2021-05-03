import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SouthamptonPageRoutingModule } from './southampton-routing.module';

import { SouthamptonPage } from './southampton.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SouthamptonPageRoutingModule
  ],
  declarations: [SouthamptonPage]
})
export class SouthamptonPageModule {}
