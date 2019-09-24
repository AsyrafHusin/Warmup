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
  started = null;
  running = false;

  constructor(private navCtrl : NavController, private toast : ToastController) { }

  ngOnInit() {
    document.getElementById('startwarmup1').click()
  }

start(){

    if(this.running) return;
  
    var interval = setInterval(async function(){
      this.timer++;

      if ( this.timer == 5){
        console.log ('rest');
        this.timer = 0;
        clearInterval(interval);

        const toast = await this.toast.create({
              message : 'Rest',
              duration : 1000,
              position : "middle",
              animated : true 
            });
            toast.present();

        var intervals = setInterval( async function(){
          this.timer++;

          
          if (this.timer == 5 ){
            this.timer = 0;
            clearInterval(intervals);
            console.log('next')
            this.navCtrl.navigateForward('/warmup2')
            
            
            const toast = await this.toast.create({
              message : 'nxt',
              duration : 1000,
              position : "middle",
              animated : true 
            })
            toast.present();  
          }
        }.bind(this),1000,1000)
        this.started = intervals
      }

  
    }.bind(this),1000, 1000)
    this.starts = interval;
    console.log('started')
    this.running = true;
  
}


stop(){
  clearInterval(this.starts)
  clearInterval(this.started)
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
