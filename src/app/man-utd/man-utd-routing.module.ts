import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ManUtdPage } from './man-utd.page';

const routes: Routes = [
  {
    path: '',
    component: ManUtdPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ManUtdPageRoutingModule {}
