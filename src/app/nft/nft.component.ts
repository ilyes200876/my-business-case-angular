import { Component, OnInit } from '@angular/core';
import { NftService } from '../../services/nft/nft.service';
import { NftInterface } from '../interfaces/nft-interface';
import { ActivatedRoute } from '@angular/router';
import { urlApi, urlUploadPicture } from '../environmental/environmental';
import { UserService } from 'src/services/user/user.service';
import { UserInterface } from '../interfaces/user-interface';


@Component({
  selector: 'app-nft',
  templateUrl: './nft.component.html',
  styleUrls: ['./nft.component.scss']
})
export class NftComponent implements OnInit{

  nfts: NftInterface[] = [];
  nft: NftInterface|undefined;
  users: UserInterface[] =[];

  constructor(private nftService: NftService, private route: ActivatedRoute, private userService: UserService){}

  ngOnInit(){
    this.nftService.getAll().subscribe(data => {
      for(let i = 0; i < data.length; i++){
        data[i].src = urlUploadPicture + data[i].src;
      }
      this.nfts = data;
    });
    
    this.userService.getAllUsers().subscribe(dataUser => {
      this.users = dataUser;
      console.log(this.users);
    });
    console.log(this.users);
  

  }


  
}
