import { Component, OnInit } from '@angular/core';
import { SorteioService } from 'src/app/shared/services/sorteio/sorteio.service';

@Component({
  selector: 'app-sorteio',
  templateUrl: './sorteio.component.html',
  styleUrls: ['./sorteio.component.css']
})
export class SorteioComponent implements OnInit {

  constructor(private sorteioService: SorteioService) { }

valores: string = '';
sorteado: string = '';

loading = false;
  onSorteio(){
  const nomes = this.valores.trim().split("\n");
  this.sorteado = '';
  this.loading = true;

  this.sorteioService.sortear(nomes).subscribe({
    next: (sorteado) => {
      this.loading = false;
      this.sorteado = sorteado;
    },
    error: (erro) => {
      this.loading = false;
      alert(erro);
    }
  });
  }

  ngOnInit(): void {
  }

}
