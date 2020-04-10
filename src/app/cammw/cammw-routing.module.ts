import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CammwPage } from './cammw.page';

const routes: Routes = [
  {
    path: '',
    component: CammwPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CammwPageRoutingModule {}
