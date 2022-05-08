import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './dashboard/header/header.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegisterModule } from './registermodule/registermodule.module';
import { GraphQLModule } from './graphql.module';
import { HttpClientModule } from '@angular/common/http';
import { AuthServiceModule } from './services/authmodule.service';
import {MatDialogModule} from '@angular/material/dialog';
import { DashboardService } from './services/dashboard.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpinterceptopService } from './http.interceptor';

@NgModule({
  declarations: [
    AppComponent,

    
  







  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DashboardModule,
    NgbModule,
    FormsModule,
    BrowserAnimationsModule,
    RegisterModule,
    GraphQLModule,
    HttpClientModule,
    MatDialogModule
  ],
  providers: [AuthServiceModule,DashboardService, { provide: HTTP_INTERCEPTORS, useClass: HttpinterceptopService, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
