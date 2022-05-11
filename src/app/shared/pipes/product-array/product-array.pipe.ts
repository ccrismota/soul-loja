import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'productArray'
})
export class ProductArrayPipe implements PipeTransform {

  transform(array: number[]): number {
    let multiplicar = 0;
    for (let i = 0; i < array.length; i++) {
      multiplicar = array[i] * array[i + 1];
      multiplicar++;
    }
    return multiplicar;
  }

}
