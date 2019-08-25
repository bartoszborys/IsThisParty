import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignComponent } from './sign.component';
import { SignRoutingModule } from './sign-routing.module';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    SignComponent, 
    SignInComponent, 
    SignUpComponent
  ],
  imports: [
    NgbModule,
    CommonModule,
    SignRoutingModule,
    FontAwesomeModule,
    FormsModule
  ]
})
export class SignModule { }
