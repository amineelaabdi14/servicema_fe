import { Component, NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterOutlet } from '@angular/router';
import { AppNavbarComponent } from './components/app-navbar/app-navbar.component';
import { UserService } from './services/user/user.service';
import { UserstateService } from './state/userstate.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,AppNavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'servicema';
  constructor(
    private userService:UserService,
    private state:UserstateService,
    private router:Router
  ) { }
  ngOnInit(): void {
    if(localStorage.getItem('token')!=null){
      this.userService.getUserByJwt().subscribe(user=>{
        this.state.setUser(user);
      });
  
    }
  }
}
