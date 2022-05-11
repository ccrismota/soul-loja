import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sum',
  pure: false
})
export class SumPipe implements PipeTransform {

  transform(numeros: number[]):number  {
    let soma = 0;
    for (const numero of numeros) {
      soma += numero;
    }
    return soma;
  }

}
