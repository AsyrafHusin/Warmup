import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';



@Component({
  selector: 'app-routines-c',
  templateUrl: './routines-c.page.html',
  styleUrls: ['./routines-c.page.scss'],
})
export class RoutinesCPage implements OnInit {

  constructor(public modalController: ModalController , private navCtrl : NavController) { }

  ngOnInit( ) {
  }

  addRoutine(){
    
  }

  routines(){
    this.navCtrl.navigateBack('/routines')
  }


}
