import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RegisterRequest } from '../../dtos/request/Register.request';
import { LoginRequest } from '../../dtos/request/Login.request';
import { User } from '../../models/User.model';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private httpclient: HttpClient) { }

  authenticate(request: LoginRequest):Observable<User> {
    return this.httpclient.post<User>('http://localhost:8080/login', request);
  }

  register(request: RegisterRequest):Observable<User> {
    return this.httpclient.post<User>('http://localhost:8080/register', request);
  }
}