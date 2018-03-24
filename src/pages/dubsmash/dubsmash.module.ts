import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DubsmashPage } from './dubsmash';

@NgModule({
  declarations: [
    DubsmashPage,
  ],
  imports: [
    IonicPageModule.forChild(DubsmashPage),
  ],
})
export class DubsmashPageModule {}
