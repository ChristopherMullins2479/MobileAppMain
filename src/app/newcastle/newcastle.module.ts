import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewcastlePageRoutingModule } from './newcastle-routing.module';

import { NewcastlePage } from './newcastle.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewcastlePageRoutingModule
  ],
  declarations: [NewcastlePage]
})
export class NewcastlePageModule {}
