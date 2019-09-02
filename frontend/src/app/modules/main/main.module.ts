import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { MainRoutingModule } from './main-routing.module';
import { NavigationComponent } from './components/navigation/navigation.component';
import { PartyListComponent } from './components/party-list/party-list.component';
import { PartyComponent } from './components/party/party.component';
import { MainInfoComponent } from './components/main-info/main-info.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PartyInfoComponent } from './components/party/components/party-info/party-info.component';
import { PartyParticipantsComponent } from './components/party/components/party-participants/party-participants.component';
import { PartyStuffComponent } from './components/party/components/party-stuff/party-stuff.component';
import { PartyVoteComponent } from './components/party/components/party-vote/party-vote.component';
import { PartyCommentsComponent } from './components/party/components/party-comments/party-comments.component';
import { SpinnerDirective } from './directives/spinner.directive';

@NgModule({
  declarations: [
    MainComponent, 
    NavigationComponent, 
    PartyListComponent, 
    PartyComponent, 
    MainInfoComponent, 
    PartyInfoComponent, 
    PartyParticipantsComponent, 
    PartyStuffComponent, 
    PartyVoteComponent, 
    PartyCommentsComponent, 
    SpinnerDirective
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    NgbModule
  ]
})
export class MainModule { }
