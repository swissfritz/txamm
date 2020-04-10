import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TxfahrPageRoutingModule } from './txfahr-routing.module';

import { TxfahrPage } from './txfahr.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TxfahrPageRoutingModule
  ],
  declarations: [TxfahrPage]
})
export class TxfahrPageModule {}
