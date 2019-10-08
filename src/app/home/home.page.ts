import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor( private navCtrl : NavController ) {

  }

  warmup(){
  this.navCtrl.navigateForward('/warmup')
  }

  routines(){
    this.navCtrl.navigateForward('/routines')
    }
}
