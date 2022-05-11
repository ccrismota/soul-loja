import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'obfsEmail'
})
export class ObfsEmailPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
