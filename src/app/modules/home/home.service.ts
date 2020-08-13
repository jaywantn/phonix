import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  apiUrl: string = 'http://phoenixdeveloper.in/backend/api/banner/bannerList';
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  bannerList;

  constructor(private http: HttpClient) { }

  public getBanner(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
  // Handle Errors
  error(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
