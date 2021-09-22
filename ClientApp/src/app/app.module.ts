import {  HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WeatherforecastsComponent } from './weatherforecasts/weatherforecasts.component';
import { RouterModule } from '@angular/router';
import { WeatherforecastsService } from './weatherforecasts/weatherforecasts.service';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    AppComponent,
    WeatherforecastsComponent
    
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
