import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  apiUrl  = '//phoenixdeveloper.in/backend/api/';
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient) { }

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
