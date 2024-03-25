import { SendReportResponse } from './../../dtos/response/SendReport.response';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SendReportRequest } from '../../dtos/request/SendReport.request';
import { ReportsPerServiceResponse } from '../../dtos/response/ReportsPerService.response';

@Injectable({
  providedIn: 'root'
})
export class ReportserviceService {

  constructor(
    private httpClient:HttpClient
  ) { }
  url='http://localhost:8081/api/v1/reports';
  sendReport(reqBody:SendReportRequest):Observable<any>{
    return this.httpClient.post<SendReportResponse>(this.url+'',reqBody);
  }

  getReportCountPerService():Observable<ReportsPerServiceResponse[]>{    
    return this.httpClient.get<ReportsPerServiceResponse[]>(this.url+'/grouped');
  }
}
