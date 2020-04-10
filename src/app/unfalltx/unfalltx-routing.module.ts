import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UnfalltxPage } from './unfalltx.page';

const routes: Routes = [
  {
    path: '',
    component: UnfalltxPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UnfalltxPageRoutingModule {}
