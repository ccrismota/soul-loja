import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SorteioService {

  constructor() { }

  sortear(nomes:string[]): Observable<string> {
    return new Observable(emissor => {
      setTimeout(() => {
        if (nomes.length === 1) {
          emissor.error("Não pode sortear apenas um");
        }else{
          const sorteio = Math.floor(Math.random() * nomes.length);
          emissor.next(nomes[sorteio]);
          emissor.complete();
        }
      }, 1000);
    });
  }

}
