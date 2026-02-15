import { Component, computed, effect, inject, signal } from '@angular/core';
import { WeatherService } from '../../weather.service';
import { Symbol } from '../../symbol/symbol';
import { WeatherIcon } from '../../weather-icon/weather-icon';

@Component({
  selector: 'app-forecasts',
  imports: [Symbol, WeatherIcon],
  templateUrl: './forecasts.html',
  styleUrl: './forecasts.css',
})
export class Forecasts {
  private weatherService = inject(WeatherService);
  toFarsiDate = this.weatherService.toFarsiDate;
  forecastDays = computed(() => {
    const days = this.weatherService.forCasts();
    if (days.length !== 0 && days.length === this.weatherService.forCasts().length) {
      return this.weatherService.forCasts().slice(1);
    }
    return days;
  });
}
