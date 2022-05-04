import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servico',
  templateUrl: './servico.component.html',
  styleUrls: ['./servico.component.css']
})
export class ServicoComponent implements OnInit {
  
  numeroAssinatura: number = 0;
  

  constructor() { }

onAssinar(){
this.numeroAssinatura +=1;
}



onCancelar(){
  if(this.numeroAssinatura){
    this.numeroAssinatura -=1;
  }
}

  ngOnInit(): void {
  }

}
