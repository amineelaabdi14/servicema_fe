import { Observable } from 'rxjs';
import { User } from './../../models/User.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserstateService } from '../../state/userstate.service';
import { BecomeASellerRequest } from '../../dtos/request/BecomeASeller.request';
import { BecomeASellerResponse } from '../../dtos/response/BecomeASeller.response';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpclient:HttpClient,private state:UserstateService) { }
  url = 'http://localhost:8081/api/v1';

  editProfile():Observable<User>{
    const reqBody = {"name":this.state.getUser().name,"phone":this.state.getUser().phone,"description":this.state.getUser().description,"city":this.state.getUser().city.name};
    return  this.httpclient.put<User>(this.url+'/user',reqBody);
  }

  becomeASeller(req:BecomeASellerRequest):Observable<BecomeASellerResponse>{
    return this.httpclient.post<BecomeASellerResponse>(this.url+'/user/becomeSellser',req);
  }

  getUserByJwt():Observable<User>{
    return this.httpclient.post<User>(this.url+'/user/getByJwt',null);
  }

}
