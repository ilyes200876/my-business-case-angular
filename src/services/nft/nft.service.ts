import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NftInterface } from '../../app/interfaces/nft-interface';
import { Observable } from 'rxjs';
import { urlApi } from '../../app/environmental/environmental';

@Injectable({
  providedIn: 'root'
})
export class NftService {

  urlNftAll = urlApi + "/nft";

  constructor(private http: HttpClient) { }

  getAll(){
    return this.http.get<NftInterface[]>(this.urlNftAll)
  }

  getNftById(id: number){
    return this.http.get<NftInterface>(this.urlNftAll + "/show/" + id);
  }

  getNftsByTitle(inputValue :string){

    return this.http.get<NftInterface[]>(`${this.urlNftAll}?t=${inputValue}`);
  }

  getNftBySubCategory(inputValue: string){
    return this.http.get<NftInterface[]>(`${this.urlNftAll}?sn=${inputValue}`);
  }

}
