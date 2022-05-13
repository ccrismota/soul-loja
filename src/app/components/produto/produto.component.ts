import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Produto } from 'src/app/models/produto';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit {
  
@Input('dadoProduto') produto!: Produto;//Torna a propriedade uma propriedade de entrada do compponente
@Output('onCarrinho') onCarrinho = new EventEmitter<Produto>();

 
  constructor() { }



  precoDesconto(){
    return this.produto.preco - (this.produto.preco * this.produto.desconto);
  }

  onComprar(){
  alert('Produto adicionado no carrinho');
  this.onCarrinho.emit(this.produto);
}

  ngOnInit(): void {
  }

}
