import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Call0mwPageRoutingModule } from './call0mw-routing.module';

import { Call0mwPage } from './call0mw.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Call0mwPageRoutingModule
  ],
  declarations: [Call0mwPage]
})
export class Call0mwPageModule {}
