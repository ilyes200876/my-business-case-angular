import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NftService } from 'src/services/nft/nft.service';
import { SubCategoryService } from 'src/services/sub-category/sub-category.service';
import { SubCategoryInterface } from '../interfaces/sub-category-interface';

@Component({
  selector: 'app-nft-update',
  templateUrl: './nft-update.component.html',
  styleUrls: ['./nft-update.component.scss']
})
export class NftUpdateComponent implements OnInit{

  subCategories: SubCategoryInterface[] = [];

  constructor(private subCategoryService: SubCategoryService, private nftService: NftService, private route: ActivatedRoute, private router: Router){}

  ngOnInit(): void {
    this.subCategoryService.getAll().subscribe(data => {
      this.subCategories = data;
      console.log(this.subCategories);
    });
  }
  
  public formUpdate: FormGroup = new FormGroup({
    title: new FormControl(''),
    description: new FormControl(''),
    price: new FormControl(''),
    subCategories: new FormControl(''),

  })
  
  onSubmit(){
    this.nftService.updateNft(this.route.snapshot.params['id'], this.formUpdate.value).subscribe((result)=>{
      console.log(result);
      this.router.navigate(['/admin-nft']);
    })
  }

}
