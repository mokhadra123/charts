import { Component, OnInit, ViewChild } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexTooltip,
  ApexStroke,
  ApexYAxis,
  ApexLegend,
} from 'ng-apexcharts';


interface ChartOptions {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  stroke: ApexStroke;
  tooltip: ApexTooltip;
  dataLabels: ApexDataLabels;
  yaxis: ApexYAxis;
  legend: ApexLegend;
  colors: any;
}

interface QuartersData {
  [year: string]: {
    [quarter: string]: {
      [sector: string]: { type: string; data: number[] }[];
    };
  };
}

interface Accident {
  type: string;
  data: number[];
}

interface CitiesData {
  [sector: string]: string[];
}

@Component({
  selector: 'app-statistic',
  templateUrl: './statistic.component.html',
  styleUrls: ['./statistic.component.scss'],
})
export class StatisticComponent implements OnInit {
  @ViewChild('chart') chart!: ChartComponent;
  public chartOptions: Partial<ChartOptions> = {};
  public selectedYear: string = '2023';
  public selectedQuarter: string = 'تقرير الربع الاول';
  public selectedSector: string = 'EasternSector';
  public citiesData: CitiesData = {
    westernSector: [
      ' جدة الأولى',
      'جدة الثانية و الثالثة',
      'عسفان',
      'مكة المكرمة',
      'الطائف',
      ' المدينة المنورة',
      'ينبع',
      '   عسير الأولى',
      ' الباحة',
      'جازان',

      ' المدينة المنورة',
      ' نجران',
      ' تبوك ',
    ],
    EasternSector: [
      'الدمام الأولى',
      'الدمام الثانيه',
      'الدمام الثالثة',
      'الأحساء ',
      'واحة الأحساء',
      'حفر الباطن',
      'وعد الشمال',
      'عرعر ',
      'الجوف',
    ],
    middleSector: [
      'الرياض الأولى',
      'الرياض الثانية',
      'الرياض الثالثة',
      'الخرج',
      'سدير',
      'القصيم الأولى',
      'واحة القصيم',
      'حائل',
      'ضرما',
      'شقراء',
      'زلفي',
    ],
  };

