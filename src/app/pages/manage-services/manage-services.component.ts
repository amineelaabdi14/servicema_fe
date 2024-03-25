import { Component, OnInit } from '@angular/core';
import { Service } from '../../models/Service.model';
import { ServiceService } from '../../services/service/service.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-manage-services',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './manage-services.component.html',
  styleUrl: './manage-services.component.css'
})
export class ManageServicesComponent implements OnInit{
  services!:Service[];
    constructor(
      private service:ServiceService
    ) { }
  
    ngOnInit(): void {
      this.service.getMyServices().subscribe(data=>{
        this.services = data;
      });
    }

}
