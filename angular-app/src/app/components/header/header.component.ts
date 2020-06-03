import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user/user.service';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private userSerivice: UserService, private authService: AuthService) { }

  text: string = '';

  isLogined = false;

  ngOnInit(): void {
    this.userSerivice.userStatus.subscribe((status) => {
      console.log(status);
      if (status !== 'guest') {
        this.isLogined = true;
      }
    });
  }

  logoutUser() {
    this.authService.logout();
  }

}
