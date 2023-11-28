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
};

@Component({
  selector: 'app-individual-chart',
  templateUrl: './individual-chart.component.html',
  styleUrls: ['./individual-chart.component.scss'],
})
export class IndividualChartComponent {
  @ViewChild('chart') chart!: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

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
  }
}
