import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SubCategoryService } from 'src/services/sub-category/sub-category.service';

@Component({
  selector: 'app-sub-category-edit',
  templateUrl: './sub-category-edit.component.html',
  styleUrls: ['./sub-category-edit.component.scss']
})
export class SubCategoryEditComponent {

  constructor(private subCategoryService: SubCategoryService, private route: ActivatedRoute, private router: Router){}

  public formUpdate: FormGroup = new FormGroup({
    subCategoryName: new FormControl('')
  })
  
  onSubmit(){
    this.subCategoryService.updateSubCategory(this.route.snapshot.params['id'], this.formUpdate.value).subscribe((result)  => {
      console.log(result);
      this.router.navigate(['/admin-sub-category']);
    })
  }

}
