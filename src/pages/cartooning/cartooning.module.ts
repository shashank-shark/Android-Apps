import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CartooningPage } from './cartooning';

@NgModule({
  declarations: [
    CartooningPage,
  ],
  imports: [
    IonicPageModule.forChild(CartooningPage),
  ],
})
export class CartooningPageModule {}
