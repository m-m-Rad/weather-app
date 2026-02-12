import { Component } from '@angular/core';
import { Select } from './select/select';

@Component({
  selector: 'app-main-info',
  imports: [Select],
  templateUrl: './main-info.html',
  styleUrl: './main-info.css',
})
export class MainInfo {}
