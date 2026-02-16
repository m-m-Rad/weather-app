import { Pipe, PipeTransform } from '@angular/core';
import { Degree } from '../main-info/select/select.model';

@Pipe({
  name: 'temp',
})
export class TempPipe implements PipeTransform {
  transform(value: number, type: Degree): string {
    if (type === 'DEFAULT' || type === 'C') return value.toFixed(0).toString();
    const result = ((value * 9) / 5 + 32).toFixed(0);
    return result.toString();
  }
}
