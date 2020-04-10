import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StartmwPageRoutingModule } from './startmw-routing.module';

import { StartmwPage } from './startmw.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StartmwPageRoutingModule
  ],
  declarations: [StartmwPage]
})
export class StartmwPageModule {}
