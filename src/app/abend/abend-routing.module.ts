import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AbendPage } from './abend.page';

const routes: Routes = [
  {
    path: '',
    component: AbendPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AbendPageRoutingModule {}
