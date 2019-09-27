import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-routines-list',
  templateUrl: './routines-list.page.html',
  styleUrls: ['./routines-list.page.scss'],
})
export class RoutinesListPage implements OnInit {
restTimer = 10;
timer:number= 0
maxTimer:number = 30;
routines = []
routineTime = []
added = false;
routineName = []

  constructor(public alertCtrl : AlertController,  ) { 

    
    this.routines = [
     {name: 'Push up',
        time: ' 6:00',
        reps: ' 5 reps'
      },
      
     {name: 'Sit Up',
      time: ' 5:00',
      reps: ' 5 reps'
    },
    {name: 'Push up',
      time: ' 3:00',
      reps: ' 5 reps'
  },
    ];
    
    
   
  
  }

  

  ngOnInit() {
    
  }

addRoutine(number){
    
    if(this.routineName.length < this.routines.length){
      this.routineName = [
        this.routines[number].name.concat(this.routines[number].time, this.routines[number].reps)
      ]
      let task = this.routines[number].time
      
     
    }
   
    
  
    console.log(this.routineName)
  
  

    
  
}


async updateTask(index) {
  let alert = await this.alertCtrl.create({
      message: 'Type in your new task to update.',
      inputs: [{ name: 'editTask', placeholder: 'Task' }],
      buttons: [{ text: 'Cancel', role: 'cancel' },
                { text: 'Update', handler: data => {
                    this.routines[index] = data.editTask; }
                }
               ]
  });
  alert.present();
}

}
