import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NftInterface } from './nft-interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NftService {

  urlNftAll = "https://localhost:8000/api/nft";

  constructor(private http: HttpClient) { }

  getAll(){
    return this.http.get<NftInterface[]>(this.urlNftAll)
  }

  getNftById(id: number){
    return this.http.get<NftInterface>(this.urlNftAll + "/show/" + id);
  }
}
