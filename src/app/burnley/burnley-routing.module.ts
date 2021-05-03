import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BurnleyPage } from './burnley.page';

const routes: Routes = [
  {
    path: '',
    component: BurnleyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BurnleyPageRoutingModule {}
