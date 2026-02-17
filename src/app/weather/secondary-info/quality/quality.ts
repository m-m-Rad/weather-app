import { Component, computed, input, signal } from '@angular/core';
import { QUALITYCODE } from './quality-codes';

@Component({
  selector: 'app-quality',
  imports: [],
  templateUrl: './quality.html',
  styleUrl: './quality.css',
})
export class Quality {
  title = input.required<string>();
  uv = input.required<number>();
  uvFixed = computed(() => this.uv().toFixed(0));
  uvInfo = computed(() => {
    const num = parseInt(this.uvFixed());
    if (num <= 2) return QUALITYCODE['2'];
    if (num <= 5) return QUALITYCODE['3-5'];
    if (num <= 7) return QUALITYCODE['6-7'];
    if (num >= 8) return QUALITYCODE['8'];

    return { url: '/assets/quality/low.png', name: 'خوب' };
  });
}
