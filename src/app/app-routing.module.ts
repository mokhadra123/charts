import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReportsComponent } from './reports/reports.component';
import { StatisticComponent } from 'src/charts/statistic/statistic.component';
import { CrimesComponent } from 'src/charts/crimes/crimes.component';

const routes: Routes = [
  { path: '', component: ReportsComponent },
  { path: 'statistics', component: StatisticComponent },
  { path: 'crimes', component: CrimesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
