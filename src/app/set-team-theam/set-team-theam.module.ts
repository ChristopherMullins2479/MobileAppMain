import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SetTeamTheamPageRoutingModule } from './set-team-theam-routing.module';

import { SetTeamTheamPage } from './set-team-theam.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SetTeamTheamPageRoutingModule
  ],
  declarations: [SetTeamTheamPage]
})
export class SetTeamTheamPageModule {}
