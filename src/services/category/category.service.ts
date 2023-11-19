import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
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
  
}
