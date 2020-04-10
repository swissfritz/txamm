import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AustttxPage } from './austttx.page';

const routes: Routes = [
  {
    path: '',
    component: AustttxPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AustttxPageRoutingModule {}
