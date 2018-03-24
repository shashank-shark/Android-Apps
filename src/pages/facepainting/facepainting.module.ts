import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FacepaintingPage } from './facepainting';

@NgModule({
  declarations: [
    FacepaintingPage,
  ],
  imports: [
    IonicPageModule.forChild(FacepaintingPage),
  ],
})
export class FacepaintingPageModule {}
