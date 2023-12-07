import { Component, ViewChild } from '@angular/core';
import { Swiper } from 'swiper';

import {
  ApexChart,
  ApexAxisChartSeries,
  ChartComponent,
  ApexDataLabels,
  ApexPlotOptions,
  ApexYAxis,
  ApexLegend,
  ApexGrid,
} from 'ng-apexcharts';

type ApexXAxis = {
  type?: 'category' | 'datetime' | 'numeric';
  categories?: any;
  labels?: {
    style?: {
      colors?: string | string[];
      fontSize?: string;
    };
  };
};
export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  yaxis: ApexYAxis;
  xaxis: ApexXAxis;
  grid: ApexGrid;
  colors: string[];
  legend: ApexLegend;
};

@Component({
  selector: 'app-monthly-report',
  templateUrl: './monthly-report.component.html',
  styleUrls: ['./monthly-report.component.scss'],
})
export class MonthlyReportComponent {
  @ViewChild('chart') chart!: ChartComponent;
  public chartOptions: Partial<ChartOptions>;
  @ViewChild('swiperContainer') swiperContainer?: Swiper;

  constructor() {
    this.chartOptions = {
      series: [
        {
          name: 'distibuted',
          data: [
            21, 22, 10, 28, 16, 21, 13, 30, 50, 40, 30, 20, 21, 22, 10, 28, 16,
            21, 13, 30, 50, 40, 30, 20, 50, 40, 30, 20, 50,
          ],
        },
      ],
      chart: {
        height: 350,
        type: 'bar',
        events: {
          click: function (chart, w, e) {
            // console.log(chart, w, e)
          },
        },
      },
      colors: [
        '#008FFB',
        '#00E396',
        '#FEB019',
        '#FF4560',
        '#775DD0',
        '#546E7A',
        '#26a69a',
        '#D10CE8',
      ],
      plotOptions: {
        bar: {
          columnWidth: '30%',
          distributed: true,
        },
      },
      dataLabels: {
        enabled: false,
      },
      legend: {
        show: false,
      },
      grid: {
        show: false,
      },
      xaxis: {
        categories: [
          [1],
          [2],
          [3],
          [4],
          [5],
          [6],
          [7],
          [8],
          [9],
          [10],
          [11],
          [12],
          [13],
          [14],
          [15],
          [16],
          [17],
          [18],
          [19],
          [20],
          [21],
          [22],
          [23],
          [24],
          [25],
          [26],
          [27],
          [28],
          [29],
        ],
        labels: {
          style: {
            colors: [
              '#008FFB',
              '#00E396',
              '#FEB019',
              '#FF4560',
              '#775DD0',
              '#546E7A',
              '#26a69a',
              '#D10CE8',
            ],
            fontSize: '12px',
          },
        },
      },
    };
  }

  ngAfterViewInit() {
    if (this.swiperContainer) {
      console.log('Swiper instance:', this.swiperContainer);
    }
  }
}
