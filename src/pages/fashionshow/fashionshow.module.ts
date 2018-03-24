import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FashionshowPage } from './fashionshow';

@NgModule({
  declarations: [
    FashionshowPage,
  ],
  imports: [
    IonicPageModule.forChild(FashionshowPage),
  ],
})
export class FashionshowPageModule {}
