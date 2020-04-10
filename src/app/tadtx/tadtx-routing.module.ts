import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TadtxPage } from './tadtx.page';

const routes: Routes = [
  {
    path: '',
    component: TadtxPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TadtxPageRoutingModule {}
