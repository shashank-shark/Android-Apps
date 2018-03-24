import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InstrumentalPage } from './instrumental';

@NgModule({
  declarations: [
    InstrumentalPage,
  ],
  imports: [
    IonicPageModule.forChild(InstrumentalPage),
  ],
})
export class InstrumentalPageModule {}
