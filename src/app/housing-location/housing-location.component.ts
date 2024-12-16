import { Component, input } from '@angular/core';
import {IHouseItem} from "./IHouseItem";

@Component({
  selector: 'app-housing-location',
  imports: [

  ],
  templateUrl: './housing-location.component.html',
  styleUrl: './housing-location.component.scss'
})
export class HousingLocationComponent {
  data = input<IHouseItem>();
}
