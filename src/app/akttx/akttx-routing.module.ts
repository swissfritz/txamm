import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AkttxPage } from './akttx.page';

const routes: Routes = [
  {
    path: '',
    component: AkttxPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AkttxPageRoutingModule {}
