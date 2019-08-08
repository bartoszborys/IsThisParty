import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignComponent } from './sign.component';
import { SignRoutingModule } from './sign-routing.module';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { SignInfoComponent } from './components/sign-info/sign-info.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [SignComponent, SignInComponent, SignUpComponent, SignInfoComponent],
  imports: [
    CommonModule,
    SignRoutingModule,
    FontAwesomeModule,
    BrowserAnimationsModule
  ]
})
export class SignModule { }
