import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LenmwPage } from './lenmw.page';

const routes: Routes = [
  {
    path: '',
    component: LenmwPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LenmwPageRoutingModule {}
