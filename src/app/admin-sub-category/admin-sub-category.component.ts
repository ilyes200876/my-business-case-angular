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
  subCategories: SubCategoryInterface[] = [];

  constructor(private subCategoryService: SubCategoryService){}

  ngOnInit(){
    this.subCategoryService.getAll().subscribe(dataSubCategories => {
      this.subCategories = dataSubCategories;
      console.log(this.subCategories);
    });
  }

  deleteSubCategory(id: number, index: number) {
    this.subCategoryService.deleteSubCategoey(id).subscribe(subCategorytDelete => {
      this.subCategories.splice(index,1);
      // console.log(this.nftList);
    });
  }

}
