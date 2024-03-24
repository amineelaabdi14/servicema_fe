import { Component, OnInit } from '@angular/core';
import { AppContentService } from '../../services/app-content/app-content.service';
import { Service } from '../../models/Service.model';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ServiceService } from '../../services/service/service.service';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent implements OnInit {
  services! :Service[];
  constructor(private service :ServiceService) { }

  ngOnInit(): void {
    this.service.getServices("").subscribe(data => {
      this.services = data;
    }, error => {
      console.log(error);
    }
    );
  }

}
