import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StarttxPage } from './starttx.page';

const routes: Routes = [
  {
    path: '',
    component: StarttxPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StarttxPageRoutingModule {}
