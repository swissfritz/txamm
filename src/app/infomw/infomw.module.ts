import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InfomwPageRoutingModule } from './infomw-routing.module';

import { InfomwPage } from './infomw.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InfomwPageRoutingModule
  ],
  declarations: [InfomwPage]
})
export class InfomwPageModule {}
