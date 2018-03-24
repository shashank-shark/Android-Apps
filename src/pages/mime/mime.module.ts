import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MimePage } from './mime';

@NgModule({
  declarations: [
    MimePage,
  ],
  imports: [
    IonicPageModule.forChild(MimePage),
  ],
})
export class MimePageModule {}
