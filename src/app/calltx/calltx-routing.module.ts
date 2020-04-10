import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CalltxPage } from './calltx.page';

const routes: Routes = [
  {
    path: '',
    component: CalltxPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CalltxPageRoutingModule {}
