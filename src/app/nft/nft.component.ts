import { Component, OnInit } from '@angular/core';
import { NftService } from '../../services/nft/nft.service';
import { NftInterface } from '../interfaces/nft-interface';
import { ActivatedRoute } from '@angular/router';
import { urlApi, urlUploadPicture } from '../environmental/environmental';
import { UserService } from 'src/services/user/user.service';
import { UserInterface } from '../interfaces/user-interface';
import { FormControl, FormGroup } from '@angular/forms';


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

  constructor(private nftService: NftService, private route: ActivatedRoute, private userService: UserService){}

  ngOnInit(){
    this.nftService.getAll().subscribe(data => {
      for(let i = 0; i < data.length; i++){
        data[i].src = urlUploadPicture + data[i].src;
      }
      this.nfts = data;
      this.onSubmit();
    });
    
    this.userService.getAllUsers().subscribe(dataUser => {
      this.users = dataUser;
      console.log(this.users);
    });
    console.log(this.users);
  

  }

  public form: FormGroup = new FormGroup({
    title: new FormControl('')
  })

  onSubmit() {
    this.searchedNfts = this.nfts.filter((item) =>
      item.title.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
    console.log(this.searchedNfts);
  }

  
}
