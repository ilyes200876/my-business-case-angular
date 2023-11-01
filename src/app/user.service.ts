import { Injectable } from '@angular/core';
import { UserInterface } from './interfaces/user-interface';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getAllUsers(): Observable<UserInterface[]>{
    return this.http.get<UserInterface[]>('urlApi' + '/user');
  }
}
