import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main.component';
import { AuthGuard } from 'src/guards/auth.guard';
import { PartyListComponent } from './components/party-list/party-list.component';
import { PartyComponent } from './components/party/party.component';
import { MainInfoComponent } from './components/main-info/main-info.component';

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
        component: PartyComponent
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
