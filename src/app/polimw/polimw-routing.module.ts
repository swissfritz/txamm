import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PolimwPage } from './polimw.page';

const routes: Routes = [
  {
    path: '',
    component: PolimwPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PolimwPageRoutingModule {}
