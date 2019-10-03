import { Component, OnInit } from '@angular/core';
import { NavController, ModalController, PopoverController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-routines-s',
  templateUrl: './routines-s.page.html',
  styleUrls: ['./routines-s.page.scss'],
})
export class RoutinesSPage implements OnInit {
  started: any = false;
  overallProgress: any = 0;
  maxTimer = 0
  timer: number = 0
  loop = 6
  // routine:[];

  intervalA: any = false
  intervalB: any = false

  constructor(private navCtrl: NavController, private toastCtrl: ToastController) {

    let routine: any = [
      {
        routine: 'Push up',
        time: 30
      },
      {
        routine: 'Pull up',
        time: 15
      },
      {
        routine: 'Sit Up',
        time: 20
      }
    ]

    this.maxTimer = 5;

  }

  ngOnInit() {
    document.getElementById("progressBar").style.display = "none"
    document.getElementById("round").style.display = "none"
    document.getElementById("timer").style.display = "none"
    document.getElementById("nbtn").style.display = "none"
    document.getElementById("bbtn").style.display = "none"
  }


  routines() {
    this.navCtrl.navigateRoot('/routines')
    this.stopTimer();
  }

  async runToast() {
    const toast = await this.toastCtrl.create({
      message: "Starting",
      duration: 900,
      animated: true,
      position: "middle",
    });
    toast.present();
  }

  async runToastR() {
    const toast = await this.toastCtrl.create({
      message: "Rest",
      duration: 900,
      animated: true,
      position: "middle",
    });
    toast.present();
  }
  async runToastN() {
    const toast = await this.toastCtrl.create({
      message: "Next Routine",
      duration: 900,
      animated: true,
      position: "middle",
    });
    toast.present();
  }

  async runToastC() {
    const toast = await this.toastCtrl.create({
      message: "Completed",
      duration: 900,
      animated: true,
      position: "middle",
    });
    toast.present();
  }


  timeStart() {
    //Initial Timer
    var intervalVar = setInterval(() => {
      this.timer++;
      // console.log(this.timer)

      //Rest Timer
      if (this.timer == 8) {
        clearInterval(intervalVar)
        this.runToastR();
        console.log('rest')
        var intervalVarR = setInterval(() => {
          this.timer--;
          console.log(this.timer);
          console.log(this.loop)



          //next routine
          if (this.timer == 0) {
            this.loop--;
            this.overallProgress += .1;
            console.log(this.loop)
            clearInterval(intervalVarR)
            if (this.loop == 5) {
              this.runToastN();
              this.showRoutine2();
              this.timeStart();
              this.overallProgress += .1;
              console.log(this.overallProgress)

            } else if (this.loop == 4) {
              this.runToastN();
              this.showRoutine3();
              this.timeStart();
              this.overallProgress += .1;
              console.log(this.overallProgress)

            } else if (this.loop == 3) {
              this.runToastN();
              this.showRoutine4();
              this.timeStart();
              this.overallProgress += .1;
              console.log(this.overallProgress)

            } else if (this.loop == 2) {
              this.runToastN();
              this.showRoutine5();
              this.timeStart();
              this.overallProgress += .1;
              console.log(this.overallProgress)

            } else if (this.loop == 1) {
              this.runToastN();
              this.overallProgress += .1;
              this.showRoutine6();
              this.timeStart();

              console.log(this.overallProgress)
            } else if (this.loop == 0) {
              this.runToastC();
              this.showRoutineN();

            }
          }
        }, 1000, 1000)
        this.intervalB = intervalVarR
      }
    }, 1000, 1000)

    this.intervalA = intervalVar;
    this.started = true;


  }



  startTimer() {
    this.overallProgress = 0;
    this.loop = 6;
    this.runToast();
    if (this.started) {
      return
    }
    this.started = true
    this.timeStart();
    this.showRoutine1();
  }

  stopTimer() {
    console.log('stopped')
    clearInterval(this.intervalA)
    clearInterval(this.intervalB)
  }

