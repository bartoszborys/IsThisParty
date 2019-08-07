import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignComponent } from './sign.component';
import { SignRoutingModule } from './sign-routing.module';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { SignInfoComponent } from './components/sign-info/sign-info.component';

@NgModule({
  declarations: [SignComponent, SignInComponent, SignUpComponent, SignInfoComponent],
  imports: [
    CommonModule,
    SignRoutingModule
  ]
})
export class SignModule { }
