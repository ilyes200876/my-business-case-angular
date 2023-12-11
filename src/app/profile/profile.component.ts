import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UserService } from 'src/services/user/user.service';
import { SubCategoryInterface } from '../interfaces/sub-category-interface';
import { SubCategoryService } from 'src/services/sub-category/sub-category.service';
import { urlUploadPicture } from '../environmental/environmental';
import { UserInterface } from '../interfaces/user-interface';
import { NftInterface } from '../interfaces/nft-interface';
import { HttpClient } from '@angular/common/http';
import { NftService } from 'src/services/nft/nft.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit{

  userData: any;
  subCategories: SubCategoryInterface[] = [];

  constructor(private userService: UserService, private subCategoryService: SubCategoryService, private nftService: NftService, private http: HttpClient){}

  ngOnInit(): void {
    this.getUserData();
    this.subCategoryService.getAll().subscribe(data => {
      this.subCategories = data;
      console.log(this.subCategories);
    })
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
          // console.log(this.userData.profilePic);
        }
      },
      (error) => {
        console.error('Erreur :', error);
      }
    );
  }

  public formAdd: FormGroup = new FormGroup({
    title: new FormControl(''),
    price: new FormControl(''),
    description: new FormControl(''),
    subCategory: new FormControl(''),
    file: new FormControl(''),
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

  addNft(){
    if(this.formAdd.valid){
      let nft: NftInterface = {
        id:0,
        price: this.formAdd.value.price,
        title: this.formAdd.value.title,
        description: this.formAdd.value.description,
        subCategories: [
          {
          id: this.formAdd.value.subCategory
          }
        ],

        
        src: this.formAdd.value.file,
        user: this.userData.id
      }

      // this.onChangeFile(event);

      this.nftService.addNft(nft).subscribe(response => {
        this.formAdd.reset();
        // urlUploadPicture.push(this.formAdd.value.file);
        console.log(response);
        console.log(nft);
        this.userData.nfts.push(nft);
      })
    }
  }

  // onChangeFile(event: any){
  //   if(event.target.files.length > 0){
  //     const file = event.target.files[0];
  //     const formData = new FormData();
  //     formData.append('file', file);
  //     this.http.post(urlUploadPicture, formData).subscribe((response:any) => {
  //       debugger;
  //     })
  //   }
  // }

}
