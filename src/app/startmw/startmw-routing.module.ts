import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StartmwPage } from './startmw.page';

const routes: Routes = [
  {
    path: '',
    component: StartmwPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StartmwPageRoutingModule {}
