import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TdimPageRoutingModule } from './tdim-routing.module';

import { TdimPage } from './tdim.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TdimPageRoutingModule
  ],
  declarations: [TdimPage]
})
export class TdimPageModule {}
