import { Injectable } from '@angular/core';
import { User } from '../models/User.model';

@Injectable({
  providedIn: 'root'
})
export class UserstateService {
  currentUser!: User;

  setUser(user: User) {
    if (user.description == null) {
      user.description = '';
    }
    if(user.city == null){
      user.city = {
        id: 0,
        name: ''
      };
    }
    if(user.phone == null){
      user.phone = '';
    }
    if(user.role == null){
      user.role = '';
    }
    if(user.token == null){
      user.token = '';
    }
    if(user.refreshToken == null){
      user.refreshToken = '';
    }
    this.currentUser = user; 
  }

  getUser(): User {
    return this.currentUser;
  }
  constructor() { }
}
