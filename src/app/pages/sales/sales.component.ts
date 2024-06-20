import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SalesCarPopupComponent } from '../../components/sales-car-popup/sales-car-popup.component';
import { AddCarFormPopupComponent } from '../../components/add-car-form-popup/add-car-form-popup.component';

@Component({
  selector: 'app-sales',
  standalone: true,
  imports: [HeaderComponent,RouterOutlet, CommonModule,FormsModule,SalesCarPopupComponent,AddCarFormPopupComponent],
  templateUrl: './sales.component.html',
  styleUrl: './sales.component.css'
})
export class SalesComponent {
  brands: string[] = ['Toyota', 'Honda', 'Ford', 'BMW', 'Audi'];
  selectedBrands: string[] = [];
  priceMin: number = 0;
  priceMax: number = 100000;
  kmMin: number = 0;
  kmMax: number = 1000;
  yearMin: number = 1990;
  yearMax: number = new Date().getFullYear();
  yearMinValue: number = 1990;
  yearMaxValue: number = new Date().getFullYear();

  listStatus: string[] = ['Disponible', 'Réservé', 'Vendu', 'En attente'];
  selectedListStatus: string[] = [];

  cars: any[] = [
    { 
      model: 'Camry',
      brand: 'Toyota',
      status: 'Disponible',
      year: 2020,
      km: 15000,
      price: 25000
    },
    { 
      model: 'Accord',
      brand: 'Honda',
      status: 'Réservé',
      year: 2019,
      km: 18000,
      price: 22000
    },
    { 
      model: 'Mustang',
      brand: 'Ford',
      status: 'En attente',
      year: 2021,
      km: 5000,
      price: 40000
    }
  ];

  onCheckboxChange(event: any) {
    const brand = event.target.value;
    if (event.target.checked) {
      this.selectedBrands.push(brand);
    } else {
      const index = this.selectedBrands.indexOf(brand);
      if (index > -1) {
        this.selectedBrands.splice(index, 1);
      }
    }
    console.log(this.selectedBrands); 
  }

  onCheckboxChangeStatus(event: any) {
    const status = event.target.value;
    if (event.target.checked) {
      this.selectedListStatus.push(status);
    } else {
      const index = this.selectedListStatus.indexOf(status);
      if (index > -1) {
        this.selectedListStatus.splice(index, 1);
      }
    }
    console.log(this.selectedListStatus); 
  }

  onPriceChange() {
    console.log(`Prix Min: ${this.priceMin}€`);
    console.log(`Prix Max: ${this.priceMax}€`);
  }

  onKmChange() {
    console.log(`km Min: ${this.kmMin} km`);
    console.log(`km Max: ${this.kmMax} km`);
  }

  onYearChange() {
    console.log(`Année Min: ${this.yearMinValue}`);
    console.log(`Année Max: ${this.yearMaxValue}`);
  }

  viewDetails(car: any) {
    console.log('Voir détails de la voiture', car);
  }


  selectedCar: any;
  popupVisible = false;
  popupAction = '';

  showPopup(car: any, action: string) {
    this.selectedCar = car;
    this.popupAction = action;
    this.popupVisible = true;
  }

  onPopupConfirmed(confirmed: boolean) {
    if (confirmed) {
      console.log(`${this.popupAction} la voiture:`, this.selectedCar);
      // Ajoutez ici la logique pour accepter ou refuser la voiture
    }
    this.popupVisible = false;
  }



  createCarPopupVisible = false;

  showCreatePopup() {
    this.createCarPopupVisible = true;
  }

  onCarAdded(newCar: any) {
    this.cars.push(newCar);
    this.createCarPopupVisible = false;
  }

  onCancelCreate() {
    this.createCarPopupVisible = false;
  }

}
