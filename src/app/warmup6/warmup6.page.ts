import { Component, OnInit } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-warmup6',
  templateUrl: './warmup6.page.html',
  styleUrls: ['./warmup6.page.scss'],
})
export class Warmup6Page implements OnInit {
  timer = "0";
  running = false;
  started = null;
  
  
  
  
  
    constructor( private navCtrl : NavController , private toastController : ToastController) { }
  
    ngOnInit() {
   document.getElementById('startwarmup6').click();
  
    }
  
  
    start(){
      if(this.running) return;
  
      var intervalVar = setInterval( async function(){
        this.timer++;
  
      if(this.timer == 5){
        this.timer = 0;
        clearInterval(intervalVar);
        console.log('rest');
        
        const toast =  await this.toastController.create({
          message: 'Rest',
          duration: 1000,
          animated: true,
          position: "middle",
        });
        toast.present();
  
        //REST TIMER
        
        var intervalVars = setInterval( async function(){
          this.timer++;
  
          if (this.timer == 5){
            this.timer = 0 ;
            clearInterval(intervalVars);
            this.navCtrl.navigateForward('/results')
            console.log('next');
  
            const toast = await this.toastController.create({
              message: 'Next',
              duration: 1000,
              animated: true,
              position: "middle",
            });
            toast.present();
          }
        }.bind(this),1000,1000)
  
      }
  
      }.bind(this),1000,1000)
      this.started = intervalVar;
      console.log('started')
      this.running = true;
  
      //REST TIMER
       
    }
  
    backbtn(){
      this.navCtrl.navigateBack('/warmup')
      this.stop()
    }
  
  
    stop(){
      clearInterval(this.started)
      this.timer = "0";
      console.log('stopped')
      this.running = false;
    }
    next(){
      this.navCtrl.navigateForward('/results')
      this.stop();
    }
  
  
    
  }
  