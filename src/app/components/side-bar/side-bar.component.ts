import { Component } from '@angular/core';
import { UserstateService } from '../../state/userstate.service';

@Component({
  selector: 'app-side-bar',
  standalone: true,
  imports: [],
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.css'
})
export class SideBarComponent {
  constructor(
    private userStateService: UserstateService
  ) { }
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
  }
}
