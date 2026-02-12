import { Component, signal, viewChild, WritableSignal } from '@angular/core';
import { Location } from './select.model';

@Component({
  selector: 'app-select',
  imports: [],
  templateUrl: './select.html',
  styleUrl: './select.css',
})
export class Select {
  selectedLoc = signal('tehran');
  locations: Location[] = [
    { name: 'تهران', value: 'tehran' },
    { name: 'مشهد', value: 'mashhad' },
    { name: 'اصفهان', value: 'isfahan' },
    { name: 'تبریز', value: 'tabriz' },
    { name: 'شیراز', value: 'shiraz' },
  ];
  type: WritableSignal<'C' | 'F'> = signal('C');
  onChange(newSelect: string) {
    this.selectedLoc.set(newSelect);
  }
  onClick(newType: 'C' | 'F') {
    console.log(this.selectedLoc());
    if (newType === this.type()) return;
    this.type.set(newType);
  }
}
