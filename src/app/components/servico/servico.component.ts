import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Servico } from 'src/app/models/servico';


@Component({
  selector: 'app-servico',
  templateUrl: './servico.component.html',
  styleUrls: ['./servico.component.css']
})

export class ServicoComponent implements OnInit {

  @Input('dadosServico') servico!: Servico;  
  @Output('onOrcamento') onOrcamento = new EventEmitter<Servico>();
  
  constructor() { }


  
  onContratar(){
    this.servico.contratado +=1;
    alert('Serviço adicionado no orçamento');
    this.onOrcamento.emit(this.servico);
  }
    
    
  onCancelar(){
      if(this.servico.contratado){
        this.servico.contratado -=1;
      }
  }


  ngOnInit(): void {
  }

}
