import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AnfmwPageRoutingModule } from './anfmw-routing.module';

import { AnfmwPage } from './anfmw.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AnfmwPageRoutingModule
  ],
  declarations: [AnfmwPage]
})
export class AnfmwPageModule {}
