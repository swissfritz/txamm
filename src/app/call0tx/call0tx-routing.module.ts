import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Call0txPage } from './call0tx.page';

const routes: Routes = [
  {
    path: '',
    component: Call0txPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Call0txPageRoutingModule {}
