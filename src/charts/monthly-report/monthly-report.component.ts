import { Component, ViewChild } from '@angular/core';

import {
  ApexChart,
  ApexAxisChartSeries,
  ChartComponent,
  ApexDataLabels,
  ApexPlotOptions,
  ApexYAxis,
  ApexLegend,
  ApexGrid,
  ApexFill,
  ApexStroke,
  ApexResponsive,
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
  fill: ApexFill;
  stroke: ApexStroke;
  responsive: ApexResponsive[];
};

@Component({
  selector: 'app-monthly-report',
  templateUrl: './monthly-report.component.html',
  styleUrls: ['./monthly-report.component.scss'],
})
export class MonthlyReportComponent {
  @ViewChild('chart') chart!: ChartComponent;
  public chartOptions: Partial<ChartOptions>;
  public chartOptions2: Partial<ChartOptions>;
  public showChart1: boolean = true;
  public showChart2: boolean = false;

  constructor() {
    this.chartOptions = {
      series: [
        {
          name: 'حوادث أقل',
          data: [
            21, 22, 10, 28, 16, 21, 13, 30, 50, 40, 30, 20, 21, 22, 10, 28, 16,
            21, 13, 30,
          ],
        },
        {
          name: 'حوادث متوسطه',
          data: [
            21, 22, 10, 28, 16, 21, 13, 30, 50, 40, 30, 20, 21, 22, 10, 28, 16,
            21, 13, 30,
          ],
        },
        {
          name: 'حوادث عاليه',
          data: [
            21, 22, 10, 28, 16, 21, 13, 30, 50, 40, 30, 20, 21, 22, 10, 28, 16,
            21, 13, 30,
          ],
        },
      ],
      chart: {
        height: 350,
        type: 'bar',
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            legend: {
              position: 'bottom',
            },
          },
        },
      ],

      colors: ['#F36E32', '#FECD54', '#2CD889'],
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
        position: 'right',
        fontSize: '14px',
        fontFamily: 'Tajawal',
        fontWeight: '500',
        itemMargin: {
          horizontal: 27,
          vertical: 2,
        },
        markers: {
          width: 18,
          height: 18,
          offsetX: 3,
        },
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
    this.chartOptions2 = {
      series: [
        {
          name: 'الوقائع المحبطه',
          data: [
            21, 22, 10, 28, 16, 21, 13, 30, 35, 40, 30, 20, 21, 22, 10, 28, 16,
            21, 13, 30, 35, 40, 30, 20, 50, 40, 30, 20, 50,
          ],
        },
        {
          name: 'الوقائع الغير محبطه',
          data: [
            10, 26, 20, 22, 17, 21, 19, 20, 30, 35, 30, 20, 21, 22, 15, 28, 16,
            21, 13, 30, 32, 35, 37, 40, 38, 37, 30, 32, 23,
          ],
        },
        {
          name: 'الوقائع المنتهيه بالموقع',
          data: [
            30, 14, 20, 43, 16, 32, 50, 70, 45, 33, 30, 14, 10, 9, 36, 48, 51,
            40, 17, 20, 34, 47, 42, 39, 37, 39, 38, 13, 20,
          ],
        },
      ],
      responsive: [
        {
          breakpoint: 480,
          options: {
            legend: {
              position: 'bottom',
            },
          },
        },
      ],
      chart: {
        height: 350,
        type: 'area',
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: 'smooth',
        lineCap: 'butt',
        width: 3,
        colors: ['#FECD54', '#2CD889', '#F7617D'],
        dashArray: [6, 0, 6],
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
      },
      fill: {
        type: 'gradient',
        gradient: {
          shadeIntensity: 1,
          opacityFrom: [0, 0.4, 0],
          opacityTo: [0, 0.8, 0],
          stops: [0, 90, 100],
        },
      },

      colors: ['#FECD54', '#4CA07A', '#F7617D'],
      legend: {
        position: 'right',
        fontSize: '14px',
        fontFamily: 'Tajawal',
        fontWeight: '500',
        itemMargin: {
          horizontal: 27,
          vertical: 2,
        },
        markers: {
          width: 18,
          height: 18,
          offsetX: 3,
        },
      },
    };
  }
  chartsSlider() {
    this.showChart1 = !this.showChart1;
    this.showChart2 = !this.showChart2;
  }
}
