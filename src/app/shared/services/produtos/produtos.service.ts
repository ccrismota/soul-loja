import { Injectable } from '@angular/core';
import { CategoriaProdudo, Produto } from 'src/app/models/produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

 private produtos: Produto[] = [
    {
      imagem: 'https://d2eajpoqaqhimg.cloudfront.net/content/dam/midea-aem/br/refrigeracao/frigobar-retr%C3%B4/preto/Frente%20fechada.png',
      nomeProduto: 'Auto Falante',
      descricao: 'A melhor caixa de som já fabricada no pais!',
      preco: 508.58,
      emPromocao: true,
      desconto: 0.1, // 10%
      categoriaProduto: CategoriaProdudo.ELETRO
    },
    {
      imagem: 'https://d2eajpoqaqhimg.cloudfront.net/content/dam/midea-aem/br/lavanderia/lava-e-seca/lava-e-seca-healthguard-smart-12-5kg-titanium-midea/Healthguard%2012,5%201.png',
      nomeProduto: 'Brastemp Preto',
      descricao: 'Não existe marca melhor, melhor é brastemp!',
      preco: 3875.97,
      emPromocao: true,
      desconto: 0.1, // 10%
      categoriaProduto: CategoriaProdudo.ELETRO
    },
    {
      imagem: 'https://www.mideastore.com.br/media/catalog/product/cache/afe93df1651adc7909bde6037874321a/f/r/frente.mf200d125wbwk.jpg',
      nomeProduto: 'Brastemp Branca',
      descricao: 'Não existe marca melhor, melhor é brastemp!',
      preco: 3975.97,
      emPromocao: true,
      desconto: 0.1, // 10%
      categoriaProduto: CategoriaProdudo.ELETRO
    },
    {
      imagem: 'https://i.picsum.photos/id/953/400/400.jpg?hmac=sCGl1xt9pdRyzGnhO5N_HVo_bObR1VVbUitw72cZ7K4',
      nomeProduto: 'Nome do Produto',
      descricao: 'Uma descrição super interessante',
      preco: 20.5,
      emPromocao: true,
      desconto: 0.1, // 10%
      categoriaProduto: CategoriaProdudo.ELETRO
    },
    {
      imagem: 'https://i.picsum.photos/id/953/400/400.jpg?hmac=sCGl1xt9pdRyzGnhO5N_HVo_bObR1VVbUitw72cZ7K4',
      nomeProduto: 'Nome do Produto',
      descricao: 'Uma descrição super interessante',
      preco: 20.5,
      emPromocao: true,
      desconto: 0.1, // 10%
      categoriaProduto: CategoriaProdudo.ELETRO
    },
    {
      imagem: 'https://i.picsum.photos/id/953/400/400.jpg?hmac=sCGl1xt9pdRyzGnhO5N_HVo_bObR1VVbUitw72cZ7K4',
      nomeProduto: 'Nome do Produto',
      descricao: 'Uma descrição super interessante',
      preco: 20.5,
      emPromocao: true,
      desconto: 0.1, // 10%
      categoriaProduto: CategoriaProdudo.ELETRO
    }
    
  ];

  getProdutos(): Produto[]{
    return this.produtos
  }

  addProduto(produto: Produto){
    this.produtos.push(produto);
  }

  constructor() { }
}
