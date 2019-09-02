import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main.component';
import { AuthGuard } from 'src/guards/auth.guard';
import { PartyListComponent } from './components/party-list/party-list.component';
import { PartyComponent } from './components/party/party.component';
import { MainInfoComponent } from './components/main-info/main-info.component';
import { PartyInfoComponent } from './components/party/components/party-info/party-info.component';
import { PartyParticipantsComponent } from './components/party/components/party-participants/party-participants.component';
import { PartyStuffComponent } from './components/party/components/party-stuff/party-stuff.component';
import { PartyCommentsComponent } from './components/party/components/party-comments/party-comments.component';
import { PartyVoteComponent } from './components/party/components/party-vote/party-vote.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        component: MainInfoComponent
      },
      {
        path: 'parties',
        component: PartyListComponent
      },
      {
        path: 'parties/:id',
        component: PartyComponent,
        children: [
          {
            path: '',
            component: PartyInfoComponent
          },
          {
            path: 'participants',
            component: PartyParticipantsComponent
          },
          {
            path: 'stuff',
            component: PartyStuffComponent
          },
          {
            path: 'vote',
            component: PartyVoteComponent
          },
          {
            path: 'comments',
            component: PartyCommentsComponent
          }
        ]
      }
    ]
  },
  {
    path: "**",
    redirectTo: 'sign'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
