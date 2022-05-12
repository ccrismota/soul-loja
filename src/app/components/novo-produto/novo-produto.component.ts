import { Component, OnInit } from '@angular/core';
import { Produto } from 'src/app/models/produto';


@Component({
  selector: 'app-novo-produto',
  templateUrl: './novo-produto.component.html',
  styleUrls: ['./novo-produto.component.css']
})
export class NovoProdutoComponent implements OnInit {

  constructor() { }
 
  produto: Produto = {categoriaProduto: 'eletro', emPromocao: true, desconto: 0.0} as Produto;

  onSubmit(){
    alert(`produtos ${this.produto.nomeProduto} criado`);
    console.log(this.produto)
  }


  ngOnInit(): void {
  }

}
