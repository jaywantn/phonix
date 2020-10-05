import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { AppConstants } from 'src/app/app.constants';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient, public appConstants: AppConstants) { }
  apiUrl = this.appConstants.baseURL;

  public getList(): Observable<any> {
    return this.http.get(this.apiUrl + 'news/listF');
  }

  public getDetails(newsId: any): Observable<any> {
    return this.http.get(this.apiUrl + 'news/details/' + newsId);
  }

  // Handle Errors
  error(error: HttpErrorResponse): any {
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
