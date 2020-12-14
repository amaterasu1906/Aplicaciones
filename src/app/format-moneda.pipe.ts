import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatMoneda'
})
export class FormatMonedaPipe implements PipeTransform {

  transform(value:number): string {
    return "$$"+(Math.round(value * 1000) / 1000).toFixed(3);
  }

}
