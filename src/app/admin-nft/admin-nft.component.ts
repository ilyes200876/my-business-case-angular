import { Component } from '@angular/core';
import { NftInterface } from '../interfaces/nft-interface';
import { NftService } from 'src/services/nft/nft.service';
import { ActivatedRoute } from '@angular/router';
import { urlUploadPicture } from '../environmental/environmental';

@Component({
  selector: 'app-admin-nft',
  templateUrl: './admin-nft.component.html',
  styleUrls: ['./admin-nft.component.scss']
})
export class AdminNftComponent {

  nfts: NftInterface[] = [];
  // nft:NftInterface| undefined;

  // constructor(private nftService: NftService, private route: ActivatedRoute){}
  constructor(private nftService: NftService){}

  ngOnInit(){
    this.nftService.getAll().subscribe(dataNfts => {
      this.nfts = dataNfts;
      console.log(this.nfts);
    });

    // this.showNftById(1);
  }

  
  // showNftById(id: number){
  //   this.route.params.subscribe(params=>{
  //     this.nftService.getNftById(params['id']).subscribe(data =>{
  
  //       data.src = urlUploadPicture + data.src;
  //       console.log(data);
  //       this.nft=data
  //     })
  //   });
  // }

}
