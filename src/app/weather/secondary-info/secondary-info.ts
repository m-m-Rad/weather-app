import { Component, computed, inject } from '@angular/core';
import { WeatherService } from '../weather.service';
import { Clock } from './clock/clock';
import { Quality } from './quality/quality';

@Component({
  selector: 'app-secondary-info',
  imports: [Clock, Quality],
  templateUrl: './secondary-info.html',
  styleUrl: './secondary-info.css',
})
export class SecondaryInfo {
  weatherService = inject(WeatherService);
  isFetching = this.weatherService.isFetching;
  info = computed(() => this.weatherService.forCasts()[0]);
}
