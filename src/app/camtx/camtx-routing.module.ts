import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CamtxPage } from './camtx.page';

const routes: Routes = [
  {
    path: '',
    component: CamtxPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CamtxPageRoutingModule {}
