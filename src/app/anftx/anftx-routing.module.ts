import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AnftxPage } from './anftx.page';

const routes: Routes = [
  {
    path: '',
    component: AnftxPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AnftxPageRoutingModule {}
