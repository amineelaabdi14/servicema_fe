import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Service } from '../../models/Service.model';

@Injectable({
  providedIn: 'root',
})
export class ServiceService {

  constructor(private httpclient: HttpClient) {}

  getServices(searchKeyword: string) {
    const url = `http://localhost:8081/api/v1/services`;
    return this.httpclient.get<Service[]>(url);
  }
  getService(id: number) {
    const url = `http://localhost:8081/api/v1/services/${id}`;
    return this.httpclient.get<Service>(url);
  }
}
