import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { authentication } from '../services/authentication';
import { RouterModule } from '@angular/router';



@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class NavbarComponent implements OnInit {
  constructor(
    private authentication: authentication
  ) { }
  ngOnInit() { }
  public isLoggedIn(): boolean {
    return this.authentication.isLoggedIn();
  }
  public onLogout(): void {
    return this.authentication.logout();
  }
}
