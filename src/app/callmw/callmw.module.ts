import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CallmwPageRoutingModule } from './callmw-routing.module';

import { CallmwPage } from './callmw.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CallmwPageRoutingModule
  ],
  declarations: [CallmwPage]
})
export class CallmwPageModule {}
