import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserService } from '../user/user.service';
import { Router } from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient,private userService: UserService, private router: Router) { }

  login(username: string, password: string) {
    return this.http.post('/api/login', {
      username,
      password
    })
  }

  logout() {
    this.userService.changeUserStatus('guest');
    this.router.navigate(['/login']);
  }
}
