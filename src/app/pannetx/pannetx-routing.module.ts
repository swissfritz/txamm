import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PannetxPage } from './pannetx.page';

const routes: Routes = [
  {
    path: '',
    component: PannetxPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PannetxPageRoutingModule {}
