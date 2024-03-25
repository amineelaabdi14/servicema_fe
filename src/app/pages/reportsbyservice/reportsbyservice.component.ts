import { Component, OnInit } from '@angular/core';
import { ReportserviceService } from '../../services/report/reportservice.service';
import { ReportsPerServiceResponse } from '../../dtos/response/ReportsPerService.response';
import { CommonModule } from '@angular/common';

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
    private reportService:ReportserviceService
  ) { }

  ngOnInit(): void {
    this.reportService.getReportCountPerService().subscribe(data=>{
      this.reports = data;
      console.log(this.reports);
      
    });
  }

}
