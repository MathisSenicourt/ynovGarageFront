import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../../components/header/header.component';
import { AddCarWorkshopPopupComponent } from '../../components/add-car-workshop-popup/add-car-workshop-popup.component';

interface WorkshopItem {
  car: string;
  repairType: string;
  location: string;
  mechanic: string;
  owner: string;
}

@Component({
  selector: 'app-workshop',
  standalone: true,
  imports: [HeaderComponent,RouterOutlet, CommonModule,FormsModule, AddCarWorkshopPopupComponent],
  templateUrl: './workshop.component.html',
  styleUrl: './workshop.component.css'
})
export class WorkshopComponent {


  workshopItems: WorkshopItem[] = [
    { car: 'Toyota Camry', repairType: 'Engine', location: 'Bay 1', mechanic: 'John Doe', owner: 'Alice' },
    { car: 'Honda Accord', repairType: 'Brakes', location: 'Bay 2', mechanic: 'Jane Smith', owner: 'Bob' },
  ];

  addCarWorkshopPopupVisible = false;

  showAddCarWorkshopPopup() {
    this.addCarWorkshopPopupVisible = true;
  }

  onCarAdded(newCar: any) {
    this.workshopItems.push(newCar);
    this.addCarWorkshopPopupVisible = false;
  }

  onCancelCreate() {
    this.addCarWorkshopPopupVisible = false;
  }
}
