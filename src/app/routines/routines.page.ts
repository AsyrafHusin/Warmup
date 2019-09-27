import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-routines',
  templateUrl: './routines.page.html',
  styleUrls: ['./routines.page.scss'],
})
export class RoutinesPage implements OnInit {

  constructor(private navCtrl : NavController ) { }

  ngOnInit() {
  }
  routinesC(){
    this.navCtrl.navigateForward('/routinesC')
  }

  routinesD(){
    this.navCtrl.navigateForward('/routinesD')
  }

  routinesS(){
    this.navCtrl.navigateForward('/routinesS')
  }

 

 selection(){
   this.navCtrl.navigateBack('/home')
 }





}
