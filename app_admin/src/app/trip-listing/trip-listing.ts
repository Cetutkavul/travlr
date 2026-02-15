import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TripCard } from '../trip-card/trip-card';
import { TripData } from '../services/trip-data';
import { Trip } from '../models/trip';
import { Router } from '@angular/router';


@Component({
  selector: 'app-trip-listing',
  standalone: true,
  imports: [CommonModule, TripCard],
  templateUrl: './trip-listing.html',
  styleUrls: ['./trip-listing.css']
})
export class TripListing implements OnInit {

  trips!: Trip[];
  message = '';

  constructor(
    private tripData: TripData,
    private cdr: ChangeDetectorRef,
    private router: Router
  ) {
    console.log('TripListing constructor');
  }

  public addTrip(): void {
    this.router.navigate(['/add-trip']);
  }

  ngOnInit(): void {
    console.log('TripListing ngOnInit');
    this.loadTrips();
  }

  private loadTrips(): void {
    this.tripData.getTrips().subscribe({
      next: (data: Trip[]) => {

        console.log('Trips from API:', data);

        // create new reference for Angular change detection
        this.trips = data ? [...data] : [];

        this.message =
          this.trips.length > 0
            ? `There are ${this.trips.length} trips available`
            : 'No trips returned';

        this.cdr.detectChanges();
      },
      error: (err) => {
        console.error('Trip loading error:', err);
        this.message = 'ERROR loading trips';
      }
    });
  }

  //FIX for *ngFor trackBy error
  trackById(index: number, trip: Trip): string | number {
    return trip?._id ?? index;
  }
}
