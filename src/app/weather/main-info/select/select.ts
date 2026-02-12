import { Component, signal, WritableSignal } from '@angular/core';
import { Location } from './select.model';

@Component({
  selector: 'app-select',
  imports: [],
  templateUrl: './select.html',
  styleUrl: './select.css',
})
export class Select {
  locations: Location[] = [
    { name: 'تهران', value: 'tehran' },
    { name: 'مشهد', value: 'mashhad' },
    { name: 'اصفهان', value: 'isfahan' },
    { name: 'تبریز', value: 'tabriz' },
    { name: 'شیراز', value: 'shiraz' },
  ];
  type: WritableSignal<'C' | 'F'> = signal('C');
  onClick(newType: 'C' | 'F') {
    if (newType === this.type()) return;
    this.type.set(newType);
  }
}
