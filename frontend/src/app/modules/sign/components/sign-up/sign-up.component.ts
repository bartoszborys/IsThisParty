import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/services/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  public details = {
    email: "",
    password: "",
    repeat: ""
  }

  constructor(private service: AuthService) { }
  
  ngOnInit() { }  
  
  public signUp(form: HTMLFormElement){
    this.validateForm(form);
    if(this.formValid(form)){
      this.sendRegisterRequest();
    }    
  }

  public validateForm(form: HTMLFormElement){
    const repeat: HTMLInputElement = form.elements['repeat'];
    repeat.setCustomValidity( (!this.passwordsMatch()) ? 'This value is not same as given password' : '' );
    form.reportValidity();
  }

  private formValid(form){
    return form.checkValidity() && this.passwordsMatch();
  }

  public passwordsMatch(){
    return this.details.password == this.details.repeat;
  }

  private sendRegisterRequest(){
    this.service.signUp(this.details).subscribe( 
      (response)=> this.service.redirectToAuth(),
      (error) => alert(JSON.stringify(error))
    )
  }
}
