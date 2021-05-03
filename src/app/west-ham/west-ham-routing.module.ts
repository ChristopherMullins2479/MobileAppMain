import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WestHamPage } from './west-ham.page';

const routes: Routes = [
  {
    path: '',
    component: WestHamPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WestHamPageRoutingModule {}
