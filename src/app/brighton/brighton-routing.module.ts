import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BrightonPage } from './brighton.page';

const routes: Routes = [
  {
    path: '',
    component: BrightonPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BrightonPageRoutingModule {}
