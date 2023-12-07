import { Component, ViewChild } from '@angular/core';
import {
  ApexDataLabels,
  ApexLegend,
  ApexPlotOptions,
  ChartComponent,
} from 'ng-apexcharts';

import {
  ApexNonAxisChartSeries,
  ApexResponsive,
  ApexChart,
} from 'ng-apexcharts';

export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  responsive: ApexResponsive[];
  labels: any;
  legend: ApexLegend;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
};
interface CustomApexLegend extends ApexLegend {
  transform?: string;
}
@Component({
  selector: 'app-crimes',
  templateUrl: './crimes.component.html',
  styleUrls: ['./crimes.component.scss'],
})
export class CrimesComponent {
  @ViewChild('chart') chart!: ChartComponent;
  public chartOptions!: Partial<ChartOptions>;
  public selectedYear: string = '2023';
  public selectedQuarter: string = 'Q1'; // Default selected quarter
  public totalCrimes: number = 0;
  public tableData: { date: string; incident: string; cases: number }[] = [];

  constructor() {
    this.updateData();
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

      legend: {
        position: 'bottom',
        fontSize: '13px',
        fontFamily: 'Tajawal',
        fontWeight: '500',
        width: 400,
        
        horizontalAlign: 'center',

        // itemMargin: {
        //   horizontal: 30,
        //   vertical: 2,
        // },
        markers: {
          width: 18,
          height: 18,
          offsetX: 3,
        },
      },
      dataLabels: { enabled: false },
      plotOptions: {
        pie: {
          donut: {
            size: '35%',
          },
        },
      },
      // colors: [{'#FF5733', '#33FF57', '#5733FF'}],
    };

    this.totalCrimes = this.calculateTotalCrimes(crimesForSelectedYear);

    // Update table data
    this.tableData = crimesForSelectedYear.map((crime, index) => ({
      date: crime.date,
      incident: crime.incident,
      cases: crime.cases,
    }));
  }

  private fetchCrimesData(year: string, quarter: string) {
    if (year === '2023') {
      if (quarter === 'Q1') {
        return [
          { id: 1, date: '17-5-2023', incident: 'حالة سرقة', cases: 54 },
          { id: 2, date: '14-1-2023', incident: 'تصنيع الخمور', cases: 85 },
          {
            id: 3,
            date: '17-2-2023',
            incident: 'تسليم مركبة للدوريات الأمنية والمرور',
            cases: 20,
          },
          {
            id: 4,
            date: '7-3-2023',
            incident: 'تسليم شخص للدوريات الأمنية والمرور',
            cases: 50,
          },
          {
            id: 5,
            date: '19-4-2023',
            incident: 'التعدي علي المنشأت العامه',
            cases: 96,
          },
        ];
      } else if (quarter === 'Q2') {
        return [
          { id: 1, date: '17-6-2023', incident: 'حالة سرقة', cases: 32 },
          { id: 2, date: '14-7-2023', incident: 'تصنيع الخمور', cases: 44 },
          {
            id: 3,
            date: '17-8-2023',
            incident: 'تسليم مركبة للدوريات الأمنية والمرور',
            cases: 80,
          },
          {
            id: 4,
            date: '7-9-2023',
            incident: 'تسليم شخص للدوريات الأمنية والمرور',
            cases: 75,
          },
          {
            id: 5,
            date: '19-10-2023',
            incident: 'التعدي علي المنشأت العامه',
            cases: 25,
          },
        ];
      } else if (quarter === 'Q3') {
        return [
          { id: 1, date: '17-6-2023', incident: 'حالة سرقة', cases: 32 },
          { id: 2, date: '14-7-2023', incident: 'تصنيع الخمور', cases: 44 },
          {
            id: 3,
            date: '17-8-2023',
            incident: 'تسليم مركبة للدوريات الأمنية والمرور',
            cases: 67,
          },
          {
            id: 4,
            date: '7-9-2023',
            incident: 'تسليم شخص للدوريات الأمنية والمرور',
            cases: 55,
          },
          {
            id: 5,
            date: '19-10-2023',
            incident: 'التعدي علي المنشأت العامه',
            cases: 28,
          },
        ];
      } else if (quarter === 'Q4') {
        return [
          { id: 1, date: '17-6-2023', incident: 'حالة سرقة', cases: 32 },
          { id: 2, date: '14-7-2023', incident: 'تصنيع الخمور', cases: 44 },
          {
            id: 3,
            date: '17-8-2023',
            incident: 'تسليم مركبة للدوريات الأمنية والمرور',
            cases: 67,
          },
          {
            id: 4,
            date: '7-9-2023',
            incident: 'تسليم شخص للدوريات الأمنية والمرور',
            cases: 55,
          },
          {
            id: 5,
            date: '19-10-2023',
            incident: 'التعدي علي المنشأت العامه',
            cases: 28,
          },
        ];
      }
    } else if (year === '2022') {
      if (quarter === 'Q1') {
        return [
          { id: 1, date: '17-5-2023', incident: 'حالة سرقة', cases: 54 },
          { id: 2, date: '14-1-2023', incident: 'تصنيع الخمور', cases: 85 },
          {
            id: 3,
            date: '17-2-2023',
            incident: 'تسليم مركبة للدوريات الأمنية والمرور',
            cases: 75,
          },
          {
            id: 4,
            date: '7-3-2023',
            incident: 'تسليم شخص للدوريات الأمنية والمرور',
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
          { id: 1, date: '17-6-2023', incident: 'حالة سرقة', cases: 32 },
          { id: 2, date: '14-7-2023', incident: 'تصنيع الخمور', cases: 44 },
          {
            id: 3,
            date: '17-8-2023',
            incident: 'تسليم مركبة للدوريات الأمنية والمرور',
            cases: 67,
          },
          {
            id: 4,
            date: '7-9-2023',
            incident: 'تسليم شخص للدوريات الأمنية والمرور',
            cases: 55,
          },
          {
            id: 5,
            date: '19-10-2023',
            incident: 'التعدي علي المنشأت العامه',
            cases: 28,
          },
        ];
      } else if (quarter === 'Q3') {
        return [
          { id: 1, date: '17-6-2023', incident: 'حالة سرقة', cases: 32 },
          { id: 2, date: '14-7-2023', incident: 'تصنيع الخمور', cases: 44 },
          {
            id: 3,
            date: '17-8-2023',
            incident: 'تسليم مركبة للدوريات الأمنية والمرور',
            cases: 67,
          },
          {
            id: 4,
            date: '7-9-2023',
            incident: 'تسليم شخص للدوريات الأمنية والمرور',
            cases: 55,
          },
          {
            id: 5,
            date: '19-10-2023',
            incident: 'التعدي علي المنشأت العامه',
            cases: 28,
          },
        ];
      } else if (quarter === 'Q4') {
        return [
          { id: 1, date: '17-6-2023', incident: 'حالة سرقة', cases: 32 },
          { id: 2, date: '14-7-2023', incident: 'تصنيع الخمور', cases: 44 },
          {
            id: 3,
            date: '17-8-2023',
            incident: 'تسليم مركبة للدوريات الأمنية والمرور',
            cases: 67,
          },
          {
            id: 4,
            date: '7-9-2023',
            incident: 'تسليم شخص للدوريات الأمنية والمرور',
            cases: 55,
          },
          {
            id: 5,
            date: '19-10-2023',
            incident: 'التعدي علي المنشأت العامه',
            cases: 28,
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
