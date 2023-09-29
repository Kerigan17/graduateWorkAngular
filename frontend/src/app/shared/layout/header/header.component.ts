import {Component, HostListener, OnInit} from '@angular/core';
import {AuthService} from "../../../core/auth/auth.service";
import {HttpErrorResponse} from "@angular/common/http";
import {MatSnackBar} from "@angular/material/snack-bar";
import {ActivatedRoute, Router} from "@angular/router";
import {UserInfoType} from "../../../../types/user-info.type";
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isLogged: boolean = false;
  userInfo: UserInfoType | null = null;
  linkElement: HTMLElement | null = null;

  constructor(private authService: AuthService,
              private _snackBar: MatSnackBar,
              private router: Router,
              private userService: UserService) {
    this.isLogged = this.authService.getIsLoggedIn();
  }

  ngOnInit() {
    if (this.isLogged) {
      this.userService.getUserInfo()
        .subscribe(data => {
          this.userInfo = data as UserInfoType;
        });
    }

    this.authService.isLogged$
      .subscribe((isLoggedIn: boolean) => {
        this.isLogged = isLoggedIn;

        if (this.isLogged) {
          this.userService.getUserInfo()
            .subscribe(data => {
              this.userInfo = data as UserInfoType;
            });
        }
      });
  }

  logout() {
    this.authService.logout()
      .subscribe({
        next: () => {
          this.doLogout();
        },
        error: (errorResponse: HttpErrorResponse) => {
          this.doLogout();
        }
      })
  }

  doLogout() {
    this.authService.removeTokens();
    this.authService.userId = null;
    this._snackBar.open('Вы вышли из системы');
    this.router.navigate(['/']);
  }
  @HostListener('document:click', ['$event'])
  click(event: Event) {
    if ((event.target as HTMLElement)) {
      try {
        if ((event.target as HTMLElement).className.indexOf('header-menu-link') !== -1) {
          if (this.linkElement !== event.target) {
            this.linkElement?.classList.remove('active');
            this.linkElement = event.target as HTMLElement;
            this.linkElement.classList.add('active');
          }
        }
      } catch (error) {

      }
    }
  }
}
