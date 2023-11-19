import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { urlApi } from 'src/app/environmental/environmental';
import { AddressInterface } from 'src/app/interfaces/address-interface';

@Injectable({
  providedIn: 'root'
})
export class AddressService {

  urlAddressAll = urlApi + "/address";

  constructor(private http: HttpClient) { }

  getAll(){
    return this.http.get<AddressInterface[]>(this.urlAddressAll)
  }

  getNftById(id: number){
    return this.http.get<AddressInterface>(this.urlAddressAll + "/show/" + id);
  }
  
}
