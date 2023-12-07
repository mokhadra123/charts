import { Component, ViewChild } from '@angular/core';
import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexTooltip,
  ApexStroke,
  ApexYAxis,
  ApexFill,
} from 'ng-apexcharts';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  stroke: ApexStroke;
  tooltip: ApexTooltip;
  dataLabels: ApexDataLabels;
  yaxis: ApexYAxis;
  fill: ApexFill;
  colors: any;
};

@Component({
  selector: 'app-individual-chart',
  templateUrl: './individual-chart.component.html',
  styleUrls: ['./individual-chart.component.scss'],
})
export class IndividualChartComponent {
  @ViewChild('chart') chart!: ChartComponent;
  public chartOptions: Partial<ChartOptions> = {};
  public chartOptions2: Partial<ChartOptions> = {};
  public chartOptions3: Partial<ChartOptions> = {};
  public chartOptions4: Partial<ChartOptions> = {};
  public chartOptions5: Partial<ChartOptions> = {};
  public chartOptions6: Partial<ChartOptions> = {};

  constructor() {
    const months = [' يناير', 'فبراير ', 'مارس ', 'ابريل'];

    const accidentsDeath = [{ data: [1, 2, 2, 4] }];

    this.chartOptions = {
      series: accidentsDeath.map((accident) => ({
        data: accident.data,
      })),
      chart: {
        height: 170,
        type: 'area',
      },
      dataLabels: {
        enabled: false,
      },
      fill: {
        type: 'gradient',
        gradient: {
          shadeIntensity: 1,
          opacityFrom: 0,
          opacityTo: 0,
          stops: [0, 90, 100],
        },
      },
      stroke: {
        width: 2,
        colors: ['red'],
      },
      xaxis: {
        categories: months,

        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
        tooltip: {
          enabled: true,
        },
      },
      yaxis: {
        axisTicks: {
          show: false,
        },
        axisBorder: {
          show: false,
        },
        labels: {
          show: false,
        },
      },
    };
    this.chartOptions2 = {
      series: accidentsDeath.map((accident) => ({
        data: accident.data,
      })),
      chart: {
        height: 170,
        type: 'area',
      },
      dataLabels: {
        enabled: false,
      },
      fill: {
        type: 'gradient',
        gradient: {
          type: 'horizontal',
          shadeIntensity: 0.5,
          gradientToColors: undefined,
          inverseColors: true,
          opacityFrom: 0.1,
          opacityTo: 0.5,
          stops: [0, 30, 0],
        },
      },
      stroke: {
        width: 2,
        colors: ['#51CCA9'],
        dashArray: 5,
      },
      colors: ['#51CCA9'],
      xaxis: {
        categories: months,

        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
        tooltip: {
          enabled: true,
        },
      },
      yaxis: {
        axisTicks: {
          show: false,
        },
        axisBorder: {
          show: false,
        },
        labels: {
          show: false,
        },
      },
    };
    this.chartOptions3 = {
      series: accidentsDeath.map((accident) => ({
        data: accident.data,
      })),
      chart: {
        height: 170,
        type: 'area',
      },
      dataLabels: {
        enabled: false,
      },
      fill: {
        type: 'gradient',
        gradient: {
          type: 'vertical',
          shadeIntensity: 0.5,
          gradientToColors: undefined,
          inverseColors: true,
          opacityFrom: 0.1,
          opacityTo: 0.5,
          stops: [0, 30, 0],
        },
      },
      stroke: {
        width: 2,
        colors: ['#17B8E0'],
        dashArray: 5,
      },
      colors: ['#17B8E0'],
      xaxis: {
        categories: months,

        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
        tooltip: {
          enabled: true,
        },
      },
      yaxis: {
        axisTicks: {
          show: false,
        },
        axisBorder: {
          show: false,
        },
        labels: {
          show: false,
        },
      },
    };
    this.chartOptions4 = {
      series: accidentsDeath.map((accident) => ({
        data: accident.data,
      })),
      chart: {
        height: 170,
        type: 'area',
      },
      dataLabels: {
        enabled: false,
      },
      fill: {
        type: 'gradient',
        gradient: {
          shadeIntensity: 1,
          opacityFrom: 0.4,
          opacityTo: 0.7,
          stops: [0, 90, 100],
        },
      },
      stroke: {
        width: 2,
        colors: ['#8A8AA5'],
        dashArray: 5,
      },
      colors: ['#8A8AA5'],
      xaxis: {
        categories: months,

        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
        tooltip: {
          enabled: true,
        },
      },
      yaxis: {
        axisTicks: {
          show: false,
        },
        axisBorder: {
          show: false,
        },
        labels: {
          show: false,
        },
      },
    };
    this.chartOptions5 = {
      series: accidentsDeath.map((accident) => ({
        data: accident.data,
      })),
      chart: {
        height: 170,
        type: 'area',
      },
      dataLabels: {
        enabled: false,
      },
      fill: {
        type: 'gradient',
        gradient: {
          shadeIntensity: 1,
          opacityFrom: 0.4,
          opacityTo: 0.7,
          stops: [0, 90, 100],
        },
      },
      stroke: {
        width: 2,
        colors: ['#84BC26'],
        dashArray: 5,
      },
      colors: ['#84BC26'],
      xaxis: {
        categories: months,

        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
        tooltip: {
          enabled: true,
        },
      },
      yaxis: {
        axisTicks: {
          show: false,
        },
        axisBorder: {
          show: false,
        },
        labels: {
          show: false,
        },
      },
    };
  
    this.chartOptions6 = {
      series: accidentsDeath.map((accident) => ({
        data: accident.data,
      })),
      chart: {
        height: 170,
        type: 'area',
      },
      dataLabels: {
        enabled: false,
      },
      fill: {
        type: 'gradient',
        gradient: {
          type: 'horizontal',
          shadeIntensity: 0.5,
          gradientToColors: undefined,
          inverseColors: true,
          opacityFrom: 0.1,
          opacityTo: 0.5,
          stops: [0, 30, 0],
        },
      },
      stroke: {
        width: 2,
        colors: ['#FECD54'],
        dashArray: 5,
      },
      colors: ['#FECD54'],
      xaxis: {
        categories: months,

        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
        tooltip: {
          enabled: true,
        },
      },
      yaxis: {
        axisTicks: {
          show: false,
        },
        axisBorder: {
          show: false,
        },
        labels: {
          show: false,
        },
      },
    };
  }
}
