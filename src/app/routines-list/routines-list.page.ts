import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';



@Component({
  selector: 'app-routines-list',
  templateUrl: './routines-list.page.html',
  styleUrls: ['./routines-list.page.scss'],
})
export class RoutinesListPage implements OnInit {
  restTimer = 10;
  started = false;
  task: number
  timer: any = 0;
  maxTimer: any = 0;
  minutes: number = 1;
  seconds: any = 30;
  progress: any = 0;
  routines = []
  routineTime = []
  added: any;
  routineName = []
  interval
  percent: number = 0;
  radius: number = 100;

  constructor(public alertCtrl: AlertController ) {


    this.routines = [
      {
        name: ' Push up',
        time: 8.00,
        reps: " 5 reps"
      },

      {
        name: 'Sit Up ',
        time: 6.00,
        reps: " 5 reps"
      },
      {
        name: ' Push up ',
        time: 7.00,
        reps: " 5 reps"
      },
    ];
  }



  ngOnInit() {

  }

  addRoutine(number) {

    if (this.routineName.length < this.routines.length) {
      this.routineName = [
        this.routines[number].name.concat(this.routines[number].time , this.routines[number].reps)
      ],




        this.task = this.routines[number].time
      this.timer = this.task;
      this.maxTimer = this.task
      this.percent = this.timer;

    }




  }

  start() {
    console.log(this.task)
    console.log(this.maxTimer)
    var intervalVar = setInterval(function () {
      this.timer--;
      this.percent = this.timer;
      console.log(this.timer)
      if (this.timer == 0) {

        clearInterval(intervalVar)
        console.log('rest')

      }
      this.interval = intervalVar
    }.bind(this), 1000, 1000)
  }

  // startTime(){

  //   if(this.timer){
  //     return;
  //   }

  //   this.timer = false;
  //   this.percent =0
  //   this.progress = 0;

  //   let timeSplit = this.maxTimer.split(':');
  //   this.minutes = timeSplit[1]
  //   this.seconds = timeSplit[2];

  //   let totalSeconds = Math.floor(this.minutes * 60 ) + parseInt(this.seconds);

  //   this.timer = setInterval(() =>{

  //     if(this.percent == this.radius)
  //     clearInterval(this.timer);

  //     this.percent = Math.floor((this.progress / totalSeconds)* 100);
  //     this.progress++;

  //   },1000)

  // }


  async updateTask(index) {
    let alert = await this.alertCtrl.create({
      message: 'Type in your new task to update.',
      inputs: [{ name: 'editTask', placeholder: 'Task' }],
      buttons: [{ text: 'Cancel', role: 'cancel' },
      {
        text: 'Update', handler: data => {
          this.routines[index] = data.editTask;
        }
      }
      ]
    });
    alert.present();
  }

  stop() {
    clearInterval(this.interval)
    this.timer = 0;
  }

}
