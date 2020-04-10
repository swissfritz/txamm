import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CammwPageRoutingModule } from './cammw-routing.module';

import { CammwPage } from './cammw.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CammwPageRoutingModule
  ],
  declarations: [CammwPage]
})
export class CammwPageModule {}
