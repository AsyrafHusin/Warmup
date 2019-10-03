import { Component, OnInit } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';


@Component({
  selector: 'app-warmup3',
  templateUrl: './warmup3.page.html',
  styleUrls: ['./warmup3.page.scss'],
})
export class Warmup3Page implements OnInit {
timer = 0
tVariable = null;
rVariable = null;
running = false;

//Round Progress 
current: number = 0;
max: number = 5;
stroke: number = 10;
radius: number = 100;


  constructor(private navCtrl : NavController, private toastController : ToastController) { }

  ngOnInit() {
    document.getElementById('startwarmup3').click();
  }


  start(){
    if(this.running)return;

    var intervalVar = setInterval( async function(){
      this.timer++;
      this.current = this.timer
      if(this.timer == 5){
        this.timer = 0
        this.current = this.timer;
        clearInterval(intervalVar);
        console.log('rest')

        const toast = await this.toastController.create({
          message:'Rest',
          duration: 1000,
          animated: true,
          position: "middle"
        });
        toast.present();

        var intervalVarR = setInterval( async function(){
          this.timer++;
          this.current = this.timer
          if(this.timer == 5){
            this.timer = 0;
            clearInterval(intervalVarR);
            this.navCtrl.navigateForward('/warmup4')
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
        this.rVariable = intervalVarR
      }
   
    }.bind(this),1000,1000)
    this.tVariable = intervalVar
    console.log('started')
    this.running = true;
  }


  stop(){
    clearInterval(this.tVariable)
    clearInterval(this.rVariable)
    this.timer = 0;
    this.current = 0;
    console.log('stopped')
  }

  warmup(){
    this.navCtrl.navigateBack('/warmup')
    this.stop();
  }

  next(){
    this.navCtrl.navigateForward('/warmup4')
    this.stop();
  }

  back(){
    this.navCtrl.navigateBack('/warmup2')
    this.stop();
  }
}
