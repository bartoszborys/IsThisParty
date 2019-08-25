import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { AuthService } from 'src/services/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  public googleUrl: string;
  public details = {
    email: "",
    password: ""
  };
  
  constructor(private service: AuthService) { }
  
  ngOnInit() {
    this.defaultGoogleUrl();
  }

  signIn(form: HTMLFormElement){
    form.reportValidity();
    if( form.checkValidity() ){
      this.service.logIn(this.details).subscribe(
        (response: any) => {
          this.service.updateToken(response.token);
          this.service.redirectToMain();
        },
        (error) => alert(JSON.stringify(error))
      );
    }
  }

  changeGoogleTo(url){
    this.googleUrl = `/assets/google/${url}.png`;
  }

  defaultGoogleUrl(){
    this.googleUrl = "/assets/google/normal.png";
  }
}
