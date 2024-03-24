import { User } from './../../models/User.model';
import { Component, OnInit } from '@angular/core';
import { UserstateService } from '../../state/userstate.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserService } from '../../services/user/user.service';
import { City } from '../../models/City.model';
import { CityService } from '../../services/city/city.service';

@Component({
  selector: 'app-profile-page',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './profile-page.component.html',
  styleUrl: './profile-page.component.css'
})
export class ProfilePageComponent implements OnInit{
  user!: User;
  cities!: string[];
  constructor(
    private useStateSetvice:UserstateService,
    private userService:UserService,
    private cityService:CityService
  ) { }
  ngOnInit(): void {
    this.user = this.useStateSetvice.getUser(); 
    this.cityService.getCities().subscribe(
      (cities) => {
        console.log(cities);
        
        this.cities = cities;
      },
      (error) => {
        console.error(error);
      }
    );
    console.log(this.user);
    
  }
  editProfile(){
    this.userService.editProfile().subscribe(
      (user) => {
        this.useStateSetvice.setUser(this.user);
        alert("Profile Updated");
        this.ngOnInit();
      },
      (error) => {
        console.error(error);
      }
    );
    
    // this.state.editProfile();
  }
}
