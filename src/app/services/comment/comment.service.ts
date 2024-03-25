import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MakeCommentRequest } from '../../dtos/request/MakeComment.request';
import { MakeCommentResponse } from '../../dtos/response/MakeComment.response';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(
    private httpClient:HttpClient
  ) { }

  url='http://localhost:8081/api/v1/comments';
  sendComment(reqBody:MakeCommentRequest){
    return this.httpClient.post<MakeCommentResponse>(this.url,reqBody);
  }
}
