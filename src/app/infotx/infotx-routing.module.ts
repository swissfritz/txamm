import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InfotxPage } from './infotx.page';

const routes: Routes = [
  {
    path: '',
    component: InfotxPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InfotxPageRoutingModule {}
