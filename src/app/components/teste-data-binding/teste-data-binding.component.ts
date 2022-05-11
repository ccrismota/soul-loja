import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-teste-data-binding',
  templateUrl: './teste-data-binding.component.html',
  styleUrls: ['./teste-data-binding.component.css']
})
export class TesteDataBindingComponent implements OnInit, OnDestroy {

nome: String = 'Cícero';
imagem: String = 'https://picsum.photos/200/300/?blur';
batata: number = 30;
link: String = 'https://soulcodeacademy.org/';
labelLink: String = 'Acesse o link Soulcode';
hoje: Date = new Date();
porcentagem: number = 8.4;
numero: number = 45.4;
valor: number = 0.42342343;
message: string = 'Olá tudo bem!';

  array: number[] = [10,20,30];

  addArray(){
    this.array.push(1);
  }
  constructor() { }

  agora: Date = new Date();
  idInterval?: any;

  ngOnInit(): void {
    this.idInterval = setInterval(()=>{
      this.agora = new Date();
    }, 1000);
  }
  
  ngOnDestroy(): void {
   clearInterval(this.idInterval);
  }
  
  onAumentarAltura(){
    this.batata += 25;
  }

  onDiminuirAltura(){
    this.batata -= 25;
  }

  onLimpar(){
    this.labelLink = '';
  }

  

}
