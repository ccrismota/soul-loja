import { Component, OnInit } from '@angular/core';
import { CategoriaProdudo, Produto } from 'src/app/models/produto';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit {
  
  produto: Produto = {
    imagem:  'https://picsum.photos/200/200',
    nomeProduto: 'Nome do Produto',
    descricao: 'Uma descrição super interessante Some quick example text to build on the card title and make up the bulk of the card',
    preco: 20.5,
    emPromocao:true,
    desconto: 0.1,
    categoriaProduto: CategoriaProdudo.LIMPEZA
  }

  precoDesconto(){
    return this.produto.preco - (this.produto.preco * this.produto.desconto);
  }


  constructor() { }

  onComprar(){
  alert('Produto adicionado no carrinho');
}

  ngOnInit(): void {
  }

}
