import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'censor'
})
export class CensorPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
