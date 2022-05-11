import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pow'
})
export class PowPipe implements PipeTransform {

  transform(a: number, b?:number ) {
    if(!b){
      return Math.pow(a,2);
    }else{
      return Math.pow(a, b)
    }
  }

}
