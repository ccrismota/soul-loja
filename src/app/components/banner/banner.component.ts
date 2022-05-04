import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

slogan:String = 'A melhor Loja de todas!!!';
endereco: String = 'Rua x, São Paulo';
callToAction: String = 'Compre agora';
oculto: boolean = true;
idButton: boolean = true;
classBtn: String = 'btn btn-primary';

destaques: String[] = [
  'produtos de informatica com 30% OFF',
  'produtos de limpeza a partir de R$300,00',
  'vale presente de R$100,00 da playStorie',
  'Gift card de volarant'
];

  constructor() { }

onChangeLista(){
  this.oculto = !this.oculto;
  if(this.oculto){
    this.classBtn = 'btn btn-primary';
    this.callToAction = 'Mostrar destaques';
  }else{
    this.classBtn = 'btn btn-danger';
    this.callToAction = 'Ocultar Destaques';
  }
}





  ngOnInit(): void {
  }

}
