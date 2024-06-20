import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../../components/header/header.component';

@Component({
  selector: 'app-location',
  standalone: true,
  imports: [HeaderComponent,RouterOutlet, CommonModule,FormsModule],
  templateUrl: './location.component.html',
  styleUrl: './location.component.css'
})
export class LocationComponent {

  occupiedLocations: any[] = [
    { name: 'emplacement-1', car: { model: 'Camry', brand: 'Toyota' } },
    { name: 'emplacement-2', car: { model: 'Accord', brand: 'Honda' } }
  ];

  emptyLocations: any[] = [
    { name: 'emplacement-3' },
    { name: 'emplacement-4' },
    { name: 'emplacement-5' }
  ];

  constructor() { }

  showDetails(car: any) {
    console.log('Détails de la voiture', car);
  }
}
