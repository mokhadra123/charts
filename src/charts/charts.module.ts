import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatisticComponent } from './statistic/statistic.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { IndividualChartComponent } from './individual-chart/individual-chart.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [StatisticComponent, IndividualChartComponent],
  imports: [CommonModule, NgApexchartsModule, HttpClientModule, FormsModule],
  exports: [StatisticComponent],
})
export class ChartsModule {}
