import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { HttpErrorResponse, HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  apiUrl: string = 'https://phoenixdeveloper.in/backend/api/';
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient) { }

  public generalDetails() {
    return this.http.get(this.apiUrl+'page/generalDetails');
  }

}
