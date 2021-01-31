import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import {
  ApexNonAxisChartSeries,
  ApexPlotOptions,
  ApexChart
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  labels: string[];
  plotOptions: ApexPlotOptions;
};
@Component({
  selector: 'app-infobar',
  templateUrl: './infobar.component.html',
  styleUrls: ['./infobar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InfobarComponent implements OnInit {
  public chartOptions: Partial<ChartOptions>;
  constructor() { 
    this.chartOptions = {
      series: [40, 30, 20, 10],
      chart: {
        height: 330,
        type: "radialBar"
      },
      plotOptions: {
        radialBar: {
          track : {
            opacity : 0.5,
            strokeWidth : '20px',
          },
          dataLabels: {
            name: {
              fontSize: "22px"
            },
            value: {
              color:'white',
              fontSize: "16px"
            },
            total: {
              color:'white',
              show: true,
              label: "Total",
              formatter: function(w) {
                return "2703";
              }
            }
          }
        }
      },
      labels: ["18-20", "21-23", "23-25", " 26-100"]
    };

  }

  ngOnInit(): void {
  }

}
