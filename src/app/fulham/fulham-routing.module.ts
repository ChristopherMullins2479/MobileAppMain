import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FulhamPage } from './fulham.page';

const routes: Routes = [
  {
    path: '',
    component: FulhamPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FulhamPageRoutingModule {}
