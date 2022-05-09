import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import { DashboardService } from 'src/app/services/dashboard.service';

export class GraficoModel {
  Value:number;
  Color:string;
  Size:string;
  Legend:string;
}


@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent implements OnInit {
  lineChartData:ChartDataSets[]
  lineChartLabels: Label[]
  lineChartOptions:any
  lineChartColors: Color[]
  lineChartLegend:any
  lineChartType :any
  lineChartPlugins:any
  lineChartDataArray:any=[]
  lineChartCountryArray:any=[]
  // public lineChartData: ChartDataSets[] = [
  //   { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
  // ];
  // public lineChartLabels: Label[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  // public lineChartOptions:any= {
  //   responsive: true,
  //   maintainAspectRatio: false
  // };
  // public lineChartColors: Color[] = [
  //   {
  //     borderColor: 'black',
  //     backgroundColor: 'rgba(255,0,0,0.3)',
  //   },
  // ];
  // public lineChartLegend = true;
  // public lineChartType = 'line';
  // public lineChartPlugins = [];

  

  constructor(private dashboardservice:DashboardService) { }

  ngOnInit(): void {
    this.dashboardservice.mostsearchedcountries().subscribe(
      (res:any)=>{
        res.data.mostSearchedCountries.forEach(element => {
          this.lineChartDataArray.push(element.dcount)
          this.lineChartCountryArray.push(element.country)
        });
      }
    )
    this.lineChartData= [
      { data: this.lineChartDataArray, label: 'Most Searched Countries' },
    ];
    this.lineChartLabels = this.lineChartCountryArray;
    this.lineChartOptions= {
      responsive: true,
      maintainAspectRatio: false
    };
    this.lineChartColors = [
      {
        borderColor: 'black',
        backgroundColor: 'rgba(255,0,0,0.3)',
      },
    ];
    this.lineChartLegend = true;
    this.lineChartType = 'line';
    this.lineChartPlugins = [];
  
    
  }

}
