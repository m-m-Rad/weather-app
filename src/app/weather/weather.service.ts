import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal, WritableSignal } from '@angular/core';
import { toObservable } from '@angular/core/rxjs-interop';
import { shareReplay, switchMap } from 'rxjs';
import { Degree } from './main-info/select/select.model';

@Injectable()
export class WeatherService {
  private http = inject(HttpClient);
  private DAYS = '4';
  private KEY = '66faa531cebd492baa4115539261002';

  SelectedCity = signal('tehran');
  SelectedDegSymbol: WritableSignal<Degree> = signal('DEFAULT');
  isFetching = signal(true);
  currentMain: WritableSignal<any> = signal({});
  forCasts: WritableSignal<any[]> = signal([]);

  weather$ = toObservable(this.SelectedCity).pipe(
    switchMap((city) => {
      this.isFetching.set(true);
      return this.http.get<any>(
        `http://api.weatherapi.com/v1/forecast.json?key=${this.KEY}&q=${city}&days=${this.DAYS}&hour=16`,
      );
    }),
    shareReplay(1),
  );

  getFarsiDateObject(date: Date = new Date()) {
    const locale = 'fa-IR-u-ca-persian';

    return {
      monthName: new Intl.DateTimeFormat(locale, { month: 'long' }).format(date),
      weekday: new Intl.DateTimeFormat(locale, { weekday: 'long' }).format(date),
      dayOfMonth: new Intl.DateTimeFormat(locale, { day: 'numeric' }).format(date),
      year: new Intl.DateTimeFormat(locale, { year: 'numeric' }).format(date),
      time: new Intl.DateTimeFormat(locale, {
        hour: 'numeric',
        minute: '2-digit',
      }).format(date),
    };
  }
  toFarsiDate(time: number): string {
    return new Intl.DateTimeFormat('fa-IR-u-ca-persian', {
      weekday: 'long',
    }).format(new Date(time * 1000));
  }
}
