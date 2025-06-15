import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor(private http: HttpClient) { }
  url: String = "http://localhost:1234/Image/"


  uploudImg(file: FormData): Observable<any> {
    return this.http.post<any>(`${this.url}uploadImg`, file)
  }

}
