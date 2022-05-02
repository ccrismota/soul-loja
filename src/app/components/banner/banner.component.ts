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

  constructor() { }

  ngOnInit(): void {
  }

}
