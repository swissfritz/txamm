import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TditPage } from './tdit.page';

const routes: Routes = [
  {
    path: '',
    component: TditPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TditPageRoutingModule {}
