import { Component, OnInit } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-warmup5',
  templateUrl: './warmup5.page.html',
  styleUrls: ['./warmup5.page.scss'],
})
export class Warmup5Page implements OnInit {
  timer = 0;
  tVariable = null;
  rVariable = null;
  running = false;
    constructor(private navCtrl : NavController , private toastController : ToastController) { }
  
    ngOnInit() {
      document.getElementById('startwarmup5').click();
    }
  
    start(){
      if(this.running)return;
  
      var intervalVar = setInterval( async function(){
        this.timer++;
        if(this.timer == 5){
          this.timer = 0
          clearInterval(intervalVar);
          console.log('rest')
  
          const toast = await this.toastController.create({
            message : 'Rest',
            duration : 1000,
            animated : true,
            position : "middle"
          })
          toast.present();
  
          var intervalVarR = setInterval( async function(){
            this.timer++;
            if(this.timer == 5){
              this.timer = 0; 
              clearInterval(intervalVarR);
              this.navCtrl.navigateForward('/warmup6')
              console.log('next');
              
              const toast = await  this.toastController.create({
                message: 'next',
                duration: 1000,
                animated: true,
                position: "middle"
              });
              toast.present();
            }
          }.bind(this),1000,1000)
          this.rVariable = intervalVarR
        }
  
      }.bind(this),1000,1000)
      this.rVariable = intervalVar
      console.log('started')
      this.running = true;
   }
  
   stop(){
     clearInterval(this.tVariable)
     clearInterval(this.rVariable)
     this.timer = 0
     console.log('stopped')
   }
  
   warmup(){
     this.navCtrl.navigateBack('/warmup')
   }
  
   next(){
     this.navCtrl.navigateForward('/warmup6')
     this.stop();
   }
  
  }
  
