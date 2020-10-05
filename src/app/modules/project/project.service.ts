import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { AppConstants } from 'src/app/app.constants';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private http: HttpClient, public appConstants: AppConstants) { }
  apiUrl = this.appConstants.baseURL;
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  public getPropertyList(): Observable<any> {
    return this.http.get(this.apiUrl + 'property/listFront');
  }

  public getPropertyDetails(pid): Observable<any> {
    return this.http.get(this.apiUrl + 'property/details/' + pid);
  }

  public getPropertyType(): Observable<any> {
    return this.http.get(this.apiUrl + 'property/propertyType');
  }

  sendPostRequest(data: any): Observable<any> {
    return this.http.post<any>(this.apiUrl + 'property/enquiry', data);
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
