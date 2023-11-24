import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { urlApi } from 'src/app/environmental/environmental';
import { EthInterface } from 'src/app/interfaces/eth-interface';

@Injectable({
  providedIn: 'root'
})
export class EthService {

  constructor(private http: HttpClient) { }

  getEthPrice(): Observable<EthInterface[]>{
    return this.http.get<EthInterface[]>(urlApi + "/eth");
  }
}
