import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Trip } from '../models/trip';
import { authentication } from '../services/authentication';

@Component({
  selector: 'app-trip-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './trip-card.html',
  styleUrl: './trip-card.css'
})
export class TripCard implements OnInit {

  @Input() trip!: Trip;

  constructor(
    private router: Router,
    private authenticationService: authentication
  ) {}

  ngOnInit(): void {}

  public isLoggedIn(){
    return this.authenticationService.isLoggedIn();
  }

  // FINAL FIX
  public editTrip(trip: Trip){
    this.router.navigate(['/edit-trip', trip.code]);
  }
}
