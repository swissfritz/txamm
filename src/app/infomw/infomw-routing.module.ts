import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InfomwPage } from './infomw.page';

const routes: Routes = [
  {
    path: '',
    component: InfomwPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InfomwPageRoutingModule {}
