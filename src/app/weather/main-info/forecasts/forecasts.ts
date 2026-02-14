import { Component, computed, effect, inject, signal } from '@angular/core';
import { WeatherService } from '../../weather.service';
import { Symbol } from '../../symbol/symbol';

@Component({
  selector: 'app-forecasts',
  imports: [Symbol],
  templateUrl: './forecasts.html',
  styleUrl: './forecasts.css',
})
export class Forecasts {
  weatherService = inject(WeatherService);
  forecastDays = computed(() => {
    const days = this.weatherService.forCasts();
    if (days.length !== 0 && days.length === 4) {
      return this.weatherService.forCasts().slice(1);
    }
    return days;
  });
}
