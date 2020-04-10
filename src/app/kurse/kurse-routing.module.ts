import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KursePage } from './kurse.page';

const routes: Routes = [
  {
    path: '',
    component: KursePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KursePageRoutingModule {}
