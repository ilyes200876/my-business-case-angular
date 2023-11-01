import { Component, OnInit } from '@angular/core';
import { NftInterface } from '../interfaces/nft-interface';
import { NftService } from '../../services/nft/nft.service';
import { ActivatedRoute } from '@angular/router';
import { urlUploadPicture } from '../environmental/environmental';

@Component({
  selector: 'app-nft-details',
  templateUrl: './nft-details.component.html',
  styleUrls: ['./nft-details.component.scss']
})
export class NftDetailsComponent implements OnInit{

  nft:NftInterface| undefined;
  
  constructor(private nftService: NftService, private route: ActivatedRoute){}

  ngOnInit(): void {
    this.showNftById(1);
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
