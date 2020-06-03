import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userStatus = new BehaviorSubject('guest');

  changeUserStatus(status: string) {
    this.userStatus.next(status);
  }

  constructor() { }
}
