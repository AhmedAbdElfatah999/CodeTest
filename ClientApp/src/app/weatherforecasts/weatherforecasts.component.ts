import { WeatherforecastsService } from './weatherforecasts.service';
import { IWeatherforecast } from './../shared/models/weatherforecast';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weatherforecasts',
  templateUrl: './weatherforecasts.component.html',
  styleUrls: ['./weatherforecasts.component.scss']
})
export class WeatherforecastsComponent implements OnInit {
   weatherforecasts :IWeatherforecast[];

  constructor(private weatherforecastsService :WeatherforecastsService) { }

  ngOnInit(): void {
    this.getWeatherforecasts();
  }

   getWeatherforecasts(){
     this.weatherforecastsService.getWeatherforecasts().subscribe(
       response=>{
         this.weatherforecasts=response;
         console.log(this.weatherforecasts);
         console.log("weathercomponent Running");
         console.log(response);
       },
       error => {
        console.log(error);
      }
     );
   }
}
