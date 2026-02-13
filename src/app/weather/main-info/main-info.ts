import { Component, DestroyRef, inject, OnInit, signal, WritableSignal } from '@angular/core';
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
  private destroy = inject(DestroyRef);
  isFetching = this.weatherService.isFetching;
  error = signal('');
  time = this.weatherService.getFarsiDateObject();
  mainInfo: WritableSignal<any> = signal({});
  ngOnInit() {
    const sub = this.weatherService.weather$.subscribe({
      next: (respond) => {
        this.isFetching.set(false);
        this.weatherService.currentMain.set(respond.current);
        this.mainInfo.set(respond.current);
        console.log(this.weatherService.currentMain());
      },
      error: (err) => this.error.set('مشکلی پیش آمد'),
      complete: () =>
        this.destroy.onDestroy(() => {
          sub.unsubscribe();
        }),
    });
  }
}
