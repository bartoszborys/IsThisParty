import { Controller, Post, Body, BadRequestException, HttpCode } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Credentials } from './dto/credentials.dto';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { InsertResult } from 'typeorm';

@Controller('api/v1/auth')
export class AuthController {
  public constructor(private authService: AuthService){}
  
  @Post('signIn')
  @HttpCode(200)
  public signIn(@Body() credentials: Credentials): Observable<string>{
    return this.authService.signIn(credentials);
  }

  @Post('signUp')
  public signUp(@Body() credentials: Credentials): Observable<InsertResult>{
    return this.authService.signUp(credentials).pipe<InsertResult>(
      catchError( (err) => { 
        throw new BadRequestException();
      })
    )
  }
}
