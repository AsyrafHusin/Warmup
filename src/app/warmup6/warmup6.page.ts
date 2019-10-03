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
  starts = null;
   //Round Progress 
   current: number = 0;
   max: number = 5;
   stroke: number = 10;
   radius: number = 100;
 
  
  
  
  
  
    constructor( private navCtrl : NavController , private toastController : ToastController) { }
  
    ngOnInit() {
   document.getElementById('startwarmup6').click();
  
    }
  
  
    start(){
      if(this.running) return;
  
      var intervalVar = setInterval( async function(){
        this.timer++;
        this.current = this.timer
      if(this.timer == 5){
        this.timer = 0;
        this.current = this.current;
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
          this.current = this.timer;
          if (this.timer == 5){
            this.timer = 0 ;
            this.current = this.timer;
            clearInterval(intervalVars);
            this.navCtrl.navigateForward('/warmup')
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
        this.starts = intervalVars
      }
  
      }.bind(this),1000,1000)
      this.started = intervalVar;
      console.log('started')
      this.running = true;
  
      //REST TIMER
       
    }
  
    warmup(){
      this.navCtrl.navigateBack('/warmup')
      this.stop()
    }
  
  
    stop(){
      clearInterval(this.started)
      clearInterval(this.starts)
      this.timer = "0";
      this.current = 0;
      console.log('stopped')
      this.running = false;
    }
    next(){
      this.navCtrl.navigateForward('/warmup')
      this.stop();
    }

    back(){
      this.navCtrl.navigateBack('/warmup5')
      this.stop();
    }
  
  
    
  }
  