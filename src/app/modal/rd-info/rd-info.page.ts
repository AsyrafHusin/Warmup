import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-rd-info',
  templateUrl: './rd-info.page.html',
  styleUrls: ['./rd-info.page.scss'],
})
export class RdInfoPage implements OnInit {

  constructor(private modalCtrl : ModalController) { }
  
  async closeModal(){
    await this.modalCtrl.dismiss();
    console.log('close')
  }
  ngOnInit() {
  }

}
