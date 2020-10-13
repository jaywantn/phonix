import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AppConstants } from './app.constants';
@Injectable({
  providedIn: 'root'
})

export class ConfigService {

  constructor(private http: HttpClient, public appConstants: AppConstants) { }

  apiUrl = this.appConstants.baseURL;
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  public generalDetails(): Observable<any> {
    return this.http.get(this.apiUrl + 'page/generalDetails');
  }

  public footerPropperty(): Observable<any> {
    return this.http.get(this.apiUrl + 'property/propertyFooter');
  }

}
