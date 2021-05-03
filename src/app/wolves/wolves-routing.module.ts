import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WolvesPage } from './wolves.page';

const routes: Routes = [
  {
    path: '',
    component: WolvesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WolvesPageRoutingModule {}
