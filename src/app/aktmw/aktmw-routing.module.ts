import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AktmwPage } from './aktmw.page';

const routes: Routes = [
  {
    path: '',
    component: AktmwPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AktmwPageRoutingModule {}
