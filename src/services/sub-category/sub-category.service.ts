import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError } from 'rxjs';
import { urlApi } from 'src/app/environmental/environmental';
import { SubCategoryInterface } from 'src/app/interfaces/sub-category-interface';

@Injectable({
  providedIn: 'root'
})
export class SubCategoryService {

  urlSubCategoryAll = urlApi + "/subCategory";

  constructor(private http: HttpClient) { }

  getAll(){
    return this.http.get<SubCategoryInterface[]>(this.urlSubCategoryAll)
  }

  getSubCategorytById(id: number){
    return this.http.get<SubCategoryInterface>(this.urlSubCategoryAll + "/show/" + id);
  }

  addSubCategory(subCategory : SubCategoryInterface){
    let body = JSON.stringify(subCategory);
    let header = { 'content-type': 'application/x-www-form-urlencoded'};
    return this.http.post<SubCategoryInterface>(this.urlSubCategoryAll + "/add", body, {'headers': header})
    .pipe(
      catchError((error) => {
        console.error(error);
        throw error;
      })
    );
  }

  updateSubCategory(id: number, data: any){
    const body = JSON.stringify(data);
    const header = { 'content-type': 'application/x-www-form-urlencoded'};
    return this.http.put<any>(this.urlSubCategoryAll + "/update/" + id, body,  {'headers': header});
  }

  deleteSubCategoey(id: number){
    return this.http.delete(this.urlSubCategoryAll + '/delete/' + id);
  }

}
