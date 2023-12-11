import { Component, OnInit } from '@angular/core';
import { SubCategoryService } from 'src/services/sub-category/sub-category.service';
import { SubCategoryInterface } from '../interfaces/sub-category-interface';
import { FormControl, FormGroup } from '@angular/forms';
import { CategoryService } from 'src/services/category/category.service';
import { CategoryInterface } from '../interfaces/category-interface';

@Component({
  selector: 'app-admin-sub-category',
  templateUrl: './admin-sub-category.component.html',
  styleUrls: ['./admin-sub-category.component.scss']
})
export class AdminSubCategoryComponent  implements OnInit{

  subCategories: SubCategoryInterface[] = [];
  categories: CategoryInterface[] = [];

  constructor(private subCategoryService: SubCategoryService, private categoryService: CategoryService){}

  ngOnInit(){
    this.subCategoryService.getAll().subscribe(dataSubCategories => {
      this.subCategories = dataSubCategories;
      // console.log(this.subCategories);
    });

    this.categoryService.getAll().subscribe(dataCategories => {
      this.categories = dataCategories;
      // console.log(this.categories);
    });
  }

  

  deleteSubCategory(id: number, index: number) {
    this.subCategoryService.deleteSubCategoey(id).subscribe(subCategorytDelete => {
      this.subCategories.splice(index,1);
    });
  }

}
