export interface Produto {
    imagem: string,
    nomeProduto: string,
    descricao: string,
    preco: number,
    emPromocao: boolean,
    desconto: number,
    categoriaProduto: CategoriaProdudo
}

export enum CategoriaProdudo{
    ELETRO = 'eletro',
    MOVEIS = 'moveis',
    LIMPEZA = 'limpeza'
}