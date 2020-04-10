import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AnftxPageRoutingModule } from './anftx-routing.module';

import { AnftxPage } from './anftx.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AnftxPageRoutingModule
  ],
  declarations: [AnftxPage]
})
export class AnftxPageModule {}
