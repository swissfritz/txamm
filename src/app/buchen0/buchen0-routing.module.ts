import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Buchen0Page } from './buchen0.page';

const routes: Routes = [
  {
    path: '',
    component: Buchen0Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Buchen0PageRoutingModule {}
