import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
//import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  apiUrl: string = 'http://phoenixdeveloper.in/backend/api/';
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  
  constructor(private http: HttpClient) { }

  public getPropertyList() {
    return this.http.get(this.apiUrl+'property/listFront');
  }
  public getPropertyDetails(pid) {
    return this.http.get(this.apiUrl+'property/details/'+pid);
  }
  public getPropertyType() {
    return this.http.get(this.apiUrl+'property/propertyType');
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
