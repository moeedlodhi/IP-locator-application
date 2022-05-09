import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { DashboardRoutingModule } from "./dashboard-routing.module";
import { DashboardComponent } from "./dashboard.component";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { HeaderComponent } from "./header/header.component";
import { HistoryComponent } from "../history/history.component";
import { ChartsComponent } from './charts/charts.component';
import { ChartsModule } from "ng2-charts";

@NgModule({
    declarations:[
        DashboardComponent,
        HeaderComponent,
        HistoryComponent,
        ChartsComponent
   
     
    ],
    imports:[
        CommonModule,
        DashboardRoutingModule,
        FormsModule,
        BrowserModule,
        ChartsModule
     
    ]
    ,exports:[

    ]
})
export class DashboardModule{

}