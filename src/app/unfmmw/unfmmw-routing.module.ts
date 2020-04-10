import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UnfmmwPage } from './unfmmw.page';

const routes: Routes = [
  {
    path: '',
    component: UnfmmwPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UnfmmwPageRoutingModule {}
