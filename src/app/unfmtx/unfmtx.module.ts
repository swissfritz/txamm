import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UnfmtxPageRoutingModule } from './unfmtx-routing.module';

import { UnfmtxPage } from './unfmtx.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UnfmtxPageRoutingModule
  ],
  declarations: [UnfmtxPage]
})
export class UnfmtxPageModule {}
