import { Component, OnInit } from '@angular/core';
import { Servico } from 'src/app/models/servico';

@Component({
  selector: 'app-novo-servico',
  templateUrl: './novo-servico.component.html',
  styleUrls: ['./novo-servico.component.css']
})
export class NovoServicoComponent implements OnInit {

  constructor() { }


  servico: Servico = {horarioExecucao: 'manha'} as Servico;

  onSubmit(){
    alert(`produtos ${this.servico.nomeServico} criado`);
    console.log(this.servico)
  }


  ngOnInit(): void {
  }

}
