import { Component, OnInit } from '@angular/core';
import { urlUploadPicture } from '../environmental/environmental';
import { UserService } from 'src/services/user/user.service';
import { SubCategoryInterface } from '../interfaces/sub-category-interface';
import { SubCategoryService } from 'src/services/sub-category/sub-category.service';
import { NftService } from 'src/services/nft/nft.service';
import { NftInterface } from '../interfaces/nft-interface';
import { FormControl, FormGroup } from '@angular/forms';
import { EthService } from 'src/services/eth/eth.service';

@Component({
  selector: 'app-nft-user',
  templateUrl: './nft-user.component.html',
  styleUrls: ['./nft-user.component.scss']
})
export class NftUserComponent implements OnInit{

  userData: any;
  subCategories: SubCategoryInterface[] = [];
  nfts: NftInterface[] = [];
  ethPrice: number;
  // searchedNfts: NftInterface[];
  // searchTerm: string = "";

  constructor(private userService: UserService, private subCategoryService: SubCategoryService, private ethService: EthService,private nftService: NftService){}

  ngOnInit(): void {
    this.getUserData();
    this.subCategoryService.getAll().subscribe(data => {
      this.subCategories = data;
      console.log(this.subCategories);
    });
    // this.nftService.getAll().subscribe(data => {
    //   for(let i = 0; i < data.length; i++){
    //     data[i].src = urlUploadPicture + data[i].src;
    //   }
    //   this.nfts = data;
    //   console.log(this.nfts);
    //   console.log(data);
    // });

    this.showPriceNft()
  }

  showPriceNft(){
    this.ethService.getEthPrice().subscribe(ethData =>{
      this.ethPrice = ethData[0].ethValue ;
      console.log(this.ethPrice);
    });
  }

  getUserData() {
    this.userService.getUserData().subscribe(
      (data) => {
        console.log('Données de l\'utilisateur connecté :', data);
        if(data){
          for(let i = 0; i < data.nfts.length; i++){
            data.nfts[i].src = urlUploadPicture + data.nfts[i].src;
          }
          this.userData = data;
          this.nfts = data.nfts;
          console.log(this.userData);
          console.log(this.nfts);
        }
      },
      (error) => {
        console.error('Erreur :', error);
      }
    );
  }

  deleteNft(id: number, index: number) {
    this.nftService.deleteNft(id).subscribe(nftDelete => {
      this.nfts.splice(index,1);
    });
  }

}
