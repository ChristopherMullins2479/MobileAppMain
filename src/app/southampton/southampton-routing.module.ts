import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SouthamptonPage } from './southampton.page';

const routes: Routes = [
  {
    path: '',
    component: SouthamptonPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SouthamptonPageRoutingModule {}
