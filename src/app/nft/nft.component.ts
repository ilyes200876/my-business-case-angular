import { Component, OnInit } from '@angular/core';
import { NftService } from '../nft.service';
import { NftInterface } from '../nft-interface';
import { ActivatedRoute } from '@angular/router';


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
      this.nfts = data;
      console.log(this.nfts);
    });
    
  

  }


  
}
