import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { AppConstants } from './app.constants';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})

export class ConfigService {
  public propertyToDisplay = new Subject<any>();
  private userIdSource = new BehaviorSubject<any>(0);
  currentUser = this.userIdSource.asObservable();

  constructor(
    private router: Router,
    private http: HttpClient,
    public appConstants: AppConstants) { }

  apiUrl = this.appConstants.baseURL;
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  public generalDetails(): Observable<any> {
    return this.http.get(this.apiUrl + 'page/generalDetails');
  }

  public footerPropperty(): Observable<any> {
    return this.http.get(this.apiUrl + 'property/propertyFooter');
  }

  setPropertyToDisplay(property: number): any {
    this.userIdSource.next(property);
  }

}
