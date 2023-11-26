import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChartsModule } from 'src/charts/charts.module';
import { StatisticComponent } from 'src/charts/statistic/statistic.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, ChartsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
