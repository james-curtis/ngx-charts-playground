import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { APP_BASE_HREF } from '@angular/common';
import { SparklineComponent } from './custom-charts/sparkline/sparkline.component';
import { TimelineFilterBarChartComponent } from './custom-charts/timeline-filter-bar-chart/timeline-filter-bar-chart.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { ComboChartComponent, ComboSeriesVerticalComponent } from './custom-charts/combo-chart';

@NgModule({
  providers: [
    {
      provide: APP_BASE_HREF,
      useFactory: getBaseLocation,
    },
    provideClientHydration(),
  ],
  declarations: [
    AppComponent,
    SparklineComponent,
    TimelineFilterBarChartComponent,
    ComboChartComponent,
    ComboSeriesVerticalComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, NgxChartsModule],
  bootstrap: [AppComponent],
})
export class AppModule {}

export function getBaseLocation() {
  const paths: string[] = location.pathname.split('/').splice(1, 1);
  const basePath: string = (paths && paths[0]) || '';
  return '/' + basePath;
}
