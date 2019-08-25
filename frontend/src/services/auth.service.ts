import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private router: Router, private http: HttpClient) {}

  logIn(credentials): Observable<string>{
    return this.http.post<string>('http://localhost:3000/api/v1/auth/signIn', credentials);
  }
  
  updateToken(token){
    localStorage['token'] = token;
  }

  logOut(): void{
    localStorage.removeItem('token');
  }

  signUp(credentials): Observable<any>{
    return this.http.post('http://localhost:3000/api/v1/auth/signUp', credentials);
  }

  isLogged(): boolean{
    return localStorage.getItem('token') != undefined;
  }

  redirectToMain(): void{
    this.router.navigate(['/']);
  }

  redirectToAuth(): void{
    this.router.navigate(['/auth']);
  }
}
