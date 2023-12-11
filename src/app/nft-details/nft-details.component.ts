import { Component, OnInit } from '@angular/core';
import { NftInterface } from '../interfaces/nft-interface';
import { NftService } from '../../services/nft/nft.service';
import { ActivatedRoute } from '@angular/router';
import { urlUploadPicture } from '../environmental/environmental';
import { EthInterface } from '../interfaces/eth-interface';
import { EthService } from 'src/services/eth/eth.service';

@Component({
  selector: 'app-nft-details',
  templateUrl: './nft-details.component.html',
  styleUrls: ['./nft-details.component.scss']
})
export class NftDetailsComponent implements OnInit{

  nft:NftInterface;
  ethPrice: number;
  
  constructor(private nftService: NftService, private route: ActivatedRoute, private ethService: EthService){}

  ngOnInit(): void {
    this.showNftById(1);
    this.showPriceNft()
  }
  
  showPriceNft(){
    this.ethService.getEthPrice().subscribe((ethData) =>{
      this.ethPrice = ethData[0].ethValue ;
      console.log(this.ethPrice);
    });
  }

  showNftById(id: number){
    this.route.params.subscribe(params=>{
      this.nftService.getNftById(params['id']).subscribe(data =>{
  
        data.src = urlUploadPicture + data.src;
        console.log(data);
        this.nft=data
      })
    });
  }

}
