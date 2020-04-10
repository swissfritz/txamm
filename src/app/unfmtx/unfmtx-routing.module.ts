import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UnfmtxPage } from './unfmtx.page';

const routes: Routes = [
  {
    path: '',
    component: UnfmtxPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UnfmtxPageRoutingModule {}
