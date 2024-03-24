import { City } from './../../models/City.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CityService {

  constructor(private httpClient:HttpClient) { }
  url = 'http://localhost:8081/api/v1';
  getCities():Observable<string[]>{
    return this.httpClient.get<string[]>(this.url+'/cities');
  }
}
