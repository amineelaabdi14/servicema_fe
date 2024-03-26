import { ReportserviceService } from './../../services/report/reportservice.service';
import { Component, OnInit } from '@angular/core';
import { ReportsPerServiceResponse } from '../../dtos/response/ReportsPerService.response';
import { CommonModule } from '@angular/common';
import { ServiceService } from '../../services/service/service.service';

@Component({
  selector: 'app-reportsbyservice',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './reportsbyservice.component.html',
  styleUrl: './reportsbyservice.component.css'
})
export class ReportsbyserviceComponent implements OnInit{
  reports!: ReportsPerServiceResponse[];
  constructor(
    private reportService:ReportserviceService,
    private serviceService:ServiceService
  ) { }

  ngOnInit(): void {
    this.reportService.getReportCountPerService().subscribe(data=>{
      this.reports = data;
      console.log(this.reports);
      
    });
  }
  deleteService(id:number){
    this.serviceService.deleteService(id).subscribe(data=>{
      console.log(data);
      this.reportService.getReportCountPerService().subscribe(data=>{
        this.reports = data;
        console.log(this.reports);
        
      });
    });
  }

}
