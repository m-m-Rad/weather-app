import { Routes } from '@angular/router';
import { Weather } from './weather/weather';
import { WeatherService } from './weather/weather.service';

export const routes: Routes = [
  {
    path: '',
    component: Weather,
    providers: [WeatherService],
  },
];
