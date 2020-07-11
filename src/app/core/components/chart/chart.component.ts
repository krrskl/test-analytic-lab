import { Label, Color } from 'ng2-charts';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss'],
})
export class ChartComponent implements OnInit {
  @Input() chartData: ChartDataSets[];
  @Input() chartLabels: Label[];

  lineChartOptions: ChartOptions = {
    responsive: true,
    tooltips: {
      callbacks: {
        label: (tooltipItem, data) => {
          return tooltipItem.value
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, '.');
        },
      },
    },
    scales: {
      yAxes: [
        {
          ticks: {
            callback: (value, index, values) => {
              return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
            },
          },
        },
      ],
    },
  };

  lineChartColors: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: 'rgba(0, 123, 255, 0.61)',
    },
  ];

  lineChartLegend = true;
  lineChartPlugins = [];
  lineChartType = 'line';
  constructor() {}

  ngOnInit() {}
}
