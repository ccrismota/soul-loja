export interface Servico {
    imagem: String,
    nomeProduto: String,
    numeroAssinatura: number,
    preco: number,
    desconto: number,
    horarioExecucao: HorarioExecucao
}

export enum HorarioExecucao {
    MANHA = 'manha',
    TARDE = 'tarde',
    NOITE = 'noite'
}
