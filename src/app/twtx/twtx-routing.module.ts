import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TwtxPage } from './twtx.page';

const routes: Routes = [
  {
    path: '',
    component: TwtxPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TwtxPageRoutingModule {}
