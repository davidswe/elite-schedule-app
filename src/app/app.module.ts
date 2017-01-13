import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import {MyTeamsPage} from '../pages/my-teams/my-teams.page';
import {TournamentPage } from '../pages/tournament/tournament';
import {TeamsPage} from '../pages/teams/teams.page';
import {TeamDetailPage} from '../pages/team-detail/team-detail';
import {StandingsPage} from '../pages/standings/standings';
import {TeamHomePage} from '../pages/team-home/team-home';

@NgModule({
  declarations: [
    MyApp,
    MyTeamsPage,
    TournamentPage,
    TeamsPage,
    TeamDetailPage,
    StandingsPage,
    TeamHomePage

  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    MyTeamsPage,
    TournamentPage,
    TeamsPage,
    TeamDetailPage,
    StandingsPage,
    TeamHomePage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
