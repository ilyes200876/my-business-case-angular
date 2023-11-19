import { Component } from '@angular/core';
import { CategoryInterface } from '../interfaces/category-interface';
import { CategoryService } from 'src/services/category/category.service';

@Component({
  selector: 'app-admin-category',
  templateUrl: './admin-category.component.html',
  styleUrls: ['./admin-category.component.scss']
})
export class AdminCategoryComponent {

  catergories: CategoryInterface[] = [];

  constructor(private categoryService: CategoryService){}

  ngOnInit(){
    this.categoryService.getAll().subscribe(dataCategories => {
      this.catergories = dataCategories;
      console.log(this.catergories);
    });
  }

}
