import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { AppConstants } from 'src/app/app.constants';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http: HttpClient, public appConstants: AppConstants) { }
  apiUrl = this.appConstants.baseURL;
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  bannerList;

  public getBanner(): Observable<any> {
    return this.http.get(this.apiUrl + 'page/contact');
  }

  sendPostRequest(data: any): Observable<any> {
      return this.http.post<any>(this.apiUrl + 'page/contactEnquiry', data);
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
