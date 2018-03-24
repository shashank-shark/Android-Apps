import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(private navCtrl: NavController) {

  }

  navigateToHogathonPage(): void {
    this.navCtrl.push('HogathonPage');
  }

  navigateToTreasureHuntPage(): void {
    this.navCtrl.push('TreasurehuntPage');
  }

  navigateToMadAdsPage(): void {
    this.navCtrl.push('MadadsPage');
  }

  navigateToSkitPage(): void {
    this.navCtrl.push('SkitPage');
  }

  navigateToAnthyakshariPage(): void {
    this.navCtrl.push('AnthyakshariPage');
  }

  navigateToBestOutOfWastePage(): void {
    this.navCtrl.push('BestoutofwastePage');
  }

  navigateToCartooningPage(): void {
    this.navCtrl.push('CartooningPage');
  }

  navigateToCookingWithoutFirePage(): void {
    this.navCtrl.push('CookingwithoutfirePage');
  }

  navigateToDumsmashPage(): void {
    this.navCtrl.push('DubsmashPage');
  }

  navigateToFacePaintingPage():void {
    this.navCtrl.push('FacepaintingPage');
  }

  navigateToFashionShowPage(): void {
    this.navCtrl.push('FashionshowPage');
  }

  navigateToGamingShowPage(): void {
    this.navCtrl.push('GamingPage');
  }

  navigateToGroupDancePage(): void {
    this.navCtrl.push('GroupdancePage');
  }

  navigateToGroupSingingPage(): void {
    this.navCtrl.push('GroupsingingPage');
  }

  navigateToInstrumentalPage(): void {
    this.navCtrl.push('InstrumentalPage');
  }

  navigateToMehendiPage(): void {
    this.navCtrl.push('MehendiPage');
  }

  navigateToMimePage(): void {
    this.navCtrl.push('MimePage');
  }

  navigateToMrAndMrsSvitPage(): void {
    this.navCtrl.push('MramdmssvitPage');
  }

  navigatToPaintingPage(): void {
    this.navCtrl.push('PaintingPage');
  }

  navigateToPhotographyPage(): void {
    this.navCtrl.push('PhotographyPage');
  }

  navigateToRangoliPage(): void {
    this.navCtrl.push('RangoliPage');
  }

  navigateToShortMoviePage(): void {
    this.navCtrl.push('ShortmoviePage');
  }

  navigateToSlowDragPage(): void {
    this.navCtrl.push('SlowdragPage');
  }
  navigateToSoloDancepage(): void {
    this.navCtrl.push('SolodancePage');
  }

  navigateToSoloSingingPage(): void {
    this.navCtrl.push('SolosingingPage');
  }
  navigateToSuperMinutePage(): void {
    this.navCtrl.push('SuperminutePage');
  }

  navigateToVegetableCarvingPage(): void {
    this.navCtrl.push('VegetablecarvingPage');
  }

}
