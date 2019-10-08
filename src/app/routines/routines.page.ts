import { Component, OnInit } from '@angular/core';
import { NavController, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-routines',
  templateUrl: './routines.page.html',
  styleUrls: ['./routines.page.scss'],
})
export class RoutinesPage implements OnInit {

  constructor(private navCtrl : NavController , private modalCtrl : ModalController) { }

  ngOnInit() {
  }
  routinesC(){
    // e.preventDefault();
    // e.stopPropagation();
    this.navCtrl.navigateForward('/routinesC')
  }

  routinesD(){
    // e.preventDefault();
    // e.stopPropagation();
    this.navCtrl.navigateForward('/routinesD')
  }

  routinesS(){
    // e.preventDefault();
    // e.stopPropagation();

    this.navCtrl.navigateForward('/routinesS')
  }

  // async rsinfo(){
  //   const modal = await this.modalCtrl.create({
  //     component: RsInfoPage
  //   })
  //   return await modal.present();
  // }

  // async rdinfo(){
  //   const modal = await this.modalCtrl.create({
  //     component: RdInfoPage
  //   })
  //   return await modal.present();
  // }



  home(){
    this.navCtrl.navigateBack('/home')
  }
 


 selection(){
   this.navCtrl.navigateRoot('/home')
 }





}
