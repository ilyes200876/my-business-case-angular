import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CategoryService } from 'src/services/category/category.service';
import { CategoryInterface } from '../interfaces/category-interface';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.scss']
})
export class AddCategoryComponent {

  categories: CategoryInterface[] = [];

  constructor(private categoryService: CategoryService){}

  public formAdd: FormGroup = new FormGroup({
    categoryName: new FormControl(''),
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
      let category: CategoryInterface = {
        id: 0,
        categoryName: this.formAdd.value.categoryName,
        subCategories: []
      };

    this.categoryService.addCategory(category).subscribe(response => {
      this.formAdd.reset();
      console.log(category);
      this.categories.push(category);
      });
    }
  }
}
