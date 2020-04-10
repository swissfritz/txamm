import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CallwsmwPage } from './callwsmw.page';

const routes: Routes = [
  {
    path: '',
    component: CallwsmwPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CallwsmwPageRoutingModule {}
