import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthenticationGuard } from "../authentication.guard";
import { DashboardComponent } from "./dashboard.component";



const routes:Routes=[
    
    {path:'',pathMatch:'full',redirectTo:'/dashboard'},
    {path:'dashboard',canActivate:[AuthenticationGuard],component:DashboardComponent,children:[

    ]}]


@NgModule({
    imports:[
        RouterModule.forChild(routes)
    ],
    exports:[RouterModule]
})
export class DashboardRoutingModule{

}