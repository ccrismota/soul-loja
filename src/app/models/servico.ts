export interface Servico {
    imagem: string,
    nomeServico: string,
    descricao:string,
    contratado: number,
    preco: number,
    desconto: number,
    horarioExecucao: HorarioExecucao
}

export enum HorarioExecucao {
    MANHA = 'manha',
    TARDE = 'tarde',
    NOITE = 'noite'
}
