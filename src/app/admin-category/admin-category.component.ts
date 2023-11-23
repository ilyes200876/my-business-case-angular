import { Component } from '@angular/core';
import { CategoryInterface } from '../interfaces/category-interface';
import { CategoryService } from 'src/services/category/category.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-category',
  templateUrl: './admin-category.component.html',
  styleUrls: ['./admin-category.component.scss']
})
export class AdminCategoryComponent {

  categories: CategoryInterface[] = [];

  constructor(private categoryService: CategoryService,private router: Router){}

  ngOnInit(){
    this.categoryService.getAll().subscribe(dataCategories => {
      this.categories = dataCategories;
      console.log(this.categories);
    });
  }

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
      this.router.navigate(['/admin-category']);
    });

    }
  }

  deleteCategory(id: number, index: number) {
    this.categoryService.deleteCategory(id).subscribe(categorytDelete => {
      this.categories.splice(index,1);
    });
  }

}
