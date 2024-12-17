import { Component, inject } from '@angular/core';
import { HousingService } from '../housing.service';
import {HousingLocation} from '../housing-location/housinglocation';
import {HousingLocationComponent} from '../housing-location/housing-location.component';

@Component({
  selector: 'app-housing-location-container',
  templateUrl: './housing-location-container.component.html',
  imports: [
    HousingLocationComponent,

  ],
  styleUrls: ['./housing-location-container.component.scss']
})
export class HousingLocationContainerComponent {
  housingLocationList: HousingLocation[] = [];
  housingService = inject(HousingService);
  constructor() {
    this.housingLocationList = this.housingService.getAllHousingLocations();
    console.log(this.housingLocationList);
  }
}
