import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TxfahrPage } from './txfahr.page';

const routes: Routes = [
  {
    path: '',
    component: TxfahrPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TxfahrPageRoutingModule {}
