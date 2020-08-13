import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  apiUrl: string = 'http://localhost/phoenixdeveloper/api/banner/bannerList';
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  bannerList ;

  constructor(private http: HttpClient) { }

  getBanner() { 
    console.log(this.apiUrl);
    //return this.http.get(`${this.apiUrl}`);
    // return this.http.get(this.apiUrl).subscribe( (data) =>{
    //   console.log(data);
    // } );
     this.http.get(this.apiUrl).subscribe(
      data => {
        console.log(data);
        return data;
      },
      error => console.log('Could not load todos.')
    );
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