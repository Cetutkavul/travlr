import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TripData } from '../services/trip-data';
import { Trip } from '../models/trip';

@Component({
  selector: 'app-edit-trip',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './edit-trip.html',
  styleUrl: './edit-trip.css'
})
export class EditTrip implements OnInit {

  editForm!: FormGroup;
  submitted = false;
  tripCode = '';

  constructor(
    private fb: FormBuilder,
    private tripService: TripData,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {

    // GET CODE FROM ROUTE
    this.tripCode = this.route.snapshot.paramMap.get('code') || '';

    this.editForm = this.fb.group({
      code: ['', Validators.required],
      name: ['', Validators.required],
      length: ['', Validators.required],
      start: ['', Validators.required],
      resort: ['', Validators.required],
      perPerson: ['', Validators.required],
      image: ['', Validators.required],
      description: ['', Validators.required]
    });

    this.loadTrip();
  }

  private loadTrip(): void {

    this.tripService.getTrip(this.tripCode).subscribe({
      next: (tripArray: Trip[]) => {

        if (!tripArray || tripArray.length === 0) {
          alert('Trip not found');
          this.router.navigate(['']);
          return;
        }

        const trip = tripArray[0];

        const formattedTrip = {
          ...trip,
          start: trip.start
            ? new Date(trip.start).toISOString().substring(0, 10)
            : ''
        };

        this.editForm.patchValue(formattedTrip);
      },
      error: () => {
        alert('Trip not found');
        this.router.navigate(['']);
      }
    });
  }

  onSubmit(): void {

    this.submitted = true;
    if (this.editForm.invalid) return;

    this.tripService.updateTrip(this.tripCode, this.editForm.value)
      .subscribe({
        next: () => {
          alert('Trip updated!');
          this.router.navigate(['']);
        },
        error: err => console.error(err)
      });
  }

  get f() {
    return this.editForm.controls;
  }
}
