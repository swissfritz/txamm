import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PannemwPageRoutingModule } from './pannemw-routing.module';

import { PannemwPage } from './pannemw.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PannemwPageRoutingModule
  ],
  declarations: [PannemwPage]
})
export class PannemwPageModule {}
