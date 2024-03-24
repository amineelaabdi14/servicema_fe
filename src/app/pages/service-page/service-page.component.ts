import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../../app.component';
import { AppContentService } from '../../services/app-content/app-content.service';
import { ActivatedRoute } from '@angular/router';
import { Service } from '../../models/Service.model';
import { CommonModule } from '@angular/common';
import { ServiceService } from '../../services/service/service.service';

@Component({
  selector: 'app-service-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './service-page.component.html',
  styleUrl: './service-page.component.css'
})
export class ServicePageComponent implements OnInit{
    id!: number;
    myservice!: Service;
    constructor(private service:ServiceService,private route : ActivatedRoute) { 

    }
  
    ngOnInit(): void {
    
      this.route.params.subscribe(params => {
        this.id = params['id'];
      });
      this.service.getService(this.id).subscribe(data => {
        this.myservice = data;
      }, error => {
        console.log(error);
      }
      );
    }
}
