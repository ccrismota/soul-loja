import { Component, OnInit } from '@angular/core';
import { Produto } from 'src/app/models/produto';
import { ProdutosService } from 'src/app/shared/services/produtos/produtos.service';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {

 constructor(private produtosService: ProdutosService) { }// 1-cria o construtor

produtos: Produto[] = [];//2-cria o array
carrinho: Produto[] = [];

  addCarrinho(produto: Produto){
    this.carrinho.push(produto);

    console.log('Produto adicionado no carrinho');
    console.log(this.carrinho);
  }

  produtosNoCarrinho(produto: Produto){
    return this.carrinho.includes(produto);
  }

 
  ngOnInit(): void { 
    this.produtos = this.produtosService.getProdutos(); //3-acessos aos dados iniciais
  }

}
