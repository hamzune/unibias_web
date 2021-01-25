import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
// import { DashboardsModule } from '../../_metronic/partials/content/dashboards/dashboards.module';
import { NgApexchartsModule } from 'ng-apexcharts';
import { InlineSVGModule } from 'ng-inline-svg';


@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    NgApexchartsModule,
    InlineSVGModule,
    RouterModule.forChild([
      {
        path: '',
        component: DashboardComponent,
      },
    ]),
    // DashboardsModule,
  ]
})
export class DashboardModule {}
