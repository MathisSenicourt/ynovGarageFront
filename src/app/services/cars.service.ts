import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CarsService {

  constructor(
    private http: HttpClient
  ) { }

  getAllCars() {
    return this.http.get<any[]>('http://localhost:3000/cars/');
  }
}
