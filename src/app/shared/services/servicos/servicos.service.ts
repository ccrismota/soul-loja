import { Injectable } from '@angular/core';
import { HorarioExecucao, Servico } from 'src/app/models/servico';

@Injectable({
  providedIn: 'root'
})
export class ServicosService {


  servicos: Servico[] = [
    {
     imagem: 'https://www.mideastore.com.br/media/catalog/product/cache/afe93df1651adc7909bde6037874321a/f/r/frente.mf200d125wbwk.jpg',
     nomeServico: 'Serviços',
     contratado: 0,
     descricao:'',
     preco: 387.87,
     desconto: 12,
     horarioExecucao: HorarioExecucao.MANHA
   },
   {
     imagem: 'https://m.media-amazon.com/images/I/71qjCdfBdiS._AC_SY355_.jpg',
     nomeServico: 'Serviços',
     contratado: 0,
     descricao:'',
     preco: 387.87,
     desconto: 12,
     horarioExecucao: HorarioExecucao.MANHA
   },
   {
     imagem: 'https://i.picsum.photos/id/953/400/400.jpg?hmac=sCGl1xt9pdRyzGnhO5N_HVo_bObR1VVbUitw72cZ7K4',
     nomeServico: 'Serviços',
     contratado: 0,
     descricao:'',
     preco: 387.87,
     desconto: 12,
     horarioExecucao: HorarioExecucao.MANHA
   },
   {
     imagem: 'https://i.picsum.photos/id/953/400/400.jpg?hmac=sCGl1xt9pdRyzGnhO5N_HVo_bObR1VVbUitw72cZ7K4',
     nomeServico: 'Serviços',
     contratado: 0,
     descricao:'',
     preco: 387.87,
     desconto: 12,
     horarioExecucao: HorarioExecucao.MANHA
   },
   {
     imagem: 'https://i.picsum.photos/id/953/400/400.jpg?hmac=sCGl1xt9pdRyzGnhO5N_HVo_bObR1VVbUitw72cZ7K4',
     nomeServico: 'Serviços',
     contratado: 0,
     descricao:'',
     preco: 387.87,
     desconto: 12,
     horarioExecucao: HorarioExecucao.MANHA
   },
   {
     imagem: 'https://i.picsum.photos/id/953/400/400.jpg?hmac=sCGl1xt9pdRyzGnhO5N_HVo_bObR1VVbUitw72cZ7K4',
     nomeServico: 'Serviços',
     contratado: 0,
     descricao:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ',
     preco: 387.87,
     desconto: 12,
     horarioExecucao: HorarioExecucao.MANHA
   }
   
 ];

 getServicos(): Servico[] {
   return this.servicos;
 }

 addServico(servico: Servico){
   this.servicos.push(servico);
 }

  constructor() { }
}


