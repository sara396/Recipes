import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { recipe } from '../interface/recipe';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RecipeServicesService {
  url: String = "http://localhost:1234/Recipe/"
  constructor(private http: HttpClient) { }

  private typeToFilter = new BehaviorSubject<String>("");     //כאן הערך נשמר
  $listenToTypeToFilter = this.typeToFilter.asObservable()    //שיוכלו להאזין

  public getTypeToFilter(): String {
    return this.typeToFilter.value;
  }
  public setTypeToFilter(type: String): void {
    this.typeToFilter.next(type)
  }


  getAllRecipe(): Observable<Array<recipe>> {
    return this.http.get<Array<recipe>>(`${this.url}GetAllRecipe`)
  }
  getRecipeById(id: String): Observable<recipe> {
    return this.http.get<recipe>(`${this.url}GetRecipeById/${id}`)
  }
  addNewRecipe(recipe: recipe): Observable<recipe> {
    // const formData = new FormData();
    // console.log("recipe", recipe);

    // if ((recipe.pic as any) instanceof File) {
    //   formData.append('pic', recipe.pic);
    // }
    // formData.append("recipeName", recipe.recipeName)
    // formData.append("userCode", recipe.userCode.toString());
    // formData.append("type", recipe.type)
    // formData.append("time", recipe.time)
    // formData.append("level", recipe.level)
    // formData.append("ingredient", "")
    // return this.http.put<recipe>(`${this.url}postAndUpdate`, formData)
    return this.http.put<recipe>(`${this.url}postAndUpdate`, recipe)
  }


  //כל הפונקציות שלא השתמשתי

  deleteRecipe(_id: String, userCode: String): Observable<Boolean> {
    return this.http.delete<Boolean>(`${this.url}DeleteRecipeByIdAndPassword/${_id}/${userCode}`)
  }

}
