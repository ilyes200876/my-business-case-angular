import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
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

}
