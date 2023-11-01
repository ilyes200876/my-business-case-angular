import { Component, OnInit } from '@angular/core';
import { NftService } from '../nft.service';
import { NftInterface } from '../interfaces/nft-interface';
import { ActivatedRoute } from '@angular/router';
import { urlApi, urlUploadPicture } from '../environmental/environmental';


@Component({
  selector: 'app-nft',
  templateUrl: './nft.component.html',
  styleUrls: ['./nft.component.scss']
})
export class NftComponent implements OnInit{

  nfts: NftInterface[]|undefined;
  nft: NftInterface|undefined;

  constructor(private nftService: NftService, private route: ActivatedRoute){}

  ngOnInit(){
    this.nftService.getAll().subscribe(data => {
      for(let i = 0; i < data.length; i++){
        data[i].src = urlUploadPicture + data[i].src;
      }
      this.nfts = data;
    });
    
  

  }


  
}
