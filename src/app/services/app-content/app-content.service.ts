import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Service } from '../../models/Service.model';
import { Observable } from 'rxjs';
import { Category } from '../../dtos/response/Category.response';

@Injectable({
  providedIn: 'root'
})
export class AppContentService {

  constructor(private httpclient:HttpClient) { }

  getCategories():Observable<Category []>{
    return this.httpclient.get<Category[]>('http://localhost:8081/api/v1/categories');
  }
}
