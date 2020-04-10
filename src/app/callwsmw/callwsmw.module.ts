import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CallwsmwPageRoutingModule } from './callwsmw-routing.module';

import { CallwsmwPage } from './callwsmw.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CallwsmwPageRoutingModule
  ],
  declarations: [CallwsmwPage]
})
export class CallwsmwPageModule {}
