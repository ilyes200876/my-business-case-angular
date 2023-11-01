import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NftInterface } from './interfaces/nft-interface';
import { Observable } from 'rxjs';
import { urlApi } from './environmental/environmental';

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
}
