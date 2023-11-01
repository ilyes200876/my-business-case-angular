import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CredentialsInterface } from './interfaces/user-interface';
import { TokenInterface } from './interfaces/token-interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  url = "https://127.0.0.1:8000/api/login_check";

  constructor(private http: HttpClient) { }

  login(credential: CredentialsInterface): Observable<TokenInterface>{
    return this.http.post<TokenInterface>(this.url, credential);
  }

}
