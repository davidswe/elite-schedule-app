import { Component } from '@angular/core';
import { NavController} from 'ionic-angular';
import {TeamsPage} from '../pages';

/*
  Generated class for the Tournament page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-tournament',
  templateUrl: 'tournament.html'
})
export class TournamentPage {

  constructor(private nav: NavController) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad TournamentPage');
  }

  itemTapped() {
    this.nav.push(TeamsPage);
  }

}
