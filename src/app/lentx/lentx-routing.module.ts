import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LentxPage } from './lentx.page';

const routes: Routes = [
  {
    path: '',
    component: LentxPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LentxPageRoutingModule {}
