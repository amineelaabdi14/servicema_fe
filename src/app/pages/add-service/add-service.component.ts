import { Component, OnInit } from '@angular/core';
import { AppContentService } from '../../services/app-content/app-content.service';
import { Category } from '../../dtos/response/Category.response';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ServiceService } from '../../services/service/service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-service',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './add-service.component.html',
  styleUrl: './add-service.component.css',
})
export class AddServiceComponent implements OnInit {
  title!: string;
  description!: string;
  categoryId!: number;
  startingPrice!: number;
  categories!: Category[];
  constructor(
    private appContentService: AppContentService,
    private serviceService: ServiceService,
    private router:Router
  ) {}

  ngOnInit(): void {
    this.appContentService.getCategories().subscribe((data) => {
      this.categories = data;
      console.log(data);
    });
  }

  addService() {
    this.serviceService
      .addService({
        title: this.title,
        description: this.description,
        categoryId: this.categoryId,
        startingPrice: this.startingPrice,
        image: 'image',
      })
      .subscribe((data) => {
        alert('Service added successfully');
        this.router.navigate(['/manage-services']);
      });
  }
}
