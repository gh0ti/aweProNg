import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timestampToDate',
  standalone: true
})
export class TimestampToDatePipe implements PipeTransform {

  transform(value: number): string {
      const date = new Date(value * 1000);

      return date.toDateString();
  }
}
