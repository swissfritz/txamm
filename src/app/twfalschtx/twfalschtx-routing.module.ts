import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TwfalschtxPage } from './twfalschtx.page';

const routes: Routes = [
  {
    path: '',
    component: TwfalschtxPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TwfalschtxPageRoutingModule {}
