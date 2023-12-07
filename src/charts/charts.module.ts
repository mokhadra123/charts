import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatisticComponent } from './statistic/statistic.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { IndividualChartComponent } from './individual-chart/individual-chart.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CrimesComponent } from './crimes/crimes.component';
import { MiddleCategoriesComponent } from './middle-categories/middle-categories.component';
import { PositionsChartsComponent } from './positions-charts/positions-charts.component';
import { MonthlyReportComponent } from './monthly-report/monthly-report.component';
import { MapComponent } from './map/map.component';
import { SwiperModule } from 'swiper/angular';

@NgModule({
  declarations: [
    StatisticComponent,
    IndividualChartComponent,
    CrimesComponent,
    MiddleCategoriesComponent,
    PositionsChartsComponent,
    MonthlyReportComponent,
    MapComponent,

  ],
  imports: [
    CommonModule,
    NgApexchartsModule,
    HttpClientModule,
    FormsModule,
    SwiperModule,
  ],
  exports: [StatisticComponent, CrimesComponent],
})
export class ChartsModule {}
