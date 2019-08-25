import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { MainRoutingModule } from './main-routing.module';
import { TestViewComponent } from './components/test-view/test-view.component';
import { NavigationComponent } from './components/navigation/navigation.component';

@NgModule({
  declarations: [MainComponent, TestViewComponent, NavigationComponent],
  imports: [
    CommonModule,
    MainRoutingModule
  ]
})
export class MainModule { }
