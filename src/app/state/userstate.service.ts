import { Injectable } from '@angular/core';
import { User } from '../models/User.model';

@Injectable({
  providedIn: 'root'
})
export class UserstateService {
  currentUser: User | null = null;

  setUser(user: User) {
    this.currentUser = user;
  }

  getUser(): User | null {
    return this.currentUser;
  }
  constructor() { }
}
