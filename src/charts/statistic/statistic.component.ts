import { Component, OnInit, ViewChild } from '@angular/core';
import * as chartData from '../../assets/datachartupdate.json';
import * as citiesJson from '../../assets/cities.json';
import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexTooltip,
  ApexStroke,
  ApexYAxis,
} from 'ng-apexcharts';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  stroke: ApexStroke;
  tooltip: ApexTooltip;
  dataLabels: ApexDataLabels;
  yaxis: ApexYAxis;
};

interface CityData {
  [key: string]: string[];
}
@Component({
  selector: 'app-statistic',
  templateUrl: './statistic.component.html',
  styleUrls: ['./statistic.component.scss'],
})
export class StatisticComponent implements OnInit {
  @ViewChild('chart') chart!: ChartComponent;
  public chartOptions: Partial<ChartOptions>;
  // selectedYear: string = '2023';
  // selectedQuarter: string = 'quarter1';
  // selectedDataType: string = 'accident';
  // selectedCityNames: string[] = [];

  selectedSector: string = 'EasternSector';
  cities: CityData = citiesJson;
  cityNames: string[] = [];

  constructor() {
    const months = [' يناير', 'فبراير ', 'مارس ', 'ابريل'];

    const accidents = [
      { type: 'كبيرة', data: [0, 0, 0, 0] },
      { type: 'متوسطة', data: [1, 4, 1, 2] },
      { type: 'بسيطة', data: [1, 5, 3, 2] },
      { type: 'وفيات', data: [0, 1, 2, 2] },
      { type: 'محبطة', data: [0, 0, 3, 2] },
      { type: 'غير محبطة', data: [0, 0, 2, 3] },
      { type: 'انهاء البلاغ', data: [0, 4, 2, 2] },
    ];

    this.chartOptions = {
      series: accidents.map((accident) => ({
        name: accident.type,
        data: accident.data,
      })),
      chart: {
        height: 350,
        type: 'area',
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: 'smooth',
      },
      xaxis: {
        categories: months,
      },
      tooltip: {
        x: {
          format: 'dd/MM/yy HH:mm',
        },
      },
    };
  }

  ngOnInit(): void {
    this.updateCityNames();
  }
  updateCityNames(): void {
    this.cityNames = this.cities[this.selectedSector] || [];
  }
}
