import { Component, OnInit } from '@angular/core';
import { UserstateService } from '../../state/userstate.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-side-bar',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.css'
})
export class SideBarComponent implements OnInit{
  role!: string;
  constructor(
    private userStateService: UserstateService
  ) { }
  ngOnInit(): void {
    this.role = this.userStateService.getUser().role;
  }
  signOut(){
    this.userStateService.setUser(
      {
        email: '',
        name: '',
        phone: '',
        city: {"id":0,"name":""},
        description: '',
        refreshToken: '',
        role: '',
        token: '',
      }
    );
    localStorage.removeItem('token');
    localStorage.removeItem('refreshToken');
  }
}
