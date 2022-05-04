import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teste-data-binding',
  templateUrl: './teste-data-binding.component.html',
  styleUrls: ['./teste-data-binding.component.css']
})
export class TesteDataBindingComponent implements OnInit {

nome: String = 'Cícero';
imagem: String = 'https://picsum.photos/200/300/?blur';
batata: number = 30;
link: String = 'https://soulcodeacademy.org/';
labelLink: String = 'Acesse o link Soulcode';


  constructor() { }

  onAumentarAltura(){
    this.batata += 25;
  }

  onDiminuirAltura(){
    this.batata -= 25;
  }

  onLimpar(){
    this.labelLink = '';
  }

  ngOnInit(): void {
  }

}
