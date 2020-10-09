import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  isLoaderShown = new BehaviorSubject<boolean>(false);

  constructor() { }

  public showLoader(): void {
    this.isLoaderShown.next(true);
  }

  public hideLoader(): void {
    setTimeout (() => {
      this.isLoaderShown.next(false);
   }, 4000);
  }
}
