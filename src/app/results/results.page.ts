import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-results',
  templateUrl: './results.page.html',
  styleUrls: ['./results.page.scss'],
})
export class ResultsPage implements OnInit {

  constructor( private navCtrl : NavController) { }

  ngOnInit() {
  }

home(){
  this.navCtrl.navigateBack('/home')
}

}
