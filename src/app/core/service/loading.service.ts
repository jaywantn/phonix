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
    this.isLoaderShown.next(false);
  }
}
