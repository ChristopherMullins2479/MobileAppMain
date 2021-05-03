import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LeedsPageRoutingModule } from './leeds-routing.module';

import { LeedsPage } from './leeds.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LeedsPageRoutingModule
  ],
  declarations: [LeedsPage]
})
export class LeedsPageModule {}
