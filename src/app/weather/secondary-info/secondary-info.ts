import { Component, computed, inject } from '@angular/core';
import { WeatherService } from '../weather.service';
import { Clock } from './clock/clock';

@Component({
  selector: 'app-secondary-info',
  imports: [Clock],
  templateUrl: './secondary-info.html',
  styleUrl: './secondary-info.css',
})
export class SecondaryInfo {
  weatherService = inject(WeatherService);
  info = computed(() => this.weatherService.forCasts()[0]);
}
