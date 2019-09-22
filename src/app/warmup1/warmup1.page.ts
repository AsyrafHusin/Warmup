import { Component, OnInit } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-warmup1',
  templateUrl: './warmup1.page.html',
  styleUrls: ['./warmup1.page.scss'],
})
export class Warmup1Page implements OnInit {

  timer = "0"
  starts = null;
  running = false;

  constructor(private navCtrl : NavController, private toast : ToastController) { }

  ngOnInit() {
    document.getElementById('startwarmup1').click()
  }

start(){

    if(this.running) return;
  
    var interval = setInterval(async function(){
      this.timer++;

      const toast = await this.toast.create
  
    }.bind(this),1000, 1000)
    this.starts = interval;
    console.log('started')
    this.running = true;
  
}


stop(){
  clearInterval(this.starts)
  this.timer = "0";
  console.log('stopped')
  this.running = false;
}

warmup(){
  this.navCtrl.navigateBack('/warmup');
  this.stop();
}

next(){
  this.navCtrl.navigateBack('/warmup2')
  this.stop();
}

back(){
  this.navCtrl.navigateBack('/startTimer')
  this.stop();
}

}
