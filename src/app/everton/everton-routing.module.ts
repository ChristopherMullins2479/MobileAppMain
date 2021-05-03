import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EvertonPage } from './everton.page';

const routes: Routes = [
  {
    path: '',
    component: EvertonPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EvertonPageRoutingModule {}
