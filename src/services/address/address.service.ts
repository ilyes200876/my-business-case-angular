import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError } from 'rxjs';
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

  addAddress(address : AddressInterface){
    let body = JSON.stringify(address);
    let header = { 'content-type': 'application/x-www-form-urlencoded'};
    return this.http.post<any>(urlApi + "/sub-category/add", body, {'headers': header})
    .pipe(
      catchError((error: any) => {
        console.error(error);
        throw error;
      })
    );
  }

  updateAddress(id: number, data: any){
    const body = JSON.stringify(data);
    const header = { 'content-type': 'application/x-www-form-urlencoded'};
    return this.http.put<any>(urlApi + "/update/" + id, body,  {'headers': header});
  }

  deleteAddress(id: number): Observable<any>{
    return this.http.delete<any>(urlApi + '/delete/' + id);
  }

}
