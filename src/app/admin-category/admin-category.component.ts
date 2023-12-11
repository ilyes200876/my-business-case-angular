import { Component, OnInit } from '@angular/core';
import { CategoryInterface } from '../interfaces/category-interface';
import { CategoryService } from 'src/services/category/category.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-category',
  templateUrl: './admin-category.component.html',
  styleUrls: ['./admin-category.component.scss']
})
export class AdminCategoryComponent implements OnInit{

  categories: CategoryInterface[] = [];

  constructor(private categoryService: CategoryService,private router: Router){}

  ngOnInit(){
    this.categoryService.getAll().subscribe(dataCategories => {
      this.categories = dataCategories;
      console.log(this.categories);
    });
  }

  

  deleteCategory(id: number, index: number) {
    this.categoryService.deleteCategory(id).subscribe(categorytDelete => {
      this.categories.splice(index,1);
    });
  }

}
