import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Call0mwPage } from './call0mw.page';

const routes: Routes = [
  {
    path: '',
    component: Call0mwPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Call0mwPageRoutingModule {}
