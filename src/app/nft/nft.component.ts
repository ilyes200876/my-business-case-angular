import { Component, OnInit } from '@angular/core';
import { NftService } from '../../services/nft/nft.service';
import { NftInterface } from '../interfaces/nft-interface';
import { ActivatedRoute } from '@angular/router';
import { urlApi, urlUploadPicture } from '../environmental/environmental';
import { UserService } from 'src/services/user/user.service';
import { UserInterface } from '../interfaces/user-interface';
import { SubCategoryService } from '../../services/sub-category/sub-category.service';
import { SubCategoryInterface } from '../interfaces/sub-category-interface';
import { FormControl, FormGroup } from '@angular/forms';
import { EthService } from 'src/services/eth/eth.service';


@Component({
  selector: 'app-nft',
  templateUrl: './nft.component.html',
  styleUrls: ['./nft.component.scss']
})
export class NftComponent implements OnInit{

  nfts: NftInterface[] = [];
  nft: NftInterface|undefined;
  searchedNfts: NftInterface[];
  searchTerm: string = "";
  users: UserInterface[] =[];
  subCategories: SubCategoryInterface[];
  // etheValue: number[] = [];
  ethPrice: number;

  constructor(private nftService: NftService, private route: ActivatedRoute, private userService: UserService, private subCategoryService: SubCategoryService, private ethService: EthService){}

  ngOnInit(){
    this.nftService.getAll().subscribe(data => {
      for(let i = 0; i < data.length; i++){
        data[i].src = urlUploadPicture + data[i].src;
      }
      this.nfts = data;
    });

    // this.userService.getAllUsers().subscribe(dataUser => {
    //   this.users = dataUser;
    //   console.log(this.users);
    // });
    // console.log(this.users);
    
    this.showSubCategories();
    this.showPriceNft()
    
  }
  
  showPriceNft(){
    this.ethService.getEthPrice().subscribe(ethData =>{
      this.ethPrice = ethData[0].ethValue ;
      console.log(this.ethPrice);
    });
  }
  
  showSubCategories(){
    this.subCategoryService.getAll().subscribe(subCategoriesData=>{
      this.subCategories = subCategoriesData;
      console.log(this.subCategories);
      
    })
  }

  public form: FormGroup = new FormGroup({
    title: new FormControl('')
  })

  search(inputValue : string) {

    if(inputValue){


      this.nftService.getNftsByTitle(inputValue).subscribe(
        (data)=>{
          for(let i = 0; i < data.length; i++){
            data[i].src = urlUploadPicture + data[i].src;
          }
          this.nfts = data;
        }
      )

    }else{
    this.nftService.getAll().subscribe(
      (data)=>{
        for(let i = 0; i < data.length; i++){
          data[i].src = urlUploadPicture + data[i].src;
        }
        this.nfts = data;
      }
    )
    }
    this.searchedNfts = this.nfts.filter((nft) =>
      nft.title.toLowerCase().includes(this.searchTerm.toLowerCase())
    );

  }

  public formSubCategory: FormGroup = new FormGroup({
    subCategory: new FormControl('')
  })

  onSubCategoryNameChanges(inputValue: any){

    const value = inputValue.target.value;

    if(value === "All"){
      this.nftService.getAll().subscribe(
        (data)=>{
          for(let i = 0; i < data.length; i++){
            data[i].src = urlUploadPicture + data[i].src;
          }
          this.nfts = data;
        }
      )
    }else{
      this.nftService.getNftBySubCategory(value).subscribe(
        (data)=>{
          for(let i = 0; i < data.length; i++){
            data[i].src = urlUploadPicture + data[i].src;
          }
          this.nfts = data;
        }
      )
    }
  }
  
}
