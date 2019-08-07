import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private router: Router) {}

  logIn(): void{
    localStorage['logged'] = 'true';
  }
  
  logOut(): void{
    localStorage.removeItem('logged');
  }

  isLogged(): boolean{
    return localStorage.getItem('logged') == 'true';
  }

  redirectToMain(): void{
    this.router.navigate(['/']);
  }

  redirectToSign(): void{
    this.router.navigate(['/sign']);
  }
}
