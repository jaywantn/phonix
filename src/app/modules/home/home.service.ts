import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { AppConstants } from './../../app.constants';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  constructor(private http: HttpClient, public appConstants: AppConstants) { }
  apiUrl = this.appConstants.baseURL;
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  bannerList;

  public getBanner(): Observable<any> {
    return this.http.get(this.apiUrl + 'banner/bannerList');
  }
  public getLocation(): Observable<any> {
    return this.http.get(this.apiUrl + 'property/location');
  }
  public getPropertyType(): Observable<any> {
    return this.http.get(this.apiUrl + 'property/propertyType');
  }
  public getPropertyList(): Observable<any> {
    return this.http.get(this.apiUrl + 'property/listFront');
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
