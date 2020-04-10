import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PannemwPage } from './pannemw.page';

const routes: Routes = [
  {
    path: '',
    component: PannemwPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PannemwPageRoutingModule {}
