import { Component, inject, OnInit, signal, WritableSignal } from '@angular/core';
import { Select } from './select/select';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-main-info',
  imports: [Select],
  templateUrl: './main-info.html',
  styleUrl: './main-info.css',
})
export class MainInfo implements OnInit {
  private weatherService = inject(WeatherService);
  isFetching = signal(true);
  error = signal('');
  time = this.weatherService.getFarsiDateObject();
  mainInfo: WritableSignal<any> = signal({});
  ngOnInit() {
    this.weatherService.weather$.subscribe({
      next: (respond) => {
        this.isFetching.set(false);
        this.weatherService.currentMain.set(respond.current);
        this.mainInfo.set(respond.current);
        console.log(this.weatherService.currentMain());
      },
      error: (err) => this.error.set('مشکلی پیش آمد'),
    });
  }
}
