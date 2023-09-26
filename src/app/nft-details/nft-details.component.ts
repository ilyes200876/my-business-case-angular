import { Component, OnInit } from '@angular/core';
import { NftInterface } from '../nft-interface';
import { NftService } from '../nft.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-nft-details',
  templateUrl: './nft-details.component.html',
  styleUrls: ['./nft-details.component.scss']
})
export class NftDetailsComponent implements OnInit{

  nft:NftInterface| undefined;
  
  constructor(private nftService: NftService, private route: ActivatedRoute){}

  ngOnInit(): void {
    this.route.params.subscribe(params=>{
      this.nftService.getNftById(params['id']).subscribe(data => this.nft=data)
    });
  }

  

}
