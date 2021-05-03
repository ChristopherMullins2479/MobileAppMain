import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LeicesterPageRoutingModule } from './leicester-routing.module';

import { LeicesterPage } from './leicester.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LeicesterPageRoutingModule
  ],
  declarations: [LeicesterPage]
})
export class LeicesterPageModule {}
