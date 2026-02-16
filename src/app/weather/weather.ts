import { Component, inject } from '@angular/core';
import { MainInfo } from './main-info/main-info';
import { SecondaryInfo } from './secondary-info/secondary-info';
import { WeatherService } from './weather.service';

@Component({
  selector: 'app-weather',
  imports: [MainInfo, SecondaryInfo],
  templateUrl: './weather.html',
  styleUrl: './weather.css',
})
export class Weather {}
