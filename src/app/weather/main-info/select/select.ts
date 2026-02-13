import { Component, inject, signal, viewChild, WritableSignal } from '@angular/core';
import { Location } from './select.model';
import { WeatherService } from '../../weather.service';

@Component({
  selector: 'app-select',
  imports: [],
  templateUrl: './select.html',
  styleUrl: './select.css',
})
export class Select {
  weatherService = inject(WeatherService);
  locations: Location[] = [
    { name: 'تهران', value: 'tehran' },
    { name: 'مشهد', value: 'mashhad' },
    { name: 'اصفهان', value: 'isfahan' },
    { name: 'تبریز', value: 'tabriz' },
    { name: 'شیراز', value: 'shiraz' },
  ];
  type: WritableSignal<'C' | 'F'> = signal('C');
  onChange(newSelect: string) {
    this.weatherService.SelectedCity.set(newSelect);
  }
  onClick(newType: 'C' | 'F') {
    if (newType === this.type()) return;
    this.type.set(newType);
  }
}
