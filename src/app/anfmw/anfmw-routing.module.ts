import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AnfmwPage } from './anfmw.page';

const routes: Routes = [
  {
    path: '',
    component: AnfmwPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AnfmwPageRoutingModule {}
