import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SkitPage } from './skit';

@NgModule({
  declarations: [
    SkitPage,
  ],
  imports: [
    IonicPageModule.forChild(SkitPage),
  ],
})
export class SkitPageModule {}
