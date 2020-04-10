import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TstrtxPage } from './tstrtx.page';

const routes: Routes = [
  {
    path: '',
    component: TstrtxPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TstrtxPageRoutingModule {}
