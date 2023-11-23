import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from 'src/services/category/category.service';

@Component({
  selector: 'app-category-edit',
  templateUrl: './category-edit.component.html',
  styleUrls: ['./category-edit.component.scss']
})
export class CategoryEditComponent {

  constructor(private categoryService: CategoryService, private route: ActivatedRoute, private router: Router){}

  public formUpdate: FormGroup = new FormGroup({
    categoryName: new FormControl('')
  })
  
  onSubmit(){
    this.categoryService.updateCategory(this.route.snapshot.params['id'], this.formUpdate.value).subscribe((result)  => {
      console.log(result);
      this.router.navigate(['/admin-category']);
    })
  }

}
