import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-rs-info',
  templateUrl: './rs-info.page.html',
  styleUrls: ['./rs-info.page.scss'],
})
export class RsInfoPage implements OnInit {

  constructor(private modalCtrl : ModalController) { }
  async closeModal(){
    await this.modalCtrl.dismiss();
    console.log('close')
  }
  ngOnInit() {
  }

}
