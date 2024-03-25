import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Service } from '../../models/Service.model';
import { AddServiceRequest } from '../../dtos/request/AddService.request';

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
  getMyServices() {
    const url = `http://localhost:8081/api/v1/services/currentUser`;
    return this.httpclient.get<Service[]>(url,{"headers":{"Authorization":"Bearer "+localStorage.getItem('token')}});
  }

  addService(service: AddServiceRequest) {
    const url = `http://localhost:8081/api/v1/services`;
    return this.httpclient.post<Service>(url, service);
  }
  deleteService(id: number) {
    const url = `http://localhost:8081/api/v1/services/${id}`;
    return this.httpclient.delete(url);
  }
}
