import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {StandingsPage, MyTeamsPage, TeamDetailPage} from '../pages';
/*
  Generated class for the TeamHome page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-team-home',
  templateUrl: 'team-home.html'
})
export class TeamHomePage {
  teamDetailTab = TeamDetailPage;
  standingsTab = StandingsPage;
  team: any;

  constructor(private nav: NavController, public navParams: NavParams) {
    this.team = this.navParams.data;

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TeamHomePage');
  }

  goHome() {
    //this.push(MyTeamsPage);
    this.nav.popToRoot();
  }

}
