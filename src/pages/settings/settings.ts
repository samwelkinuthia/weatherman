import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { HomePage} from "../home/home";

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {
  town: string;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private storage: Storage,
    public toastCtrl: ToastController
  ) {
      this.storage.get('location').then((val) =>{
        if(val != null) {
          let location = JSON.parse(val);
          this.town = location.town;
        } else {
          this.town = 'Nairobi';
        }
      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');
  }

  saveForm() {
    let location = {
      town: this.town
    };
    // console.log(location);
    this.storage.set('location', JSON.stringify(location));
    this.navCtrl.push(HomePage);

    this.toastCtrl.create({
      message: 'Town Updated, now you can view the conditions for ' + this.town,
      duration: 3000
    }).present();

  }

}
