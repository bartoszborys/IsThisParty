import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main.component';
import { TestViewComponent } from './components/test-view/test-view.component';
import { AuthGuard } from 'src/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: 'test',
        component: TestViewComponent
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
