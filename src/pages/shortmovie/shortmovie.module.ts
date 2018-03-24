import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ShortmoviePage } from './shortmovie';

@NgModule({
  declarations: [
    ShortmoviePage,
  ],
  imports: [
    IonicPageModule.forChild(ShortmoviePage),
  ],
})
export class ShortmoviePageModule {}
