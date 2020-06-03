import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject, ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PreloaderService {

  constructor() { }

  public isVisibleSource$ = new BehaviorSubject<any>(false);

  hide() {
    this.isVisibleSource$.next(false);
  }

  show() {
    this.isVisibleSource$.next(true);
  }
  
}
