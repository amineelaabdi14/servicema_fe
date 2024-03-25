import { Component, OnInit, ViewChild } from '@angular/core';
import { AppComponent } from '../../app.component';
import { AppContentService } from '../../services/app-content/app-content.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Service } from '../../models/Service.model';
import { CommonModule } from '@angular/common';
import { ServiceService } from '../../services/service/service.service';
import { ReportserviceService } from '../../services/report/reportservice.service';
import { UserstateService } from '../../state/userstate.service';
import { FormsModule } from '@angular/forms';
import { Comment } from '../../models/Comment.model';
import { CommentService } from '../../services/comment/comment.service';

@Component({
  selector: 'app-service-page',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './service-page.component.html',
  styleUrl: './service-page.component.css'
})
export class ServicePageComponent implements OnInit{
  @ViewChild('closebutton') closebutton:any;
    id!: number;
    myservice!: Service;
    message!: string;
    comments!:Comment[];
    commnentMessage!:string;
    constructor(
      private service:ServiceService,
      private route : ActivatedRoute,
      private reportService:ReportserviceService,
      private userState:UserstateService,
      private router:Router,
      private commentService:CommentService
      ) { 

    }
  
    ngOnInit(): void {
    
      this.route.params.subscribe(params => {
        this.id = params['id'];
      });
      this.service.getService(this.id).subscribe(data => {
          this.myservice = data;
          this.comments = data.comments;
          console.log(data);
          
      }, error => {
        console.log(error);
      }
      );
    }

    sendReport(){
      if(this.userState.getUser() == null){
        alert("Please login to report");
        return;
      }
      this.reportService.sendReport({serviceId:this.id,message:this.message}).subscribe(data=>{
        alert(data.message);
          this.closebutton.nativeElement.click();
      },error=>{
        console.log(error);
      });
    }

    makeComment(){
      if(this.userState.getUser() == null){
        alert("Please login to report");
        return;
      }
      this.commentService.sendComment({serviceId:this.id,comment:this.commnentMessage}).subscribe(data=>{
        this.ngOnInit();
      },error=>{
        alert(error.error.message);
      });
    }
}
