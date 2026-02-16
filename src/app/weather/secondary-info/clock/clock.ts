import { Component, computed, input } from '@angular/core';

@Component({
  selector: 'app-clock',
  imports: [],
  templateUrl: './clock.html',
  styleUrl: './clock.css',
})
export class Clock {
  title = input.required<string>();
  timeInput = input.required<string>();
  time = computed(() => {
    const withZero = this.timeInput().split(' ')[0];
    return withZero.substring(1);
  });
  hourDeg = computed(() => {
    return +this.time().split(':')[0] * 30;
  });
  minDeg = computed(() => {
    return +this.time().split(':')[1] * 6;
  });
}
