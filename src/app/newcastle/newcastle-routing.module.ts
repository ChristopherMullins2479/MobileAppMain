import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewcastlePage } from './newcastle.page';

const routes: Routes = [
  {
    path: '',
    component: NewcastlePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewcastlePageRoutingModule {}
