import { Component, OnInit } from '@angular/core';
import { HorarioExecucao, Servico } from 'src/app/models/servico';

@Component({
  selector: 'app-servico',
  templateUrl: './servico.component.html',
  styleUrls: ['./servico.component.css']
})

export class ServicoComponent implements OnInit {
  
  servico : Servico = {
    imagem: 'https://picsum.photos/200/200',
    nomeProduto: 'Serviços',
    numeroAssinatura: 0,
    preco: 387.87,
    desconto: 12,
    horarioExecucao: HorarioExecucao.MANHA
  }

  constructor() { }

  onContratar(){
    this.servico.numeroAssinatura +=1;
    alert('Serviço adicionado no orçamento');
  }
    
    
  onCancelar(){
      if(this.servico.numeroAssinatura){
        this.servico.numeroAssinatura -=1;
      }
  }


  ngOnInit(): void {
  }

}
