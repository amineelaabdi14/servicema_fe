import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Service } from '../../models/Service.model';

@Injectable({
  providedIn: 'root'
})
export class AppContentService {

  constructor(private httpclient:HttpClient) { }

  getServices(searchKeyword:string){
    return this.httpclient.get<Service[]>('http://localhost:8080/services',{searchKeyword:searchKeyword});
    
  }
}
