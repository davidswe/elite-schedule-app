import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {MyTeamsPage} from '../pages';

/*
  Generated class for the TeamDetail page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-team-detail',
  templateUrl: 'team-detail.html'
})
export class TeamDetailPage {

  team: any;
  constructor(private nav: NavController,  private navParams: NavParams) {
    this.team = this.navParams.data;
    console.log('**nav params', this.navParams)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TeamDetailPage');
  }

  goHome() {
    this.nav.parent.parent.popToRoot();
  }

}
