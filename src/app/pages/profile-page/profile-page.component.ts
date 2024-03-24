import { Component, OnInit } from '@angular/core';
import { UserstateService } from '../../state/userstate.service';
import { User } from '../../models/User.model';

@Component({
  selector: 'app-profile-page',
  standalone: true,
  imports: [],
  templateUrl: './profile-page.component.html',
  styleUrl: './profile-page.component.css'
})
export class ProfilePageComponent implements OnInit{
  name!: string;
  email!: string;
  user!: User;
  constructor(
    private useStateSetvice:UserstateService
  ) { }
  ngOnInit(): void {
    console.log(this.useStateSetvice.getUser());
    
    this.name = this.useStateSetvice.getUser()?.name || ''; 
    this.email = this.useStateSetvice.getUser()?.email || '';
  }
  editProfile(){
    // this.state.editProfile();
  }
}
