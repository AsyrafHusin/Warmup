import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

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
 


  constructor(private navCtrl : NavController) { 

   
  }

  ngOnInit() {

    document.getElementById('start').click()
  }


  

start(){

  if(this.running) return;

  var interval = setInterval(function(){
    this.timer++;

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

}
