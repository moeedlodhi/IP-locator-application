import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { DashboardRoutingModule } from "./dashboard-routing.module";
import { DashboardComponent } from "./dashboard.component";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { MatListModule } from "@angular/material/list";
import { HeaderComponent } from "../header/header.component";
import {MatMenuModule} from '@angular/material/menu';


@NgModule({
    declarations:[
        DashboardComponent,
        HeaderComponent
     
    ],
    imports:[
        CommonModule,
        DashboardRoutingModule,
        FormsModule,
        BrowserModule,
        MatMenuModule,
        MatListModule
    ]
    ,exports:[

    ]
})
export class DashboardModule{

}