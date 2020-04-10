import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TdimPage } from './tdim.page';

const routes: Routes = [
  {
    path: '',
    component: TdimPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TdimPageRoutingModule {}
