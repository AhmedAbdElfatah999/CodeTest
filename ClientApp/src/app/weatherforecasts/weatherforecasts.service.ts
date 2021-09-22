import { IWeatherforecast } from './../shared/models/weatherforecast';
import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class WeatherforecastsService {
  baseUrl = 'https://localhost:5001/api/';

  constructor(private http: HttpClient) {}

  getWeatherforecasts() :Observable<IWeatherforecast[]>{
    return this.http.get<IWeatherforecast[]>(this.baseUrl+'weatherforecast/getweatherforecasts');
  }
}
