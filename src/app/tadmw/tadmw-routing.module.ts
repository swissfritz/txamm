import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TadmwPage } from './tadmw.page';

const routes: Routes = [
  {
    path: '',
    component: TadmwPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TadmwPageRoutingModule {}
