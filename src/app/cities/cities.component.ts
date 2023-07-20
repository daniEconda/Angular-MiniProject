import { Component, EventEmitter, Input, Output } from '@angular/core';
import { City } from '../services/data.service';
  
@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.css']
})
export class CitiesComponent {
  @Input() city!:City;
  @Input() selection!:City;
  @Output() citySelectedEvent = new EventEmitter<City>();
  @Output() cityDeleteEvent = new EventEmitter<string>();


  onCitySelected(city: City):void {
    this.citySelectedEvent.emit(city)
  }
  onCityDelete(id: string): void {
    this.cityDeleteEvent.emit(id);
  }
}
