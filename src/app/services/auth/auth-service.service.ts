import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RegisterRequest } from '../../dtos/request/Register.request';
import { LoginRequest } from '../../dtos/request/Login.request';
import { User } from '../../models/User.model';
import { RefreshTokenResponse } from '../../dtos/response/RefreshToken.response';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private httpclient: HttpClient) { }

  authenticate(request: LoginRequest):Observable<User> {
    return this.httpclient.post<User>('http://localhost:8081/api/v1/auth/login', request);
  }

  register(request: RegisterRequest):Observable<User> {
    return this.httpclient.post<User>('http://localhost:8081/api/v1/auth/register', request);
  }

  refresh(refreshToken: string):Observable<RefreshTokenResponse> {
    console.log('refresh token');
    
    return this.httpclient.post<RefreshTokenResponse>('http://localhost:8081/api/v1/auth/refresh', {'refreshToken':refreshToken});
  }
}
