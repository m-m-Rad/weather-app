import { Component, computed, effect, inject } from '@angular/core';
import { WeatherService } from '../../weather.service';

@Component({
  selector: 'app-forecasts',
  imports: [],
  templateUrl: './forecasts.html',
  styleUrl: './forecasts.css',
})
export class Forecasts {
  weatherService = inject(WeatherService);
  forecastDays = computed(() => this.weatherService.forCasts());
  days: any[] = [];

  constructor() {
    effect(() => {
      if (this.forecastDays().length > 0) {
        this.forecastDays().shift();
        this.days = this.forecastDays();
        console.log(this.days);
      }
    });
  }
}
