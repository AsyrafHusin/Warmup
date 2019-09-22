import { Component, OnInit } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';



@Component({
  selector: 'app-start-timer',
  templateUrl: './start-timer.page.html',
  styleUrls: ['./start-timer.page.scss'],
})
export class StartTimerPage implements OnInit {
  maxTimer = 0;
  timer = 0;
  stat = null;
  running = false;
 


  constructor(private navCtrl : NavController , private toastController : ToastController) { 

   
  }

  ngOnInit() {

    document.getElementById('start').click()
  }


  

start(){

  if(this.running) return;

  var interval = setInterval(async function(){
    this.timer++;
    if(this.timer == 5){
      this.timer = 0 ;
      clearInterval(interval);
      console.log ('rest');

      const toast = await this.toastController.create({
        message: 'Rest',
        duration: 1000,
        animated: true,
        position: "middle"
      });
      toast.present();

      //REST TIMER

      var intervals = setInterval(async function(){
        this.timer++;
        if(this.timer == 5){
          this.navCtrl.navigateForward('/warmup1')
          this.timer = 0;
          clearInterval(intervals)
          console.log('next');

          const toast = await this.toastController.create({
            message: 'next',
            duration: 1000,
            animated: true,
            position: "middle"
          });
          toast.present();
        }
      }.bind(this),1000,1000)
    }
  

  }.bind(this),1000, 1000)
  this.stat = interval;
  console.log('started')
  this.running = true;
}


stop(){
  clearInterval(this.stat)
  this.timer = 0;
  console.log('stopped')
}

warmup(){
  this.navCtrl.navigateBack('/warmup');
  this.stop();
}

next(){
  this.navCtrl.navigateForward('/warmup1')
  this.stop();

}



}
