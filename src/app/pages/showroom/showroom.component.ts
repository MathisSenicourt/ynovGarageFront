import {Component, OnInit} from '@angular/core';
import {HeaderComponent} from '../../components/header/header.component';
import {RouterOutlet} from '@angular/router';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {CarsService} from "../../services/cars.service";

@Component({
  selector: 'app-showroom',
  standalone: true,
  imports: [HeaderComponent, RouterOutlet, CommonModule, FormsModule],
  templateUrl: './showroom.component.html',
  styleUrl: './showroom.component.css'
})
export class ShowroomComponent implements OnInit {

  constructor(
    private carsService: CarsService,
  ) {
  }

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

  cars: any[] = [
    {
      model: 'Camry',
      brand: 'Toyota',
      year: 2020,
      km: 15000,
      price: 25000
    },
    {
      model: 'Accord',
      brand: 'Honda',
      year: 2019,
      km: 18000,
      price: 22000
    },
    {
      model: 'Mustang',
      brand: 'Ford',
      year: 2021,
      km: 5000,
      price: 40000
    }
  ];

  ngOnInit() {
    this.carsService.getAllCars()
      .subscribe((data) => {
        this.cars = data;
        console.log(this.cars)
      });
    console.log(this.cars)
  }

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

  bookCar(carId: any) {
    this.carsService.bookAppointment(carId).subscribe(
      response => console.log('Appointment booked successfully:', response),
      error => console.error('Error booking appointment:', error)
    );
  }
}
