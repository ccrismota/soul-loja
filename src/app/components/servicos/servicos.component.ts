import { Component, OnInit } from '@angular/core';
import {  Servico } from 'src/app/models/servico';
import { ServicosService } from 'src/app/shared/services/servicos/servicos.service';


@Component({
  selector: 'app-servicos',
  templateUrl: './servicos.component.html',
  styleUrls: ['./servicos.component.css']
})

export class ServicosComponent implements OnInit {
 
  constructor(private servicosService: ServicosService) { }

  servicos:Servico[] = [];
  orcamentos: Servico[] = [];


  addOrcamento(servico: Servico){
    this.orcamentos.push(servico);
    console.log('Produto adicionado no Orcamento');
    console.log(this.orcamentos);
  }

  servicoOrcamento(servico: Servico){
    return this.orcamentos.includes(servico);
  }

  ngOnInit(): void {
    this.servicos = this.servicosService.getServicos();
  }

}
