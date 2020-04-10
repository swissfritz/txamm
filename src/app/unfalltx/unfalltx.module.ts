import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UnfalltxPageRoutingModule } from './unfalltx-routing.module';

import { UnfalltxPage } from './unfalltx.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UnfalltxPageRoutingModule
  ],
  declarations: [UnfalltxPage]
})
export class UnfalltxPageModule {}
