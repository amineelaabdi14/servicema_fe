import { Observable } from 'rxjs';
import { AppContentService } from './../../services/app-content/app-content.service';
import { Component, OnInit } from '@angular/core';
import { Category } from '../../dtos/response/Category.response';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { UserstateService } from '../../state/userstate.service';

@Component({
  selector: 'app-app-navbar',
  standalone: true,
  imports: [CommonModule,RouterModule],
  providers: [
    HttpClientModule
  ],
  templateUrl: './app-navbar.component.html',
  styleUrl: './app-navbar.component.css'
})
export class AppNavbarComponent implements OnInit{
  categories$ !:Observable<Category[]>;
  navbarItems !: Category[];
  isloggedIn = false;
  constructor(private appContentService :AppContentService,private userStateService:UserstateService) { }

  ngOnInit(): void {
    if(this.userStateService.getUser() != null){
      this.isloggedIn = true;
    }
    this.categories$ = this.appContentService.getCategories();
    this.categories$.subscribe(data => {
      this.navbarItems = data;
    });
  }
}
