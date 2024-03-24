import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(httpclient:HttpClient) { }
  url = 'http://localhost:8081/api/v1';
  editProfile(name:string,email:string){
    localStorage.setItem('name',name);
    localStorage.setItem('email',email);
  }

}
