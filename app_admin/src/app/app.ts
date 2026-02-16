import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TripListing } from './trip-listing/trip-listing';
import { NavbarComponent } from './navbar/navbar';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule,NavbarComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = 'Travlr Getaways Admin!';
}
