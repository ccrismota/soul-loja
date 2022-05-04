export interface Produto {
    imagem:String,
    nomeProduto: String,
    descricao: String,
    preco:number,
    emPromocao: boolean,
    desconto: number,
    categoriaProduto: CategoriaProdudo
}

export enum CategoriaProdudo{
    ELETRO = 'eletro',
    MOVEIS = 'moveis',
    LIMPEZA = 'limpeza'
}