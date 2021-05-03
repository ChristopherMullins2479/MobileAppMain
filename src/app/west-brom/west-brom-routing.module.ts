import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WestBromPage } from './west-brom.page';

const routes: Routes = [
  {
    path: '',
    component: WestBromPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WestBromPageRoutingModule {}
