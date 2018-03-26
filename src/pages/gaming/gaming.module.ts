import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GamingPage } from './gaming';
import { IonicImageLoader } from 'ionic-image-loader';

@NgModule({
  declarations: [
    GamingPage,
  ],
  imports: [
    IonicPageModule.forChild(GamingPage),
    IonicImageLoader
  ],
})
export class GamingPageModule {}
