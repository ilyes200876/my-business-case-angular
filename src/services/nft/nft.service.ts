import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NftInterface } from '../../app/interfaces/nft-interface';
import { Observable, catchError } from 'rxjs';
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

  addNft(nft : NftInterface){
    let body = JSON.stringify(nft);
    let header = { 'content-type': 'application/x-www-form-urlencoded'};
    return this.http.post<any>(urlApi + "/sub-category/add", body, {'headers': header})
    .pipe(
      catchError((error: any) => {
        console.error(error);
        throw error;
      })
    );
  }

  updateNft(id: number, data: any){
    const body = JSON.stringify(data);
    const header = { 'content-type': 'application/x-www-form-urlencoded'};
    return this.http.put<any>(urlApi + "/update/" + id, body,  {'headers': header});
  }

  deleteNft(id: number): Observable<any>{
    return this.http.delete<any>(urlApi + '/delete/' + id);
  }

}
