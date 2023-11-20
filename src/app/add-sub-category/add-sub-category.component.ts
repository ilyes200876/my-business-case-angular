import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CategoryService } from 'src/services/category/category.service';
import { CategoryInterface } from '../interfaces/category-interface';
import { SubCategoryInterface } from '../interfaces/sub-category-interface';
import { SubCategoryService } from 'src/services/sub-category/sub-category.service';

@Component({
  selector: 'app-add-sub-category',
  templateUrl: './add-sub-category.component.html',
  styleUrls: ['./add-sub-category.component.scss']
})
export class AddSubCategoryComponent implements OnInit{

  @Input() subCategoryAdd: SubCategoryInterface;
  categories: CategoryInterface[] = [];

  constructor(private categoryService: CategoryService, private subCategoryService: SubCategoryService){}
  
  ngOnInit(){
    this.categoryService.getAll().subscribe(dataCategories => {
      this.categories = dataCategories;
      console.log(this.categories);
    });
  }

  public formSubCategory: FormGroup = new FormGroup({
    name: new FormControl(''),
    category: new FormControl(null)
  });

  onSubmit(){
    if(this.formSubCategory.valid){
      let subCategory: SubCategoryInterface = {
        id: 0,
        subCategoryName: this.formSubCategory.value.name,
        category: this.formSubCategory.value.category,
        nfts: []
      };

    this.subCategoryService.addSubCategory(subCategory).subscribe(response => {
      this.formSubCategory.reset();
      console.log(subCategory);
    });

    }
    }


}
