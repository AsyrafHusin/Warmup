import { Component, OnInit } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-warmup',
  templateUrl: './warmup.page.html',
  styleUrls: ['./warmup.page.scss'],
})
export class WarmupPage implements OnInit {

  timeArray = [];

  constructor( private navCtrl : NavController , private toastCtrl : ToastController) { 


  }



  ngOnInit() {
  }

  async startTimer(){

    const toast = await this.toastCtrl.create({
      message: "Starting",
      position: "middle",
      duration: 500
    });
   toast.present();

   this.navCtrl.navigateForward('/startTimer')
  } 
  

}
