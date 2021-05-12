import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SetTeamTheamPage } from './set-team-theam.page';

const routes: Routes = [
  {
    path: '',
    component: SetTeamTheamPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SetTeamTheamPageRoutingModule {}
