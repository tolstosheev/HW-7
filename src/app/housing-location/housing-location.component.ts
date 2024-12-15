import { Component, input } from '@angular/core';
import {IHouseItem} from "./IHouseItem";
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-housing-location',
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './housing-location.component.html',
  styleUrl: './housing-location.component.scss'
})
export class HousingLocationComponent {
  data = input<IHouseItem>();
}
