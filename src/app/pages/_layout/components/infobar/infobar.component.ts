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
      series: [5, 15, 30, 55],
      chart: {
        height: 330,
        type: "radialBar"
      },
      plotOptions: {
        
        radialBar: {
          inverseOrder: true,
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
      labels: ["UB", "UAB", "UPC", " UPF"]
    };

  }

  ngOnInit(): void {
  }

}
