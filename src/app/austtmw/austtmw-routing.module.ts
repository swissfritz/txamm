import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AusttmwPage } from './austtmw.page';

const routes: Routes = [
  {
    path: '',
    component: AusttmwPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AusttmwPageRoutingModule {}
