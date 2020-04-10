import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AusttmwPageRoutingModule } from './austtmw-routing.module';

import { AusttmwPage } from './austtmw.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AusttmwPageRoutingModule
  ],
  declarations: [AusttmwPage]
})
export class AusttmwPageModule {}
