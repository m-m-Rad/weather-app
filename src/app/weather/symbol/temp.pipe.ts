import { Pipe, PipeTransform } from '@angular/core';
import { Degree } from '../main-info/select/select.model';

@Pipe({
  name: 'temp',
})
export class TempPipe implements PipeTransform {
  transform(value: number, type: Degree): string {
    if (type === 'DEFAULT' || type === 'C') return value.toString();
    const result = ((value * 9) / 5 + 32).toFixed(1);
    return result.toString();
  }
}
