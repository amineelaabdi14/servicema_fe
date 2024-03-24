import { UserstateService } from './../../state/userstate.service';
import { Component, OnInit } from '@angular/core';
import { CityService } from '../../services/city/city.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserService } from '../../services/user/user.service';
import { Router } from '@angular/router';
import { User } from '../../models/User.model';

@Component({
  selector: 'app-become-aseller',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './become-aseller.component.html',
  styleUrl: './become-aseller.component.css'
})
export class BecomeASellerComponent implements OnInit {
    job_title!: string;
    phone!: string;
    description!: string;
    user!: User;
    constructor(
      private userService:UserService,
      private router: Router,
      private state:UserstateService
    ) { }
  
    ngOnInit(): void {
      this.user = this.state.getUser();
      this.description = this.user.description;
      this.phone = this.user.phone;
    }
    becomeASeller(){
      this.userService.becomeASeller({title:this.job_title,phone:this.phone,description:this.description}).subscribe(
        (user) => {
          alert("Seller Request Submitted");
          this.router.navigate(['/dashboard/profile']);
        },
        (error) => {
          console.error(error);
        }
      );
    }
}
