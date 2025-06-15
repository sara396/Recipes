import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { user } from '../interface/userInterface';

@Injectable({
  providedIn: 'root'
})

export class UserServicesService {
  url: String = "http://localhost:1234/Users/"

  private register: Boolean = false
  private userName: String = ""
  private userId: String = ""

  public changeRegister(val: Boolean) {
    this.register = val
  }

  public getRegister(): Boolean {
    return this.register
  }

  public setUserName(name: String) {
    this.userName = name
  }
  public getUserName() {
    return this.userName
  }

    public setUserId(userId: String) {
    this.userId = userId
  }
  public getUserId() {
    return this.userId
  }


  constructor(private http: HttpClient) { }
  getAllUser(): Observable<Array<user>> {
    return this.http.get<Array<user>>(`${this.url}GetAllUsers`)
  }
  getUserByNameAndPass(name: String, pass: String): Observable<user> {
    return this.http.get<user>(`${this.url}GetUserByPassAndName/${name}/${pass}`)
  }
  addUser(newUser: user): Observable<Boolean> {
    return this.http.post<Boolean>(`${this.url}AddUser`, newUser)
  }

  getFavoriteRecipe(_id: String): Observable<Array<String>> {
    debugger
    return this.http.get<Array<String>>(`${this.url}getAllFevoriteRecipe/${_id}`)
  }

  //כל הפונקציות שלא השתמשתי
  addToFevoriteRecipe(_id:String,recipeId:String): Observable<String>{
    return this.http.post<String>(`${this.url}addToFevoriteRecipe/${_id}/${recipeId}`,null)
  }

}
