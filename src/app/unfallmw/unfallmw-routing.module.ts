import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UnfallmwPage } from './unfallmw.page';

const routes: Routes = [
  {
    path: '',
    component: UnfallmwPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UnfallmwPageRoutingModule {}
