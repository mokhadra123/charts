import { Component } from '@angular/core';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent {
  selectedQuarter: string = 'Q1'; 
  constructor() {}

  onQuarterChange() {


  }
}
