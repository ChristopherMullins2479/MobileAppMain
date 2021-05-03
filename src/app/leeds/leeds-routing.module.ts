import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LeedsPage } from './leeds.page';

const routes: Routes = [
  {
    path: '',
    component: LeedsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LeedsPageRoutingModule {}
