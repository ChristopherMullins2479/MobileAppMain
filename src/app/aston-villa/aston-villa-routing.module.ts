import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AstonVillaPage } from './aston-villa.page';

const routes: Routes = [
  {
    path: '',
    component: AstonVillaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AstonVillaPageRoutingModule {}
