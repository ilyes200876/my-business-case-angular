import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError } from 'rxjs';
import { urlApi } from 'src/app/environmental/environmental';
import { CategoryInterface } from 'src/app/interfaces/category-interface';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  urlCategoryAll = urlApi + "/category";

  constructor(private http: HttpClient) { }

  getAll(){
    return this.http.get<CategoryInterface[]>(this.urlCategoryAll)
  }

  getNftById(id: number){
    return this.http.get<CategoryInterface>(this.urlCategoryAll + "/show/" + id);
  }

  addCategory(category : CategoryInterface){
    let body = JSON.stringify(category);
    let header = { 'content-type': 'application/x-www-form-urlencoded'};
    return this.http.post<any>(urlApi + "/sub-category/add", body, {'headers': header})
    .pipe(
      catchError((error: any) => {
        console.error(error);
        throw error;
      })
    );
  }

  updateCategory(id: number, data: any){
    const body = JSON.stringify(data);
    const header = { 'content-type': 'application/x-www-form-urlencoded'};
    return this.http.put<any>(urlApi + "/update/" + id, body,  {'headers': header});
  }

  deleteCategory(id: number): Observable<any>{
    return this.http.delete<any>(urlApi + '/delete/' + id);
  }
  
}