  public selectedCities: string[] = [];
  constructor() {
    this.updateChartOptions();
  }

  
  // ====================== slider ==========================
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    nav: true,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1,
      },
    },
  };
  carouselItems: any = [
    

  ];

  // ==============================charts ============================
  ngOnInit(): void {}

  updateChartOptions(): void {
    const months = ['يناير', 'فبراير', 'مارس', 'ابريل'];

    const quartersData: QuartersData = {
      '2023': {
        'تقرير الربع الاول': {
          EasternSector: [
            { type: 'كبيرة (اصاباة نقلت بالاسعاف)', data: [1, 2, 2, 3] },
            { type: 'متوسطة بسيطه (ضرر بالمركبه)', data: [1, 4, 1, 2] },
            { type: 'عدد وفيات الحوادث المروريه', data: [1, 5, 3, 2] },
          ],
          westernSector: [
            { type: 'كبيرة (اصاباة نقلت بالاسعاف)', data: [1, 2, 2, 3] },
            { type: 'متوسطة بسيطه (ضرر بالمركبه)', data: [1, 4, 1, 2] },
            { type: 'عدد وفيات الحوادث المروريه', data: [1, 5, 3, 2] },
          ],
          middleSector: [
            { type: 'كبيرة (اصاباة نقلت بالاسعاف)', data: [1, 2, 2, 3] },
            { type: 'متوسطة بسيطه (ضرر بالمركبه)', data: [1, 4, 1, 2] },
            { type: 'عدد وفيات الحوادث المروريه', data: [1, 5, 3, 2] },
          ],
        },
        'تقرير الربع الثاني': {
          EasternSector: [
            { type: 'كبيرة (اصاباة نقلت بالاسعاف)', data: [1, 2, 2, 3] },
            { type: 'متوسطة بسيطه (ضرر بالمركبه)', data: [1, 4, 1, 2] },
            { type: 'عدد وفيات الحوادث المروريه', data: [1, 5, 3, 2] },
          ],
          westernSector: [
            { type: 'كبيرة (اصاباة نقلت بالاسعاف)', data: [1, 2, 2, 3] },
            { type: 'متوسطة بسيطه (ضرر بالمركبه)', data: [1, 4, 1, 2] },
            { type: 'عدد وفيات الحوادث المروريه', data: [1, 5, 3, 2] },
          ],
          middleSector: [
            { type: 'كبيرة (اصاباة نقلت بالاسعاف)', data: [1, 2, 2, 3] },
            { type: 'متوسطة بسيطه (ضرر بالمركبه)', data: [1, 4, 1, 2] },
            { type: 'عدد وفيات الحوادث المروريه', data: [1, 5, 3, 2] },
          ],
        },
        'تقرير الربع الثالث': {
          EasternSector: [
            { type: 'كبيرة (اصاباة نقلت بالاسعاف)', data: [1, 2, 2, 3] },
            { type: 'متوسطة بسيطه (ضرر بالمركبه)', data: [1, 4, 1, 2] },
            { type: 'عدد وفيات الحوادث المروريه', data: [1, 5, 3, 2] },
          ],
          westernSector: [
            { type: 'كبيرة (اصاباة نقلت بالاسعاف)', data: [1, 2, 2, 3] },
            { type: 'متوسطة بسيطه (ضرر بالمركبه)', data: [1, 4, 1, 2] },
            { type: 'عدد وفيات الحوادث المروريه', data: [1, 5, 3, 2] },
          ],
          middleSector: [
            { type: 'كبيرة (اصاباة نقلت بالاسعاف)', data: [1, 2, 2, 3] },
            { type: 'متوسطة بسيطه (ضرر بالمركبه)', data: [1, 4, 1, 2] },
            { type: 'عدد وفيات الحوادث المروريه', data: [1, 5, 3, 2] },
          ],
        },
        'تقرير الربع الرابع': {
          EasternSector: [
            { type: 'كبيرة (اصاباة نقلت بالاسعاف)', data: [1, 2, 2, 3] },
            { type: 'متوسطة بسيطه (ضرر بالمركبه)', data: [1, 4, 1, 2] },
            { type: 'عدد وفيات الحوادث المروريه', data: [1, 5, 3, 2] },
          ],
          westernSector: [
            { type: 'كبيرة (اصاباة نقلت بالاسعاف)', data: [1, 2, 2, 3] },
            { type: 'متوسطة بسيطه (ضرر بالمركبه)', data: [1, 4, 1, 2] },
            { type: 'عدد وفيات الحوادث المروريه', data: [1, 5, 3, 2] },
          ],
          middleSector: [
            { type: 'كبيرة (اصاباة نقلت بالاسعاف)', data: [1, 2, 2, 3] },
            { type: 'متوسطة بسيطه (ضرر بالمركبه)', data: [1, 4, 1, 2] },
            { type: 'عدد وفيات الحوادث المروريه', data: [1, 5, 3, 2] },
          ],
        },
      },
      '2022': {
        'تقرير الربع الاول': {
          EasternSector: [
            { type: 'كبيرة (اصاباة نقلت بالاسعاف)', data: [1, 2, 2, 3] },
            { type: 'متوسطة بسيطه (ضرر بالمركبه)', data: [1, 4, 1, 2] },
            { type: 'عدد وفيات الحوادث المروريه', data: [1, 5, 3, 2] },
          ],
          westernSector: [
            { type: 'كبيرة (اصاباة نقلت بالاسعاف)', data: [1, 2, 2, 3] },
            { type: 'متوسطة بسيطه (ضرر بالمركبه)', data: [1, 4, 1, 2] },
            { type: 'عدد وفيات الحوادث المروريه', data: [1, 5, 3, 2] },
          ],
          middleSector: [
            { type: 'كبيرة (اصاباة نقلت بالاسعاف)', data: [1, 2, 2, 3] },
            { type: 'متوسطة بسيطه (ضرر بالمركبه)', data: [1, 4, 1, 2] },
            { type: 'عدد وفيات الحوادث المروريه', data: [1, 5, 3, 2] },
          ],
        },
        'تقرير الربع الثاني': {
          EasternSector: [
            { type: 'كبيرة (اصاباة نقلت بالاسعاف)', data: [1, 2, 2, 3] },
            { type: 'متوسطة بسيطه (ضرر بالمركبه)', data: [1, 4, 1, 2] },
            { type: 'عدد وفيات الحوادث المروريه', data: [1, 5, 3, 2] },
          ],
          westernSector: [
            { type: 'كبيرة (اصاباة نقلت بالاسعاف)', data: [1, 2, 2, 3] },
            { type: 'متوسطة بسيطه (ضرر بالمركبه)', data: [1, 4, 1, 2] },
            { type: 'عدد وفيات الحوادث المروريه', data: [1, 5, 3, 2] },
          ],
          middleSector: [
            { type: 'كبيرة (اصاباة نقلت بالاسعاف)', data: [1, 2, 2, 3] },
            { type: 'متوسطة بسيطه (ضرر بالمركبه)', data: [1, 4, 1, 2] },
            { type: 'عدد وفيات الحوادث المروريه', data: [1, 5, 3, 2] },
          ],
        },
        'تقرير الربع الثالث': {
          EasternSector: [
            { type: 'كبيرة (اصاباة نقلت بالاسعاف)', data: [1, 2, 2, 3] },
            { type: 'متوسطة بسيطه (ضرر بالمركبه)', data: [1, 4, 1, 2] },
            { type: 'عدد وفيات الحوادث المروريه', data: [1, 5, 3, 2] },
          ],
          westernSector: [
            { type: 'كبيرة (اصاباة نقلت بالاسعاف)', data: [1, 2, 2, 3] },
            { type: 'متوسطة بسيطه (ضرر بالمركبه)', data: [1, 4, 1, 2] },
            { type: 'عدد وفيات الحوادث المروريه', data: [1, 5, 3, 2] },
          ],
          middleSector: [
            { type: 'كبيرة (اصاباة نقلت بالاسعاف)', data: [1, 2, 2, 3] },
            { type: 'متوسطة بسيطه (ضرر بالمركبه)', data: [1, 4, 1, 2] },
            { type: 'عدد وفيات الحوادث المروريه', data: [1, 5, 3, 2] },
          ],
        },
        'تقرير الربع الرابع': {
          EasternSector: [
            { type: 'كبيرة (اصاباة نقلت بالاسعاف)', data: [1, 2, 2, 3] },
            { type: 'متوسطة بسيطه (ضرر بالمركبه)', data: [1, 4, 1, 2] },
            { type: 'عدد وفيات الحوادث المروريه', data: [1, 5, 3, 2] },
          ],
          westernSector: [
            { type: 'كبيرة (اصاباة نقلت بالاسعاف)', data: [1, 2, 2, 3] },
            { type: 'متوسطة بسيطه (ضرر بالمركبه)', data: [1, 4, 1, 2] },
            { type: 'عدد وفيات الحوادث المروريه', data: [1, 5, 3, 2] },
          ],
          middleSector: [
            { type: 'كبيرة (اصاباة نقلت بالاسعاف)', data: [1, 2, 2, 3] },
            { type: 'متوسطة بسيطه (ضرر بالمركبه)', data: [1, 4, 1, 2] },
            { type: 'عدد وفيات الحوادث المروريه', data: [1, 5, 3, 2] },
          ],
        },
      },
      // ... other years
    };

    const selectedData: Accident[] =
      quartersData[this.selectedYear][this.selectedQuarter][
        this.selectedSector
      ];

    this.chartOptions = {
      series: selectedData.map((accident: Accident) => ({
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
        colors: ['#ED212B', '#56D9FE', '#4981FD'],
      },
      xaxis: {
        categories: months,
      },
      tooltip: {
        x: {
          format: 'dd/MM/yy HH:mm',
        },
      },
      colors: {
        colors: ['#ED212B', '#56D9FE', '#4981FD'],
      },
      legend: {
        position: 'bottom',
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
  updateCities(): void {
    // Update the chart options when the selected cities change
    // You can customize this based on your specific requirements
    console.log(this.selectedCities);
  }
}
