import { Component, computed, input } from '@angular/core';
import { WEATHER_ICON_MAP } from './weather-codes';

@Component({
  selector: 'app-weather-icon',
  imports: [],
  templateUrl: './weather-icon.html',
  styleUrl: './weather-icon.css',
})
export class WeatherIcon {
  code = input.required<number>();
  isNight = input.required<0 | 1>();
  small = input<boolean>();
  path = computed(() => WEATHER_ICON_MAP[this.code()][this.isNight()]);
}
