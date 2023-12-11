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

  // subCategories: SubCategoryInterface[] = [];
  categories: CategoryInterface[] = [];

  constructor(private categoryService: CategoryService, private subCategoryService: SubCategoryService){}
  
  ngOnInit(){
    this.categoryService.getAll().subscribe(dataCategories => {
      this.categories = dataCategories;
      console.log(this.categories);
    });
  }

  public formAdd: FormGroup = new FormGroup({
    name: new FormControl(''),
    category: new FormControl(null)
  })

  openModal(){
    const modalDiv = document.getElementById('modalUpdate');
    if(modalDiv != null){
      modalDiv.style.display = 'block';
    }
  }

  closeModal(){
    const modalDiv = document.getElementById('modalUpdate');
    if(modalDiv != null){
      modalDiv.style.display = 'none';
    }
  }

  onSubmit(){
    if(this.formAdd.valid){
      let subCategory: SubCategoryInterface = {
        id: 0,
        subCategoryName: this.formAdd.value.name,
        category: {
          id: this.formAdd.value.category,
          categoryName: '',
          subCategories: []
        },
        nfts: []
      };
      this.subCategoryService.addSubCategory(subCategory).subscribe(response => {
        this.formAdd.reset();
        console.log(subCategory);
      });
    }
  }


}
