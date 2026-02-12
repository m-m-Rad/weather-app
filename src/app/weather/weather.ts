import { Component } from '@angular/core';
import { MainInfo } from './main-info/main-info';

@Component({
  selector: 'app-weather',
  imports: [MainInfo],
  templateUrl: './weather.html',
  styleUrl: './weather.css',
})
export class Weather {}
