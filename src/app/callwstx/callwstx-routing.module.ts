import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CallwstxPage } from './callwstx.page';

const routes: Routes = [
  {
    path: '',
    component: CallwstxPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CallwstxPageRoutingModule {}
