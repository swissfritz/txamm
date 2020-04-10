import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Call0txPageRoutingModule } from './call0tx-routing.module';

import { Call0txPage } from './call0tx.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Call0txPageRoutingModule
  ],
  declarations: [Call0txPage]
})
export class Call0txPageModule {}
