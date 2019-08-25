import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { MainRoutingModule } from './main-routing.module';
import { NavigationComponent } from './components/navigation/navigation.component';
import { PartyListComponent } from './components/party-list/party-list.component';
import { PartyComponent } from './components/party/party.component';
import { MainInfoComponent } from './components/main-info/main-info.component';

@NgModule({
  declarations: [MainComponent, NavigationComponent, PartyListComponent, PartyComponent, MainInfoComponent],
  imports: [
    CommonModule,
    MainRoutingModule
  ]
})
export class MainModule { }
