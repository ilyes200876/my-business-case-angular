import { Component } from '@angular/core';
import { SubCategoryService } from 'src/services/sub-category/sub-category.service';
import { SubCategoryInterface } from '../interfaces/sub-category-interface';

@Component({
  selector: 'app-admin-sub-category',
  templateUrl: './admin-sub-category.component.html',
  styleUrls: ['./admin-sub-category.component.scss']
})
export class AdminSubCategoryComponent {

  subCategoryParent: SubCategoryInterface;
  subCatergories: SubCategoryInterface[] = [];

  constructor(private subCategoryService: SubCategoryService){}

  ngOnInit(){
    this.subCategoryService.getAll().subscribe(dataSubCategories => {
      this.subCatergories = dataSubCategories;
      console.log(this.subCatergories);
    });
  }

}
