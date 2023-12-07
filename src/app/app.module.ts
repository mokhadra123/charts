import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChartsModule } from 'src/charts/charts.module';
import { HeaderComponent } from './header/header.component';
import { ReportsComponent } from './reports/reports.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, ReportsComponent],
  imports: [BrowserModule, AppRoutingModule, ChartsModule],
  exports: [HeaderComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