  nextR() {
    this.stopTimer();
    if (this.loop == 6) {
      this.showRoutine2();
      this.timeStart();
      this.timer = 0;
      this.loop--;
      this.overallProgress += .2
    } else if (this.loop == 5) {
      this.showRoutine3();
      this.timer = 0;
      this.loop--;
      this.timeStart();
      this.overallProgress += .2

    } else if (this.loop == 4) {
      this.loop--;
      this.timer = 0;
      this.showRoutine4();
      this.timeStart();
      this.overallProgress += .2

    } else if (this.loop == 3) {
      this.loop--;
      this.timer = 0;
      this.showRoutine5();
      this.timeStart();
      this.overallProgress += .2

    } else if (this.loop == 2) {
      this.loop--;
      this.timer = 0;
      this.showRoutine6();
      this.timeStart();
      this.overallProgress += .2

    } else if (this.loop == 1) {
      if (this.overallProgress == 1) {
        this.showRoutineN();
        this.runToastC();
        return
      }
    }

  }

  
  nextB () {
    this.stopTimer();
    if(this.loop == 6 ){
      console.log(this.loop, 'test')
      return
    }
    if (this.loop == 5) {
      console.log(this.loop)
      this.showRoutine1();
      this.timeStart();
      this.timer = 0;
      this.loop++;
      this.overallProgress -= .2
    } else if (this.loop == 4) {
      console.log( this.loop)
      this.showRoutine2();
      this.timer = 0;
      this.loop++;
      this.timeStart();
      this.overallProgress -= .2

    } else if (this.loop == 3) {
      this.loop++;
      console.log(this.loop)
      this.timer = 0;
      this.showRoutine3();
      this.timeStart();
      this.overallProgress -= .2

    } else if (this.loop == 2) {
      this.loop++;
      console.log(this.loop)
      this.timer = 0;
      this.showRoutine4();
      this.timeStart();
      this.overallProgress -= .2

    } else if (this.loop == 1) {
      this.loop++;
      console.log(this.loop)
      this.timer = 0;
      this.showRoutine5();
      this.timeStart();
      this.overallProgress -= .2
    }

  }



  showRoutine1() {
    document.getElementById("routine1").style.display = "block"
    document.getElementById("routine2").style.display = "none"
    document.getElementById("routine3").style.display = "none"
    document.getElementById("routine4").style.display = "none"
    document.getElementById("routine5").style.display = "none"
    document.getElementById("routine6").style.display = "none"
    document.getElementById("progressBar").style.display = "block"
    document.getElementById("round").style.display = "block"
    document.getElementById("timer").style.display = "block"
    document.getElementById("bbtn").style.display = "block"
    document.getElementById("nbtn").style.display = "block"


  }

  showRoutine2() {
    document.getElementById("routine1").style.display = "none"
    document.getElementById("routine2").style.display = "block"
    document.getElementById("routine3").style.display = "none"
    document.getElementById("routine4").style.display = "none"
    document.getElementById("routine5").style.display = "none"
    document.getElementById("routine6").style.display = "none"
    // document.getElementById("progressBar").style.display="block"


  }


  showRoutine3() {
    document.getElementById("routine1").style.display = "none"
    document.getElementById("routine2").style.display = "none"
    document.getElementById("routine3").style.display = "block"
    document.getElementById("routine4").style.display = "none"
    document.getElementById("routine5").style.display = "none"
    document.getElementById("routine6").style.display = "none"
    // document.getElementById("progressBar").style.display="block"


  }
  showRoutine4() {
    document.getElementById("routine1").style.display = "none"
    document.getElementById("routine2").style.display = "none"
    document.getElementById("routine3").style.display = "none"
    document.getElementById("routine4").style.display = "block"
    document.getElementById("routine5").style.display = "none"
    document.getElementById("routine6").style.display = "none"
    // document.getElementById("progressBar").style.display="block"


  }
  showRoutine5() {
    document.getElementById("routine1").style.display = "none"
    document.getElementById("routine2").style.display = "none"
    document.getElementById("routine3").style.display = "none"
    document.getElementById("routine4").style.display = "none"
    document.getElementById("routine5").style.display = "block"
    document.getElementById("routine6").style.display = "none"
    // document.getElementById("progressBar").style.display="block"


  }
  showRoutine6() {
    document.getElementById("routine1").style.display = "none"
    document.getElementById("routine2").style.display = "none"
    document.getElementById("routine3").style.display = "none"
    document.getElementById("routine4").style.display = "none"
    document.getElementById("routine5").style.display = "none"
    document.getElementById("routine6").style.display = "block"
    // document.getElementById("progressBar").style.display="block"


  }

  showRoutineN() {
    document.getElementById("routine1").style.display = "block"
    document.getElementById("routine2").style.display = "block"
    document.getElementById("routine3").style.display = "block"
    document.getElementById("routine4").style.display = "block"
    document.getElementById("routine5").style.display = "block"
    document.getElementById("routine6").style.display = "block"
    document.getElementById("progressBar").style.display = "none"
    document.getElementById("round").style.display = "none"
    document.getElementById("bbtn").style.display = "none"
    document.getElementById("nbtn").style.display = "none"
    document.getElementById("timer").style.display = "none"
    this.started = false;


  }
}
