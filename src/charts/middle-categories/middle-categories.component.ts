import { Component, ViewChild } from '@angular/core';

import {
  ApexNonAxisChartSeries,
  ApexResponsive,
  ApexAxisChartSeries,
  ApexChart,
  ChartComponent,
  ApexDataLabels,
  ApexPlotOptions,
  ApexYAxis,
  ApexLegend,
  ApexStroke,
  ApexXAxis,
  ApexFill,
  ApexTooltip,
} from 'ng-apexcharts';

export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  responsive: ApexResponsive[];
  labels: any;
  series2: ApexAxisChartSeries;
  chart2: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  yaxis: ApexYAxis;
  xaxis: ApexXAxis;
  fill: ApexFill;
  tooltip: ApexTooltip;
  stroke: ApexStroke;
  legend: ApexLegend;
};

@Component({
  selector: 'app-middle-categories',
  templateUrl: './middle-categories.component.html',
  styleUrls: ['./middle-categories.component.scss'],
})
export class MiddleCategoriesComponent {
  @ViewChild('chart') chart!: ChartComponent;
  @ViewChild('barChart') barChart!: ChartComponent;
  public chartOptions!: Partial<ChartOptions>;
  public barChartOptions!: Partial<ChartOptions>;
  public selectedYear: string = '2023';
  public selectedQuarter: string = 'Q1';

  constructor() {
    this.updateData();
    this.barChartOptions = {
      series2: [
        {
          name: 'الوقائع المحبطه',
          data: [44, 55, 57, 56, 61, 58, 63, 60, 66],
        },
        {
          name: 'الوقائع الغير محبطه',
          data: [76, 85, 101, 98, 87, 105, 91, 114, 94],
        },
        {
          name: 'الوقائع المنتهيه بالموقع  ',
          data: [35, 41, 36, 26, 45, 48, 52, 53, 41],
        },
      ],
      chart2: {
        type: 'bar',
        height: 350,
        stacked: true,
        toolbar: {
          show: true,
        },
        zoom: {
          enabled: true,
        },
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '55%',
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        show: true,
        width: 2,
        colors: ['transparent'],
      },
      xaxis: {
        categories: [
          'Feb',
          'Mar',
          'Apr',
          'May',
          'Jun',
          'Jul',
          'Aug',
          'Sep',
          'Oct',
        ],
      },
      yaxis: {
        title: {
          text: '$ (thousands)',
        },
      },
      fill: {
        opacity: 1,
      },
      tooltip: {
        y: {
          formatter: function (val) {
            return '$ ' + val + ' thousands';
          },
        },
      },
      legend: {
        position: 'bottom',
      },
    };
  }

  onYearChange() {
    this.updateData();
  }

  onQuarterChange() {
    this.updateData();
  }

  private updateData() {
    const crimesForSelectedYear = this.fetchCrimesData(
      this.selectedYear,
      this.selectedQuarter
    );

    this.chartOptions = {
      series: crimesForSelectedYear.map((crime) => crime.cases),
      chart: {
        type: 'donut',
        width: 400,
      },
      legend: {
        position: 'left',
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

          // offsetY:10
        },
      },
      labels: crimesForSelectedYear.map((crime) => crime.incident),
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 330,
            },
          },
        },
      ],
    };
  }
  private fetchCrimesData(year: string, quarter: string) {
    if (year === '2023') {
      if (quarter === 'Q1') {
        return [
          { id: 1, date: '17-5-2023', incident: ' كبيرة', cases: 54 },
          { id: 2, date: '14-1-2023', incident: ' متوسطه', cases: 85 },
          {
            id: 3,
            date: '17-2-2023',
            incident: 'الوفيات',
            cases: 75,
          },
        ];
      } else if (quarter === 'Q2') {
        return [
          { id: 1, date: '17-6-2023', incident: ' كبيرة', cases: 32 },
          { id: 2, date: '14-7-2023', incident: ' متوسطه', cases: 44 },
          {
            id: 3,
            date: '17-8-2023',
            incident: 'الوفيات',
            cases: 67,
          },
        ];
      } else if (quarter === 'Q3') {
        return [
          { id: 1, date: '17-6-2023', incident: ' كبيرة', cases: 32 },
          { id: 2, date: '14-7-2023', incident: ' متوسطه', cases: 44 },
          {
            id: 3,
            date: '17-8-2023',
            incident: 'الوفيات',
            cases: 67,
          },
        ];
      } else if (quarter === 'Q4') {
        return [
          { id: 1, date: '17-6-2023', incident: ' كبيرة', cases: 32 },
          { id: 2, date: '14-7-2023', incident: ' متوسطه', cases: 44 },
          {
            id: 3,
            date: '17-8-2023',
            incident: 'الوفيات',
            cases: 67,
          },
        ];
      }
    } else if (year === '2022') {
      if (quarter === 'Q1') {
        return [
          { id: 1, date: '17-5-2023', incident: ' كبيرة', cases: 54 },
          { id: 2, date: '14-1-2023', incident: ' متوسطه', cases: 85 },
          {
            id: 3,
            date: '17-2-2023',
            incident: 'الوفيات',
            cases: 75,
          },
          {
            id: 4,
            date: '7-3-2023',
            incident: 'تسليم شخص للدوريات الأمنية الوفيات',
            cases: 78,
          },
          {
            id: 5,
            date: '19-4-2023',
            incident: 'التعدي علي المنشأت العامه',
            cases: 37,
          },
        ];
      } else if (quarter === 'Q2') {
        return [
          { id: 1, date: '17-6-2023', incident: ' كبيرة', cases: 32 },
          { id: 2, date: '14-7-2023', incident: ' متوسطه', cases: 44 },
          {
            id: 3,
            date: '17-8-2023',
            incident: 'الوفيات',
            cases: 67,
          },
        ];
      } else if (quarter === 'Q3') {
        return [
          { id: 1, date: '17-6-2023', incident: ' كبيرة', cases: 32 },
          { id: 2, date: '14-7-2023', incident: ' متوسطه', cases: 44 },
          {
            id: 3,
            date: '17-8-2023',
            incident: 'الوفيات',
            cases: 67,
          },
        ];
      } else if (quarter === 'Q4') {
        return [
          { id: 1, date: '17-6-2023', incident: ' كبيرة', cases: 32 },
          { id: 2, date: '14-7-2023', incident: ' متوسطه', cases: 44 },
          {
            id: 3,
            date: '17-8-2023',
            incident: 'الوفيات',
            cases: 67,
          },
        ];
      }
    }

    return [];
  }
  private calculateTotalCrimes(
    crimes: { date: string; incident: string; cases: number }[]
  ) {
    return crimes.reduce((total, crime) => total + crime.cases, 0);
  }
}
