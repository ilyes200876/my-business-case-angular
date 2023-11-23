import { Component } from '@angular/core';
import { SubCategoryService } from 'src/services/sub-category/sub-category.service';
import { SubCategoryInterface } from '../interfaces/sub-category-interface';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from 'src/services/category/category.service';
import { CategoryInterface } from '../interfaces/category-interface';
// import { MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-admin-sub-category',
  templateUrl: './admin-sub-category.component.html',
  styleUrls: ['./admin-sub-category.component.scss']
})
export class AdminSubCategoryComponent {

  subCategoryParent: SubCategoryInterface;
  subCategories: SubCategoryInterface[] = [];
  categories: CategoryInterface[] = [];
  // categoryId: number = this.categories['id'];

  constructor(private subCategoryService: SubCategoryService,private router: Router, private route:ActivatedRoute, private categoryService: CategoryService){}

  ngOnInit(){
    this.subCategoryService.getAll().subscribe(dataSubCategories => {
      this.subCategories = dataSubCategories;
      console.log(this.subCategories);
    });

  
  
    this.categoryService.getAll().subscribe(dataCategories => {
      this.categories = dataCategories;
      console.log(this.categories);
    });
  
    // console.log(this.route.snapshot.params['id'])
    // this.subCategoryService.getSubCategorytById(this.route.snapshot.params['id']).subscribe((result)  =>{
    //   console.log(result)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         ;
    //   this.formUpdate = new FormGroup({
    //     subCategoryName: new FormControl(result['subCategoryName']),
    //   })
    // });
    
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
        category: this.formAdd.value.category,
        nfts: []
      };

    this.subCategoryService.addSubCategory(subCategory).subscribe(response => {
      this.formAdd.reset();
      console.log(subCategory);
    });

    }
  }

  deleteSubCategory(id: number, index: number) {
    this.subCategoryService.deleteSubCategoey(id).subscribe(subCategorytDelete => {
      this.subCategories.splice(index,1);
    });
  }

}
