import { Component, computed, effect, inject, input } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-symbol',
  imports: [],
  templateUrl: './symbol.html',
  styleUrl: './symbol.css',
})
export class Symbol {
  weatherService = inject(WeatherService);
  symbol = computed(() => this.weatherService.SelectedDegSymbol());
  size = input<'small' | 'big'>('big');
}
