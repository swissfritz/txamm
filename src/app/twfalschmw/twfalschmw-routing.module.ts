import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TwfalschmwPage } from './twfalschmw.page';

const routes: Routes = [
  {
    path: '',
    component: TwfalschmwPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TwfalschmwPageRoutingModule {}
