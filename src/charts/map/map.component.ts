import { Component } from '@angular/core';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent {
  selectedQuarter: string = 'Q1'; // Default selected quarter

  constructor() {}

  onQuarterChange() {
    // Implement the logic you want to execute when the quarter changes
    console.log('Selected Quarter:', this.selectedQuarter);

    // Navigate to the same route to trigger a refresh
    window.location.reload();
  }
}
