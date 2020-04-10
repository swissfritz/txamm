import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TstrmwPage } from './tstrmw.page';

const routes: Routes = [
  {
    path: '',
    component: TstrmwPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TstrmwPageRoutingModule {}
