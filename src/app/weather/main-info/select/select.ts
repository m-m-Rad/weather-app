import { Component } from '@angular/core';
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
}
