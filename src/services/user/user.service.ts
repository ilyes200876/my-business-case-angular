import { Injectable } from '@angular/core';
import { UserInterface } from '../../app/interfaces/user-interface';
import { Observable, catchError, map } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { urlApi } from 'src/app/environmental/environmental';
import { AuthService } from 'src/app/auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient, private authSErvice: AuthService) { }

  getAllUsers(): Observable<UserInterface[]>{
    return this.http.get<UserInterface[]>(urlApi + '/user');
  }

  getUsertById(id: number){
    return this.http.get<UserInterface>(urlApi + "/user/show/" + id);
  }

  getUserDetails(){}
  getUserData(): Observable<UserInterface | undefined> {
    let loggedInEmail = this.authSErvice.getLoggedInUseremail();
    console.log('E-mail extrait du token :', loggedInEmail);
    return this.getAllUsers().pipe(
      map((users: UserInterface[]) => {
        console.log('Tous les utilisateurs :', users);
        return users.find(user => user.email === loggedInEmail);
      })
    );
  }

  createUser(user: UserInterface): Observable<any>{
    let body = JSON.stringify(user);
    let header = { 'content-type': 'application/x-www-form-urlencoded'};
    return this.http.post<any>(urlApi + "/user/add", body, {'headers': header})
    .pipe(
      catchError((error: any) => {
        console.error(error);
        throw error;
      })
    );
  }

}
